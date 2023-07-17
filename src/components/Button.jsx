import React from 'react'

const Button = ({text, className}) => {
  return (
    <div>
        <button className={`px-4 py-2 rounded-md bg-white text-black ${className}`}>{text}</button>
    </div>
  )
}

export default Button