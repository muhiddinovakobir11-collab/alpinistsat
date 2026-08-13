import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  try {
    const { message, imageBase64, testContext } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ 
        reply: "Hello! I am your AI SAT Tutor. Please add your GEMINI_API_KEY to the .env.local file to activate my super smart brain!" 
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    let prompt = `You are an expert SAT tutor for the 'Alpinist SAT' platform. Keep your response concise, helpful, and directly related to the SAT. You MUST communicate with the student in the Uzbek language (O'zbek tilida).`;
    
    if (testContext) {
      prompt += `\n\nContext about the student: The student recently scored a ${testContext.totalScore} on their mock test (${testContext.readingScore} Reading, ${testContext.mathScore} Math). Tailor your advice considering these strengths/weaknesses.`;
    }

    prompt += `\n\nStudent says: "${message}"`;

    let result;
    if (imageBase64) {
      // Decode base64 to parts
      const imageParts = [
        {
          inlineData: {
            data: imageBase64.split(',')[1],
            mimeType: imageBase64.substring(imageBase64.indexOf(':') + 1, imageBase64.indexOf(';'))
          }
        }
      ];
      result = await model.generateContent([prompt, ...imageParts]);
    } else {
      result = await model.generateContent(prompt);
    }
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });

  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return NextResponse.json({ reply: `Sorry, I am having trouble connecting to my brain right now. Error: ${error.message || 'Unknown'}` }, { status: 500 });
  }
}
