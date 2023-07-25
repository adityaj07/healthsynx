import React from 'react'

const ContactCard = ({title, desc, link, icon:Icon, className}) => {
  return (
    <div className={`flex flex-col items-start ${className} border-[1px] rounded-lg px-6 py-5 w-[20rem]`}>
        <div className='p-3 w-fit h-fit border-[1px] rounded-lg'>
            <Icon size={20}/>
        </div>
        <h1 className='text-xl font-semibold mt-6 mb-2'>{title}</h1>
        <p className='text-sm'>{desc}</p>
        <a href={link} className='underline font-semibold text-base mt-2'>{link}</a>
    </div>
  )
}

export default ContactCard