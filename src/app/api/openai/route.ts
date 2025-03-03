const { GoogleGenerativeAI } = require("@google/generative-ai");

export async function POST(request: Request) {
  try {
    console.log("Executing main");
    
    // Correctly parse the request body
    const data = await request.json();
    const prompt = data.prompt;
    
    const genAI = new GoogleGenerativeAI(
      process.env.GEMINI_API_KEY // Store your API key in environment variables
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    // console.log(responseText);

    // Always return a Response object
    return Response.json({ response: responseText });
    
  } catch (error) {
    console.log(error);
    // Handle errors by returning an error response
    return Response.json({ error: "An error occurred" }, { status: 500 });
  }
}