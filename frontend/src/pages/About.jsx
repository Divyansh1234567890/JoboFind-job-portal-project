import React from 'react'
import { asset } from '../assets/asset';
const About = () => {
  return (
    <div className='py-10 px-4 max-w-7xl mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
      {/* left section */}
      <div>
        <img src={asset.hero} alt="" />
      </div>

      {/* right section */}
      <div>
        <h2 className='text-3xl font-semibold text-gray-800 mb-5'>About JoboFind</h2>
        <p className='text-gray-600 mb-4 leading-relaxed'>We connect talented individuals with top employers. Our mission is to simplify the job search process, making it faster, smarter , and more accessible for everyone. Whether you are a jobseeker or a company looking to hire , joboFind welcomes you</p>
        <p className='text-gray-600 leading-relaxed'>Explore thousands of job listing, apply seamlessly, and take or carrier to the next level with joboFind</p>
      </div>
    </div>

    <div className='mt-12 bg-gray-100 rounded-xl p-6 shadow-inner'>
    <h3 className='text-2xl text-gray-700 mb-3 font-semibold'>Why Choose Us</h3>
    <p className='text-gray-600 leading-relaxed'>
      Thousands of verified job listings
      <br />
      Easy application process
      <br />
      Personalized job recommendations 
      <br />
      Secure and trustworthy plateform
    </p>
    </div>

    </div>
  )
}

export default About;
