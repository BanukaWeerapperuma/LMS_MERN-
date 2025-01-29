import React from 'react'
import { assets } from '../../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='md:text-5xl text-3xl relative font-bold text-gray-800 max-w-3xl mx-auto'>
        Empower Your Future with Our Online Courses designed to
        <span className='text-blue-600'> fit your choice.</span>
        <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0' />
      </h1>

      <p className='md:block hidden text-xl text-gray-500 max-w-2xl mx-auto'>
        Take your learning experience to the next level with our online courses. Our courses are designed to help you learn the skills and knowledge you need to succeed in your chosen field.
      </p>

      <p className='md:hidden text-lg text-gray-500 max-w-sm mx-auto'>
        We are here to help you become the best version of yourself. Join us today and take your learning experience to the next level.
      </p>
    </div>
  )
}

export default Hero
