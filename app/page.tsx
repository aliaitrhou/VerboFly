'use client'

import React, { useState, FormEvent } from 'react'
import ChatContainer from "./components/chat-container";
import Masthead from "./components/masthead";
import LangOptions from './components/lang-options'
import UserMessage from './components/user-message'

export default function Home() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<object[]>([])
  const [lang, setLang] = useState('Spain')


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    setMessage(target.value)
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLang(e.target.value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: api request
    setMessage('')
    try {
      const res = await fetch('/api/pollyglot/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          lang: lang
        }) 
      })

      const aiRes = await res.json()
      setMessages(prev => [...prev, 
        {
          role: 'user', 
          content: message
        },
        {
          role: 'assistant',
          content: aiRes.response.content,
        }
      ])
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <main className="max-w-fit sm:mt-4 h-[100dvh] mx-auto"> 
      <Masthead>
        <ChatContainer gptMessages={messages}>
          <UserMessage 
            handleSubmit={handleSubmit}
            handleChange={handleInputChange}
            value={message}
          />
          <LangOptions
            handleChange={handleRadioChange}
            selectedOption={lang}
          />
        </ChatContainer>
      </Masthead>
    </main>
  );
}
