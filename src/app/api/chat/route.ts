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
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    let prompt = `Siz "Alpinist SAT" platformasidagi professional SAT repetitorisiz. 
Muhim qoidalar:
1. Hech qachon "Salom", "Assalomu alaykum", "Xush kelibsiz" kabi so'zlar bilan gap boshlamang. Siz doimiy suhbat jarayonidasiz. To'g'ridan-to'g'ri javobga o'ting.
2. Qisqa, aniq va foydali javob bering. Suv qilmang.
3. Faqat o'zbek tilida yozing.
4. O'quvchiga doim "sen" deb emas, "siz" deb hurmat bilan, lekin yaqin do'stdek murojaat qiling.`;
    
    if (testContext) {
      prompt += `\n\nO'quvchi haqida qisqacha ma'lumot: Yaqinda mock testda ${testContext.totalScore} ball oldi (Reading: ${testContext.readingScore}, Math: ${testContext.mathScore}). Shu natijaga qarab maslahat bering.`;
    }

    prompt += `\n\nO'quvchining savoli/xabari: "${message}"\nSizning javobingiz (salomlashmasdan):`;

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
