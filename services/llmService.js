import Groq from "groq-sdk";
import dotenv from "dotenv";
dotenv.config();
const groq = new Groq({ apiKey: process.env.GROQ_API });

async function getResponse(prompt) {
    const chatCompletion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile", 
        messages:[
            {
                role: "user",
                content: `${prompt}\n\Please provide a concise summary in 2 sentences.`
            }
        ], 
        max_tokens: 100,
    })
    return chatCompletion.choices[0].message.content;
}

export default getResponse;