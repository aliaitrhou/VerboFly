import React from 'react'
import Image from 'next/image'
import mastheadImage from '@/public/masthead.png'


interface Props {
  children: React.ReactNode
}


const Masthead: React.FC<Props> = ({ children}) => {
  return (
    <section className='h-[95dvh] mt-2 bg-white mx-auto border-gray-50 shadow-2xl border-4 rounded-xl overflow-hidden max-w-lg'>
      <Image 
        src={mastheadImage}
        className='w-full '
        alt='masthead'
      />
      <div className='py-8 px-6'>
        {children}
      </div>
    </section>
  )
}

export default Masthead
