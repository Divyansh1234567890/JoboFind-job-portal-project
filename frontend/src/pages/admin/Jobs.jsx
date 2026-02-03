import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const Jobs = () => {
  const {navigate,jobsData} = useContext(AppContext);
  return (
    <div className='py-16 px-4 max-w-7xl mx-auto bg-linear-to-b from-purple-200/70'>
      <h1 className='text-2xl md:text-5xl font-medium text-gray-800 mb-8'>All Jobs</h1>
      {
        !jobsData || jobsData.length===0?(
          <div className='text-center py-12'>
            <div className='text-gray-400 text-lg'>No job Found</div>
            
          </div>
        ): <div className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden'>
          <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Job Details</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Company</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Type</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Location</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Salary</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>status</th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {
                jobsData.map((job,index)=>(
                  <tr className='hover:bg-gray-50 transition-colors hover:cursor-pointer' onClick={()=>navigate(`/JobDetails/${job._id}`)}>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>
                        {job.title}
                        </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>
                        {job.company}
                        </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>
                        {job.type}
                        </div>
                    </td>
                     <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>
                        {job.location}
                        </div>
                    </td>
                     <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>
                        {job.salary}
                        </div>
                    </td>
                     <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>
                        {job.status||"Pending"}
                        </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          </div>
        </div>
      }
    </div>
  )
}

export default Jobs;
