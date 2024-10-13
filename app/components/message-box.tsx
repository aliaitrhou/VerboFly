import React from "react";

interface Props {
  children: React.ReactNode
  className: string
}

const MessageBox = ({ children, className }: Props) => {
  return (
    <div className={`w-fit py-2 px-4 ${className}`}>
      {children}
    </div>
  )
}

export default MessageBox
