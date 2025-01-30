import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import SearchBar from '../../components/student/SearchBar';
import CourseCard from '../../components/student/CourseCard';
import { assets } from '../../assets/assets';
import Footer from '../../components/student/Footer';

const CoursesList = () => {
  const navigate = useNavigate(); // Using React Router's navigation
  const { allCourses } = useContext(AppContext);
  const { input } = useParams();
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    if (!allCourses?.length) return;

    const tempCourses = allCourses.slice();
    setFilteredCourses(
      input
        ? tempCourses.filter((item) =>
            item.courseTitle.toLowerCase().includes(input.toLowerCase())
          )
        : tempCourses
    );
  }, [allCourses, input]);

  return (
    <>
    <div className="relative md:px-36 px-8 pt-20 text-left">
      <div className="flex justify-between md:flex-row flex-col gap-6 items-start w-full">
        <div>
          <h1 className="text-4xl font-semibold text-gray-800">Course List</h1>
          <p className="text-gray-500">
            <span className="text-blue-600 cursor-pointer" onClick={() => navigate('/')}>
              Home
            </span>{' '}
            / <span>Course</span>
          </p>
        </div>
        <SearchBar data={input} />
      </div>

      {
        input && <div className='inline-flex items-center gap-4 px-4 py-2 boarder border-gray-600 rounded mt-8'>
          <p>{input}</p>
          <img src={assets.cross_icon} alt=""  className='cursor-pointer' onClick={() => navigate('/course-list')}/>
        </div>
      }
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id || course.courseTitle} course={course} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CoursesList;
