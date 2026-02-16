import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

const Applications = () => {
  const {navigate,axios} = useContext(AppContext)
  const [jobsData,setJobsData] = useState([]);
  const fetchAppliedJobs = async()=>{
    try {
      const {data} = await axios.get('http://localhost:4000/application/studentApplications');
      console.log(data)
      if(data.success){
        setJobsData(data.applications);
      }
      else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  useEffect(()=>{
    fetchAppliedJobs();
  },[]);
  console.log("jobsData",jobsData)
  return (
    <div className='py-16 px-4 max-w-7xl mx-auto bg-linear-to-b from-purple-200/70'>
      <h1 className='text-2xl md:text-5xl font-medium text-gray-800 mb-8'>Applied Jobs</h1>
      {
        !jobsData || jobsData.length===0?(
          <div className='text-center py-12'>
            <div className='text-gray-400 text-lg'>You have not applied for any job</div>
            <p className='text-gray-400 mt-4'>
              Your job applications will appear here once you start applying.
            </p>
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
                        {job.job.name}
                        </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>
                        {job.employer?.name}
                        </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>
                        {job.job.type}
                        </div>
                    </td>
                     <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>
                        {job.job.location}
                        </div>
                    </td>
                     <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>
                        {job.job.salary}
                        </div>
                    </td>
                     <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>
                        {job.status}
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

export default Applications
