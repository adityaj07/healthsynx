import React from 'react'
import Button from './ui/Button'
import arrow from "../assets/arrow.svg"

const Newsletter = () => {
  return (
    <div>
        <div className='flex relative flex-col gap-4 bg-black rounded-lg text-white px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-16'>
            <h1 className='text-3xl md:text-4xl text-center md:text-start font-bold'>Susbcribe to our Newsletter</h1>
            <small className='mb-6 text-center md:text-start'>Get daily updates, health tips and resources in your inbox every week.</small>
            <div className='flex bg-white justify-between items-center rounded-full py-1 px-2 md:py-2 md:px-4'>
                <input type="text" className='bg-transparent outline-none text-black px-4 py-2 w-full md:w-[80%]' placeholder='Enter your email here'/>
                <Button text="Subscribe" className="bg-[#C0DEDD] text-black py-1 px-2 md:py-2 md:px-4 rounded-full hidden md:block hover:bg-[#91e7e4] transition-colors duration-150"/>
            </div>
            <Button text="Subscribe" className="bg-[#C0DEDD] text-black py-2 px-4 rounded-full block md:hidden w-[97%] mx-auto hover:bg-[#91e7e4] transition-colors duration-150"/>
            <img src={arrow} alt="arrow" className='absolute top-10 right-0 w-[10rem] hidden md:block'/>
        </div>
    </div>
  )
}

export default Newsletter