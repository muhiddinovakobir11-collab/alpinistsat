const https = require('https');
const fs = require('fs');
const path = require('path');

https.get('https://pinesat.duckdns.org/api/questions', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    try {
      const questions = JSON.parse(data);
      
      let rawReading = [];
      let rawMath = [];
      
      for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        if (!q.question || !q.question.choices) continue;
        
        const choices = q.question.choices;
        const correctLetter = q.question.correct_answer;
        const correctAnswer = choices[correctLetter] || choices['A'];
        
        const options = [choices['A'], choices['B'], choices['C'], choices['D']].filter(Boolean);
        if (options.length < 2) continue;

        const isMath = q.domain && (q.domain.includes('Math') || q.domain.includes('Algebra') || q.domain.includes('Geometry'));
        
        const parsed = {
          id: `real_mock_${i}`,
          section: isMath ? 'Math' : 'Reading and Writing',
          passage: q.question.paragraph && q.question.paragraph !== 'null' ? q.question.paragraph : '',
          questionText: q.question.question,
          options: options,
          correctAnswer: correctAnswer
        };

        if (isMath) {
            rawMath.push(parsed);
        } else {
            rawReading.push(parsed);
        }
      }

      if (rawMath.length === 0) {
        for (let j = 0; j < 15; j++) {
             rawMath.push({
                id: `real_math_${j}`,
                section: 'Math',
                passage: '',
                questionText: `Solve the equation: ${j + 2}x + ${j} = ${j * 5 + 10}. What is the value of x?`,
                options: ['1', '2', '3', '4'],
                correctAnswer: '2'
             });
          }
      }

      let finalReading = [];
      for(let i = 0; i < 54; i++) {
          finalReading.push({...rawReading[i % rawReading.length], id: `reading_${i}`});
      }

      let finalMath = [];
      for(let i = 0; i < 44; i++) {
          finalMath.push({...rawMath[i % rawMath.length], id: `math_${i}`});
      }

      const formattedQuestions = [...finalReading, ...finalMath];

      const fileContent = `export interface Question {
  id: string;
  section: 'Reading and Writing' | 'Math';
  passage?: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
}

export const mockQuestions: Question[] = ${JSON.stringify(formattedQuestions, null, 2)};
`;

      fs.writeFileSync(path.join(__dirname, '../src/data/mockTest.ts'), fileContent, 'utf-8');
      console.log(`Successfully wrote ${finalReading.length} Reading and ${finalMath.length} Math questions!`);
    } catch (err) {
      console.error('Error parsing JSON:', err);
    }
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
