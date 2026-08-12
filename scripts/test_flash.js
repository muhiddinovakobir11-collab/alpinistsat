const { GoogleGenerativeAI } = require('@google/generative-ai');

async function testModel(modelName) {
  console.log(`Testing ${modelName}...`);
  try {
    const genAI = new GoogleGenerativeAI("AQ.Ab8RN6JZXEFQKDUKnnYfYMnZ8-yJ6K4L8DKsNsrU5oT2_FSK9g");
    const model = genAI.getGenerativeModel({ model: modelName });
    
    // Add a timeout using AbortController if supported, or Promise.race
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const result = await Promise.race([
      model.generateContent("Hello"),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 5000))
    ]);
    
    console.log(`[SUCCESS] ${modelName}:`, await result.response.text());
    return true;
  } catch(e) {
    console.log(`[FAILED] ${modelName}:`, e.message);
    return false;
  }
}

async function run() {
  await testModel("gemini-3.5-flash-lite");
  await testModel("antigravity-preview-05-2026");
  await testModel("gemini-pro-latest");
  await testModel("gemini-flash-latest");
  process.exit(0);
}
run();
