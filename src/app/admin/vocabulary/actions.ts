'use server';

import fs from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';

export async function addWord(formData: FormData) {
  const word = formData.get('word') as string;
  const definition = formData.get('definition') as string;
  const example = formData.get('example') as string;

  const filePath = path.join(process.cwd(), 'src/data/vocabulary.json');
  let words = [];
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    words = JSON.parse(fileContent);
  } catch (e) {
    words = [];
  }

  words.push({
    id: Date.now(),
    word,
    definition,
    example
  });

  fs.writeFileSync(filePath, JSON.stringify(words, null, 2), 'utf-8');
  revalidatePath('/admin/vocabulary');
  revalidatePath('/dashboard/vocabulary');
}
