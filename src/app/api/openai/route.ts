import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request: Request) {
  try {
    console.log("Executing main");
    
    // Correctly parse the request body
    const data = await request.json();
    const prompt = data.prompt;
    
    const apiKey = process.env.GEMINI_API_KEY ?? ""
    const genAI = new GoogleGenerativeAI( apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    return Response.json({ response: responseText });
    
  } catch (error) {
    console.log(error);
    return Response.json({ error: "An error occurred" }, { status: 500 });
  }
}