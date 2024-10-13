'use client'

import React, { useEffect, useRef } from "react";
import MessageBox from "./message-box";

interface Props {
  children: React.ReactNode,
  gptMessages: object[] 
}


const ChatContainer: React.FC<Props> = ({ children, gptMessages }) => {
  const refContainer = useRef<HTMLDivElement>(null)

  const scroll = () => {
    const {offsetHeight, scrollHeight, scrollTop} = refContainer.current as HTMLDivElement
    if (scrollHeight >= scrollTop + offsetHeight) {
      refContainer.current?.scrollTo(0, scrollHeight + 150)
    }
  }

  useEffect(() => {
    scroll()
  }, [gptMessages])

  return (
    <section className="w-full h-full px-6 py-6 sm:py-8 rounded-lg border-black border-4">
      <div ref={refContainer} className="flex flex-col bg-white  text-black overflow-auto h-[120px] sm:h-[350px] font-semibold">
        {
          gptMessages.map((m: any) => (
            <MessageBox key={m.id} className={` mt-3 ${m.role === 'user' ? 'self-start rounded-xl rounded-tl-none bg-green-400' : 'self-end rounded-xl roudned-tr-none rounded-tr-none bg-blue-500'}`}>
              {m.content}
            </MessageBox>
          ))
        }
      </div>
      <div className="space-y-4 bg-white pt-6">
        {children}
      </div>
    </section>
  )
}

export default ChatContainer
