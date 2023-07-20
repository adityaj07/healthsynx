import React from 'react'
import Button from './ui/Button'
import arrow from "../assets/arrow.svg"

const Newsletter = () => {
  return (
    <div>
        <div className='flex relative flex-col gap-4 bg-black rounded-md text-white px-10 py-16'>
            <h1 className='text-4xl font-bold'>Susbcribe to our Newsletter</h1>
            <small className='mb-6'>Get daily updates, health tips and resources in your inbox every week.</small>
            <div className='flex bg-white justify-between items-center rounded-full py-2 px-4'>
                <input type="text" className='bg-transparent outline-none text-black px-4 py-2 w-[80%]' placeholder='Enter your email here'/>
                <Button text="Subscribe" className="bg-[#C0DEDD] text-black py-2 px-4 rounded-full"/>
            </div>
            <img src={arrow} alt="arrow" className='absolute top-5 right-0 w-[12rem]'/>
        </div>
    </div>
  )
}

export default Newsletter