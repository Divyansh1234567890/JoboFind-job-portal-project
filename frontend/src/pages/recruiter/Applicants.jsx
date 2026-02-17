import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
const BASE_URL = import.meta.env.VITE_BASE_URL;
const Applicants = () => {
  const {axios} = useContext(AppContext)
  const [applicantsData,setApplicantsData] = useState([]);
  const fetchAllApplicants = async ()=>{
    try {
      const {data} = await axios.get(`${BASE_URL}/application/employerJobApplicants`);
      console.log(data)
      if(data.success){
        setApplicantsData(data.applications);
      }
      else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  useEffect(()=>{
    fetchAllApplicants();
  },[]);

const handleStatusChange = async(id,status)=>{
  try {
    const {data} = await axios.put(`${BASE_URL}/application/updateStatus/${id}`,{status});
    if(data.success){
      fetchAllApplicants();
      toast.success(data.message);
    }
    else{
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
}

  return (
      <div className='py-16 px-4 max-w-7xl mx-auto bg-linear-to-b from-purple-200/70'>
      <h1 className='text-2xl md:text-5xl font-medium text-gray-800 mb-8'>All Applicants</h1>
      {
        !applicantsData || applicantsData.length===0?(
          <div className='text-center py-12'>
            <div className='text-gray-400 text-lg'>No Applicants Found</div>
            
          </div>
        ): <div className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden'>
          <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Name</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Email</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Phone no</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Applied Jobs</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Applied date</th>
                 <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Resume</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>status</th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {
                applicantsData.map((item,index)=>(
                  <tr className='hover:bg-gray-50 transition-colors hover:cursor-pointer'>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>
                        {item.applicant?.name}
                        </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>
                        {item.applicant?.email}
                        </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>
                        {item.applicant.phone==""?"not mention":item.applicant.phone}
                        </div>
                    </td>
                     <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>
                        {item.job.description}
                        </div>
                    </td>
                     <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>
                        {new Date(item.createdAt).toLocaleDateString({
                          year:"numeric",
                          month:"long",
                          day:"numeric"
                        })}
                        </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>
                        <a href={`${BASE_URL}/uploads/${item.applicant.resume}`} target='_blank' rel='noopener noreferrer' className='text-blue-600'>Resume</a>
                        </div>
                    </td>
                     <td className='px-6 py-4 whitespace-nowrap'>
                      <select className='text-xs font-semibold rounded-full px-2 py-1 bg-gray-100 text-gray-800 focus:outline:none' onChange={(e)=>handleStatusChange(item._id,e.target.value)}>
                        <option value="pending">Pending</option>
                        <option value="accepted">Accepted</option>
                        <option value="rejected">Rejected</option>
                      </select>
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

export default Applicants
