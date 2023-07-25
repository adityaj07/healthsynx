import React from 'react'
import Button from "../components/ui/Button"
import star1 from "../assets/star1.svg"
import star2 from "../assets/star2.svg"
import star3 from "../assets/star3.svg"

const Pricing = () => {
  return (
    <div className='w-[90%] lg:w-[70%] mx-auto rounded-lg bg-[#C0DEDD] p-4 py-6 md:mt-32 md:px-16 md:py-10 flex justify-center items-center mt-24 mb-24'>
        <div className='bg-white relative flex flex-col gap-4 items-center justify-center p-4 rounded-lg w-[90%] lg:w-[60%] mx-auto h-[20rem]'>
            <h1 className='font-bold text-4xl'>Pricing</h1>
            <p className='text-3xl md:text-5xl lg:text-6xl font-black my-4 text-center'>Its free to use!!</p>
            <Button text="Let's Go!!" className="py-2 px-4 text-xl bg-black rounded-md text-white mt-6 lg:mt-12"/>
            <img src={star1} alt="star1" className='absolute w-[8rem] -top-16 -right-[3rem] md:-right-16'/>
            <img src={star2} alt="star2" className='absolute w-[4rem] top-6 right-0'/>
            <img src={star3} alt="star3" className='absolute w-[2rem] top-0 right-14'/>
        </div>
    </div>
  )
}

export default Pricing