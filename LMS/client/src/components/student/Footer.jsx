import React from 'react'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
        <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
          <div className='flex flex-col md:items-start items-center w-full'>
            <img src={assets.logo_dark} alt="logo" />
            <p className='mt-6 text-center md:text-left text-sm text-white/80' >learn anything, anytime anywhere</p>
          </div>
          <div className='flex flex-col md:items-start items-center w-full'>
            <h2 className='mb-5 text-white font-semibold'>Company</h2>
            <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>

          </div>
          
          <div className='hidden md:flex flex-col md:items-start  w-full '>
            <h2 className='mb-5 text-white font-semibold'>Subscribe to our newsletter</h2>
            <p className='text-sm text-white/80'>The latest news, articles, and resources, sent to your inbox weekly.</p>
            <div className='flex items-center pt-4 gap-2'>
              <input type="email" placeholder="Enter your email" 
              className='border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm'/>
              <button className='bg-blue-600 rounded text-white w-24 h-9'>Subscribe</button>
            </div>

          </div>
        </div>
        <p className='py-4 text-center text-xs text-white/60'>copyright 2025 © Edemy-LMS All Rights Reserved</p>
      </footer> 
      
    
    </div>
  )
}

export default Footer
