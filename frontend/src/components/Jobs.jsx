import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import JobCards from './JobCards';

const Jobs = () => {
  const {jobsData} = useContext(AppContext);
  return (
    <div className='py-16 mx-16'>
      <h2 className='text-2xl md:text-5xl font-semibold text-gray-800'>Featured Jobs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
      {
        jobsData.map((job,index)=>{
          return(
            <JobCards key={index} jobs={job}/>
          )
        })
      }
      </div>
    </div>
  )
}

export default Jobs
