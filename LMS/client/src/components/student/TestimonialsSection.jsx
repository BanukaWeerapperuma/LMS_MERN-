import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'



const TestimonialsSection = () => {
  return (
    <div className='py-14 px-8 md:px-0'>
      <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3'>Hear from our satisfied customers about their experience with our services. <br /> We are grateful for their feedback. </p>

      <div className='px-4 sm:px-10 lg:px-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14'>
          {dummyTestimonial.map((testimonial, index) => (
            <div key={index} className='text-sm text-left border border-gray-500/30 rounded-lg pb-6 bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden'>
              <div className='flex gap-4 items-center px-5 py-4 bg-gray-500/10'>
                <img className='w-12 h-12 rounded-full' src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h1 className='text-lg font-medium text-gray-800'>{testimonial.name}</h1>
                  <p className='text-gray-800/80'>{testimonial.role}</p>
                </div>
                
              </div>
              <div className='p-5 pb-7'>
                  <div className='flex gap-0.5'>
                    {[...Array(5)].map((_, index) => (
                      <img className='h-5' key={index} src={index < Math.floor(testimonial.rating) ? assets.star : assets.star_blank} alt="" />
                    ))}
                  </div>
                  <p className='text-gray-500 mt-5'>{testimonial.feedback}</p>
                </div>
                <a href="#" className='text-blue-500 underline px-5'>Read more</a>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default TestimonialsSection
