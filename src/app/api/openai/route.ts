import { GoogleGenerativeAI } from "@google/generative-ai";

const allowedOrigins = [
  "https://formatify-silk.vercel.app", // Production
  "http://localhost:3000", // Development
];

// Helper function to determine the allowed origin
function getAllowedOrigin(requestOrigin: string | null): string {
  return allowedOrigins.includes(requestOrigin || "") 
    ? requestOrigin || "" 
    : "https://formatify-silk.vercel.app";
}

// Helper function to get CORS headers
function getCorsHeaders(requestOrigin: string | null) {
  const allowedOrigin = getAllowedOrigin(requestOrigin);
  
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const headers = getCorsHeaders(origin);
  
  try {
    console.log("Executing main");
    
    // Parse the request body
    const data = await request.json();
    const prompt = data.prompt;
    
    const apiKey = process.env.GEMINI_API_KEY ?? "";
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    
    return new Response(JSON.stringify({ response: responseText }), {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    console.error("API error:", error);
    
    return new Response(JSON.stringify({ error: "An error occurred" }), {
      status: 500,
      headers: headers,
    });
  }
}

export async function OPTIONS(request: Request) {
  const origin = request.headers.get("origin");
  const headers = getCorsHeaders(origin);
  
  return new Response(null, {
    status: 204,
    headers: headers,
  });
}