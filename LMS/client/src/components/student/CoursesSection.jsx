import React from 'react'
import { Link } from 'react-router-dom'

const CoursesSection = () => {
  return (
    <div className='py-16 px-8 md:px-40'>
      <h2 className='text-3xl font-medium text-gray-800'>earn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>Discover our top-rated courses and gain valuable skills to enhance your career. Start your learning journey today!</p>
      
      <Link to={'/course-list'} onClick={() => scrollTo(0,0)}
      className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'>Show all courses</Link>
    </div>
  )
}

export default CoursesSection
