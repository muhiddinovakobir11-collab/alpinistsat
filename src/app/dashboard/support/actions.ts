'use server';

import fs from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';

export async function submitTicket(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const type = formData.get('type') as string;
  const description = formData.get('description') as string;

  const filePath = path.join(process.cwd(), 'src/data/tickets.json');
  let tickets = [];
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    tickets = JSON.parse(fileContent);
  } catch (e) {
    tickets = [];
  }

  tickets.push({
    id: Date.now(),
    name,
    email,
    type: type || 'Other',
    description,
    date: new Date().toISOString()
  });

  fs.writeFileSync(filePath, JSON.stringify(tickets, null, 2), 'utf-8');
  revalidatePath('/dashboard/support');
  revalidatePath('/admin');
}
