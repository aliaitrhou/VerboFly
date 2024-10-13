import React from 'react'
import { staticSvgs } from '../consts'
import Image from 'next/image'

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  selectedOption: string
}

const LangOptions = ({handleChange, selectedOption}: Props) => {
  return (
    <div className=' flex items-center justify-evenly '>
      <label className="flex flex-col gap-2">
        <Image src={staticSvgs[0]} 
          className={`w-16 ${selectedOption === 'Spain' && 'border-4 border-blue-500'}`}
          alt='spain flag'/>
        <input
          type="radio"
          value="Spain"
          checked={selectedOption === 'Spain'}
          onChange={handleChange}
        />
      </label>

      <label className="flex flex-col gap-2 ">
        <Image src={staticSvgs[2]} 
          className={`w-16 ${selectedOption === 'Japanese' && 'border-4 border-blue-500'}`}
          alt='japan flag'/>
        <input
          type="radio"
          value="Japanese"
          checked={selectedOption === 'Japanese'}
          onChange={handleChange}
        />
      </label>

      <label className="flex flex-col gap-3">
        <Image src={staticSvgs[1]} 
          className={`w-16 ${selectedOption === 'French' && 'border-4 border-blue-500'}`}
          alt='french flag'/>
        <input
          type="radio"
          value="French"
          checked={selectedOption === 'French'}
          onChange={handleChange}
        />
      </label>
    </div>
  )
}

export default LangOptions

