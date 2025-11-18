// ai.js (versión actualizada con @google/genai)
import { GoogleGenAI } from "@google/genai";

// OPENAI
export const getOpenAIResponse = async (apiKey, systemPrompt, chatHistory, toonData) => {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini", // actualizado, 3.5 ya no existe
      messages: [
        { role: "system", content: systemPrompt },
        ...chatHistory.map((m) => ({
          role: m.sender === "user" ? "user" : "assistant",
          content: m.text,
        })),
      ],
    }),
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content ?? "No response";
};


// GEMINI (nuevo SDK @google/genai)
export const getGeminiResponse = async (apiKey, systemPrompt, chatHistory, toonData) => {
  const client = new GoogleGenAI({ apiKey });

  // Construimos el prompt completo combinando tu contexto (TOON + System)
  const fullPrompt = `
${systemPrompt}

Aquí tienes el contexto estructurado TOON del portfolio del usuario:
${toonData}

Chat previo:
${chatHistory.map((m) => `${m.sender}: ${m.text}`).join("\n")}

Pregunta nueva:
${chatHistory.at(-1)?.text ?? ""}
  `;

  const contents = [
    {
      role: "user",
      parts: [{ text: fullPrompt }],
    },
  ];

  // Llamada al modelo — recomendado y estable
  const result = await client.models.generateContent({
    model: "gemini-2.0-flash",
    contents,
  });

  const responseText = result.candidates[0].content.parts[0].text ?? "No response";

  return responseText;
};
