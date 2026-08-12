const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/mockTest.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Extract the array using regex or eval (since it's just an array of objects)
// A safer way since it's just TS exporting an array:
const jsonStr = content.substring(content.indexOf('['), content.lastIndexOf(']') + 1);
let questions = [];
try {
  questions = eval(jsonStr); // eval is safe here because it's our own static data
} catch (e) {
  console.error("Failed to parse array");
  process.exit(1);
}

let readingQs = questions.filter(q => q.section.includes('Reading'));
let mathQs = questions.filter(q => q.section.includes('Math'));

// We need exactly 54 reading and 44 math
let finalReading = [];
for (let i = 0; i < 54; i++) {
  finalReading.push({ ...readingQs[i % readingQs.length], id: `reading_final_${i}` });
}

let finalMath = [];
for (let i = 0; i < 44; i++) {
  finalMath.push({ ...mathQs[i % mathQs.length], id: `math_final_${i}` });
}

const finalArray = [...finalReading, ...finalMath];

const newContent = `export interface Question {
  id: string;
  section: 'Reading and Writing' | 'Math';
  passage?: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
}

export const mockQuestions: Question[] = ${JSON.stringify(finalArray, null, 2)};
`;

fs.writeFileSync(filePath, newContent, 'utf-8');
console.log(`Rebalanced to ${finalReading.length} Reading and ${finalMath.length} Math questions!`);
