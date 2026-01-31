import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { asset } from '../assets/asset'

const JobCards = ({jobs}) => {
  const {navigate} = useContext(AppContext)
  
  return (
    
    <div onClick={()=>navigate(`/jobDetails/${jobs._id}`)} className={`p-5 flex flex-col rounded-md border-gray-400 w-auto   cursor pointer bg-linear-to-r from-slate-300 `}>
      <h1 className='text-2xl font-medium text-gray-800'>{jobs.title}</h1>
      <div className='flex  gap-3 mt-2'>
        <p className='text-sm bg-green-300/40 p-1 w-20 h-8'>{jobs.type}</p>
        <p className='text-sm bg-gray-200 w-20'>salary {jobs.salary}</p>
      </div>

      <div className='flex gap-4 items-center my-2'>
        <img src={jobs.image} alt="" className='w-10'/>
      <div className='flex flex-col md:flex-row justify-between items-center text-sm'>
        <h3>{jobs.company}</h3>
        <h3>{jobs.location}</h3>
      </div>
      <div>
        <img src={asset.saveLaterIcon} alt="" className='w-7 h-7'/>
      </div>
      </div>
    </div>
  )
}

export default JobCards
