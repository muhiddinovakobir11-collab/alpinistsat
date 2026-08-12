import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message, imageBase64, testContext } = await req.json();

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ 
        reply: "Hello! I am your AI SAT Tutor. Please add your OPENAI_API_KEY to the .env.local file to activate my super smart brain!" 
      });
    }

    let systemPrompt = `You are an expert SAT tutor for the 'Alpinist SAT' platform. Keep your response concise, helpful, and directly related to the SAT. You MUST communicate with the student in the Uzbek language (O'zbek tilida).`;
    
    if (testContext) {
      systemPrompt += `\n\nContext about the student: The student recently scored a ${testContext.totalScore} on their mock test (${testContext.readingScore} Reading, ${testContext.mathScore} Math). Tailor your advice considering these strengths/weaknesses.`;
    }

    const messages: any[] = [
      { role: "system", content: systemPrompt }
    ];

    if (imageBase64) {
      messages.push({
        role: "user",
        content: [
          { type: "text", text: message },
          { type: "image_url", image_url: { url: imageBase64 } }
        ]
      });
    } else {
      messages.push({ role: "user", content: message });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: messages,
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API Error:', errorData);
      throw new Error(errorData.error?.message || 'Failed to fetch from OpenAI');
    }

    const data = await response.json();
    const text = data.choices[0].message.content;

    return NextResponse.json({ reply: text });

  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ reply: `Sorry, I am having trouble connecting to my brain right now. Error: ${error.message || 'Unknown'}` }, { status: 500 });
  }
}
