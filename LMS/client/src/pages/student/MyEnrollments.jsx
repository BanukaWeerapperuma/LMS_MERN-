import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import {Line} from 'rc-progress'



const MyEnrollments = () => {

  const { enrolledCourses , calculateCourseDuration , navigate} = useContext(AppContext)
  const [progressArray , setprogressArray] = useState([
      {lectureCompleted : 2 , totalLectures : 4},
      {lectureCompleted : 1 , totalLectures : 5},
      {lectureCompleted : 3 , totalLectures : 6},
      {lectureCompleted : 4 , totalLectures : 4},
      {lectureCompleted : 0 , totalLectures : 3},
      {lectureCompleted : 5 , totalLectures : 7},
      {lectureCompleted : 6 , totalLectures : 8},
      {lectureCompleted : 2 , totalLectures : 6},
      {lectureCompleted : 4 , totalLectures : 10},
      {lectureCompleted : 3 , totalLectures : 5},
      {lectureCompleted : 7 , totalLectures : 7},
      {lectureCompleted : 1 , totalLectures : 4},
      {lectureCompleted : 0 , totalLectures : 2},
      {lectureCompleted : 5 , totalLectures : 5},
  ])

  return (
    <div className='md:px-36 px-8 pt-10'>
      <h1 className='text-2xl font-semibold'>My Enrollments</h1>
      <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10'>
        <thead className='text-gray-700 border-b border-gray-500/20 text-sm text-left max-sm:hidden'>
          <tr>
            <th className='px-4 py-3 font-semibold truncate'>Course</th>
            <th className='px-4 py-3 font-semibold truncate'>Duration</th>
            <th className='px-4 py-3 font-semibold truncate'>Completed</th>
            <th className='px-4 py-3 font-semibold truncate'>Status</th>
          </tr>
        </thead>
        <tbody className='text-gray-700'>
          {enrolledCourses.map((course, index) => {
            const progress = progressArray[index] || { lectureCompleted: 0, totalLectures: 1 };
            const isCompleted = progress.lectureCompleted / progress.totalLectures === 1;

            return (
              <tr key={index} className='border-b border-gray-500/20'>
                <td className='md:px-4 pt-2 md:pl-4 py-3 flex items-center space-x-3'>
                  <img src={course.courseThumbnail} alt="course thumbnail" className='w-14 sm:w-24 md:w-28' />
                  <div className='flex-1'>
                    <Link to={`/course/${course.id}`} className='hover:underline text-blue-600'>
                      {course.courseTitle}
                    </Link>
                    <Line strokeWidth={1.5} percent={progress.lectureCompleted / progress.totalLectures * 100} className='bg-gray-300 rounded-full'/>
                  </div>
                </td>
                <td className='px-4 py-3 max-sm:hidden'>{calculateCourseDuration(course)}</td>
                <td className='px-4 py-3 max-sm:hidden'>
                  {progress.lectureCompleted}/{progress.totalLectures} <span>Lectures</span>
                </td>
                <td className='px-4 py-3 max-sm:text-right'>
                  <button onClick={() => navigate('/player' + course._id)}
                    className={`px-3 sm:px-5 py-1.5 sm:py-2 cursor-pointer text-white rounded ${
                      isCompleted ? 'bg-green-600' : 'bg-blue-600'
                    }`}
                  >
                    {isCompleted ? 'Completed' : 'Ongoing'}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
    
}

export default MyEnrollments
