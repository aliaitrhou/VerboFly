import React, { FormEvent } from 'react'
import send from '../../public/send-btn.svg' 
import Image from 'next/image'

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  value: string
}

const UserMessage: React.FC<Props> = ({ handleChange, handleSubmit, value }) => {
  return (
    <form onSubmit={handleSubmit} className='flex justify-between items-center gap-2 bg-gray-100 border-[1px] border-black py-4 px-6 rounded-lg'>
      <input type='text' 
        className='border-black border-none w-full bg-gray-100 text-black font-semibold text-lg focus:outline-none' 
        placeholder='Hello pollyglot...'
        onChange={handleChange} value={value}/>
      <button>
        <Image src={send} alt="send svg" className="w-8 h-8"/>
      </button>
    </form>
  )
}

export default UserMessage
