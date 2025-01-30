import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CoursesSection = () => {
  const {allCourses} = useContext(AppContext)
  return (
    <div className='py-16 px-8 md:px-40'>
      <h2 className='text-3xl font-medium text-gray-800'>earn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>Discover our top-rated courses and gain valuable skills to enhance your career. <br />Start your learning journey today!</p>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-4 md:px-0 md:my-16 my-10 gap-4'>

        {allCourses.slice(0,4).map((course , index) => <CourseCard key={index} course={course}/>  )}
      </div>

      <Link to={'/course-list'} onClick={() => scrollTo(0,0)}
      className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'>Show all courses</Link>
    </div>
  )
}

export default CoursesSection
