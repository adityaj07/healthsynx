import React from 'react'

const Card = ({title, desc, className}) => {
  return (
    <div className={`p-4 rounded-lg text-start shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${className}`}>
      <h1 className='font-bold text-lg mb-2'>{title}</h1>
      <p className='text-base'>{desc}</p>
    </div>
  )
}

export default Card