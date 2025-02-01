import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";
import Footer from "../../components/student/Footer";
import YouTube from "react-youtube";


const Player = () => {


  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
  const [playerData, setPlayerData] = useState(null);


  const { allCourses, calculateRating, calculateChapterTime, calculateCourseDuration, calculateNoOfLectures, currency } = useContext(AppContext);

  const fetchCourseData = async () => {
    const findedCourse = allCourses.find(course => course._id === id);
    if (findedCourse) {
      setTimeout(() => {  // Simulating loading time
        setCourseData(findedCourse);
      }, 300); // Delay of 1 second (optional)
    }
  };


  const toggleSection = (sectionId) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [sectionId]: !prevOpenSections[sectionId],
    }));
  }


  useEffect(() => {
    fetchCourseData();
  }, [allCourses]); // Ensures update when allCourses change


  if (!courseData) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-[30px] pt-20 text-left bg-gradient-to-b from-cyan-100/70">
        <div className="absolute top-0 left-0 w-full h-section-height z-[-1] bg-gradient-to-b from-cyan-100/70"></div>

        {/* Left Column */}
        <div className="max-w-xl z-10 text-gray-500">
          <h1 className="md:text-3xl text-xl font-semibold text-gray-800">{courseData.courseTitle}</h1>
          <p className="pt-4 md:text-base text-sm" dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }}></p>

          {/* Review Section */}
          <div className="flex items-center space-x-2 pt-3 pb-1 text-sm">
            <p>{calculateRating(courseData)}</p>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <img key={index} src={index < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} alt="" className="w-3.5 h-3.5" />
              ))}
            </div>
            <p className="text-gray-600">({courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? "ratings" : "rating"})</p>
            <p>{courseData.enrolledStudents.length} {courseData.enrolledStudents.length > 1 ? "students" : "student"}</p>
          </div>

          <p className="text-sm">Course by <span className="text-blue-600 underline">Tech Team</span></p>

          {/* Course Structure */}
          <div className="pt-8 text-gray-800">
            <h2 className="text-xl font-semibold">Course Structure</h2>
            <div className="pt-5">
              {courseData.courseContent.map((chapter, index) => (
                <div key={index} className="border border-gray-300 bg-gray-300/30 mb-2 rounded shadow-2xs">
                  <div className="flex justify-between items-center py-3 px-4 cursor-pointer select-none" onClick={() => toggleSection(index)}>
                    <div className="flex items-center gap-2">
                      <img className={`transform transition-transform duration-300 ${openSections[index] ? "rotate-180" : ""}`}
                        src={assets.down_arrow_icon} alt="down_arrow_icon" />
                      <p className="font-medium md:text-base text-sm">{chapter.chapterTitle}</p>
                    </div>
                    <p className="md:text-default text-sm">{chapter.chapterContent.length} lectures - {calculateChapterTime(chapter)}</p>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${openSections[index] ? "max-h-96" : "max-h-0"}`}>
                    <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-blue-300 border-t border-b-gray-300">
                      {chapter.chapterContent.map((lecture, index) => (
                        <li key={index} className="flex items-start gap-2 py-2">
                          <img src={assets.play_icon} alt="play_icon" className="w-4 h-4 mt-1" />
                          <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-default">
                            <p>{lecture.lectureTitle}</p>
                            <div className="flex items-center gap-2">
                              {lecture.isPreviewFree && <p onClick={() => setPlayerData({
                                videoId: lecture.lectureUrl.split('/').pop()
                              })} className="text-blue-500 cursor-pointer">Watch</p>}
                              <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ["h", "m"] })}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>



          {/* Right Column (if needed in the future) */}
        </div >

        <div className="max-w-course-card z-10 w-full shadow-custom-card rounded-t md:rounded-none overflow-hidden bg-white min-w-[300px] sm:min-w-[420px]">
          {
            playerData ?

              <YouTube videoId={playerData.videoId} opts={{ playerVars: { autoplay: 1 } }} iframeClassName="w-full aspect-video" />

              : <img src={courseData.courseThumbnail} alt="course thumbnail" />
          }

          <div className="p-5">
          </div>
        </div>
      </div>
      <Footer />
    </>
  );


};


export default Player;
