import React from 'react'
import { twMerge } from 'tailwind-merge'
const StyleButton = (props) => {
  const {onClick,isActive,disabled,children} = props;
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
      'border-2 border-zinc-600 rounded py-1 px-2 mr-1 my-1 font-medium text-zinc-900',
      `hover:bg-zinc-500 hover:text-yellow-400 hover:border-zinc-900`,
      `${isActive? 'text-yellow-500 bg-zinc-600 border-zinc-700':''}`
    )}>{children}</button>
  )
}

export default StyleButton