import React from 'react'

const Card = ({title, desc, className}) => {
  return (
    <div className={`p-4 rounded-lg text-start ${className}`}>
      <h1 className='font-semibold text-xl mb-2'>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default Card