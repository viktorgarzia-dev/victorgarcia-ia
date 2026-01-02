
import { GoogleGenAI } from "@google/genai";

export async function getBrandAdvice(userQuery: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Act as Victor Garcia IA's personal assistant. Help the user understand which service is better for them:
    - IA360 Academy: For people wanting to learn.
    - Mentorship 1-on-1: For entrepreneurs with specific technical blocks.
    - Corporate Solutions: For companies looking for end-to-end implementation.
    
    User question: ${userQuery}`,
    config: {
      systemInstruction: "You are a helpful assistant for Victor Garcia IA's website. Keep answers concise, professional and friendly. Always direct users to the appropriate section of the website if possible.",
      temperature: 0.7,
    },
  });

  return response.text;
}
