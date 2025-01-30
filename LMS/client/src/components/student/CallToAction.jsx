import React from 'react'
import { assets } from '../../assets/assets'


const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>Learn anything , anytime anywhere</h1>
      <p className='sm:text-sm  text-gray-500'>Learn is fun. Learn anywhere. Learn at your own pace. As long as you have <br />an internet connection, you can learn.</p>

    <div className='flex items-center gap-6 font-medium mt-4'>
      <button className='px-10 py-3 rounded-md bg-blue-600 text-white'>Get Started</button>
      <button className='flex items-center gap-2'>Learn more <img src={assets.arrow_icon} alt="arrow_icon" /></button>
    </div>
    </div>
  )
}

export default CallToAction

