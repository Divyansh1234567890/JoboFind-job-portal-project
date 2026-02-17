import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
const BASE_URL = import.meta.env.VITE_BASE_URL;
const CompaniesList = () => {
  const {companiesData,setCompaniesData,navigate,axios} = useContext(AppContext);
  const handleDelete = (id)=>{
    const updatedCompanies = companiesData.filter((company)=>company._id!=id);
    setCompaniesData(updatedCompanies);
  }
  const fetchCompanies = async ()=>{
    try {
      const {data} = await axios.get(`${BASE_URL}/company/getEmployerCompany`);
      if(data.success){
        setCompaniesData(data.companies);
      }
    } catch (error) {
      console.log("failed to fetch companies list");
    }
  }
  useEffect(()=>{
    fetchCompanies();
  },[]);
  return (
    <div className='max-w-4xl w-full px-6 mx-auto mt-10 bg-white shadow rounded-lg'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-2xl font-medium text-gray-800'>Company List</h2>
        <button onClick={()=>navigate('/recruiter/AddCompany')} className='bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer'>
        Add Company
        </button>
      </div>
      <table className='w-full border border-gray-300 rounded overflow-hidden'>
      <thead className='bg-gray-100'>
        <tr>
          <th className='text-left p-3 border-b'>Logo</th>
          <th className='text-left p-3 border-b'>Name</th>
          <th className='text-left p-3 border-b'>About</th>
          <th className='text-left p-3 border-b'>Delete</th>
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-300'>
      {
        companiesData.map((company)=>(
          <tr key={company._id} className='hover:bg-gray-50'>
            <td className='p-3 border-b'>
            <img src={`${BASE_URL}/uploads/${company.logo}`} alt="company-logo" className='w-16 h-16 object-cover border'/>
            </td>
            <td className='p-3 border-b'>
              {company.name}
            </td>
            <td className='p-3 border-b'>
              {company.about}
            </td>
            <td className='p-3 border-b'>
              <button onClick={()=>handleDelete(company._id)} className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer'>Delete</button>
            </td>
          </tr>
        ))
      }
      </tbody>
      </table>
    </div>
  )
}

export default CompaniesList
