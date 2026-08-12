const { GoogleGenerativeAI } = require('@google/generative-ai');

async function run() {
  try {
    const genAI = new GoogleGenerativeAI("AQ.Ab8RN6JZXEFQKDUKnnYfYMnZ8-yJ6K4L8DKsNsrU5oT2_FSK9g");
    
    // The SDK does not have a public listModels method directly, 
    // let's do a direct fetch to the REST API to see available models.
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=AQ.Ab8RN6JZXEFQKDUKnnYfYMnZ8-yJ6K4L8DKsNsrU5oT2_FSK9g`);
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch(e) {
    console.error(e);
  }
}
run();
