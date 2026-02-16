import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { asset } from '../assets/asset'
import { Link } from 'react-router-dom'
const JobCards = ({jobs}) => {
  const {navigate,axios} = useContext(AppContext)
  
  return (
    <Link to={`/jobDetails/${jobs._id}`}>
    <div className={`p-5 flex flex-col rounded-md border-gray-400 w-auto   cursor pointer bg-linear-to-r from-slate-300 `}>
      <h1 className='text-2xl font-medium text-gray-800'>{jobs.name}</h1>
      <div className='flex  gap-3 mt-2'>
        <p className='text-sm bg-green-300/40 p-1 w-20 h-8'>{jobs.type}</p>
        <p className='text-sm bg-gray-200 w-20'>salary {jobs.salary}</p>
      </div>

      <div className='flex gap-4 items-center my-2'>
        <img src={`http://localhost:4000/uploads/${jobs.company.logo}`} alt="company logo" className='w-10'/>
      <div className='flex flex-col md:flex-row justify-between items-center text-sm gap-3'>
        <h3>{jobs.company?.name}</h3>
        <h3>{jobs.location}</h3>
      </div>
      <div>
        <img src={asset.saveLaterIcon} alt="" className='w-7 h-7'/>
      </div>
      </div>
    </div>
    </Link>
  )
}

export default JobCards
