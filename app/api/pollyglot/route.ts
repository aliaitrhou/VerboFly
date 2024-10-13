import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
})

export const runtime = 'edge'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { message, lang } = body 

  try {
    const res = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: `You are a language practice assistant. 
                    you can take the user prompt and chat with him in ${lang} 
                    in order to imporove his language skills.
                    Respond with concise replies, each under 15 words.`
        }, 
        {
          role: 'user',
          content: `${message}`
        }
      ]
    }) 

    const responseToSentBack = res.choices[0]?.message

    return NextResponse.json({response: responseToSentBack})

  } catch (e) {
    console.error(e)
  }
}
