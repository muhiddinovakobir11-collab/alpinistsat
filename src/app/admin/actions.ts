'use server';

import fs from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';

// Fake AI Extraction function
export async function uploadPdfMock(formData: FormData) {
  const mode = formData.get('mode') as string;
  
  // Simulate AI Processing Delay (3 seconds)
  await new Promise(resolve => setTimeout(resolve, 3000));

  const isFullMock = mode === 'full_mock';
  const prefix = isFullMock ? 'mock_ai_' : 'q_ai_';

  const newQuestions = [
    {
      id: prefix + Date.now(),
      section: 'Reading and Writing',
      passage: isFullMock ? '[MOCK TEST 1] This passage was automatically extracted by AI from the uploaded FULL MOCK TEST document.' : 'This passage was automatically extracted by AI from the uploaded PDF document.',
      questionText: 'What is the main idea of the passage?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 'Option C'
    },
    {
      id: prefix + (Date.now() + 1),
      section: 'Math',
      passage: '',
      questionText: isFullMock ? '[MOCK TEST 1] If 2x = 10, what is the value of x?' : 'If 2x = 10, what is the value of x? (Extracted from PDF)',
      options: ['2', '4', '5', '10'],
      correctAnswer: '5'
    }
  ];

  const filePath = path.join(process.cwd(), 'src/data/mockTest.ts');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  let insertionString = '';
  newQuestions.forEach(q => {
    insertionString += `,\n  ${JSON.stringify(q, null, 2)}`;
  });
  insertionString += '\n];';
  
  if (fileContent.endsWith('];')) {
    const newContent = fileContent.slice(0, -2) + insertionString;
    fs.writeFileSync(filePath, newContent, 'utf-8');
  }

  revalidatePath('/dashboard/question-bank');
  revalidatePath('/test');
  if (isFullMock) {
    revalidatePath('/dashboard/practice');
  }

  return newQuestions;
}
