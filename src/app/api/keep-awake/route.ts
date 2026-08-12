import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    status: 'ok', 
    message: 'Server is awake!', 
    time: new Date().toISOString() 
  });
}
