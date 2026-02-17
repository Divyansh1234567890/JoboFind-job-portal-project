import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { companies } from '../../assets/asset';
import {toast} from 'react-hot-toast';
const BASE_URL = import.meta.env.VITE_BASE_URL;
const PostJob = () => {
  const {navigate,axios} = useContext(AppContext);
  const [companies,setCompanies] = useState([]);
  const [jobData,setJobData] = useState({
    name:"",
    company:"",
    description:"",
    location:"",
    salary:"",
    type:"",
    image:null,
    requirements:[],
    benefits:[],
    jobLevel:"",
    education:"",
    experience:"",
  });
  const [preview,setPreview] = useState(null);
  const fetchCompanies = async()=>{
    try {
      const {data} = await axios.get(`${BASE_URL}/company/getEmployerCompany`);
      if(data.success){
        setCompanies(data.companies);
      }
      else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
 const handleChange = (e) => {
  const { name, value } = e.target;
  if (name === "requirements" || name === "benefits") {
    setJobData({
      ...jobData,
      [name]: value.split(",").map(v => v.trim())
    });
  } else {
    setJobData({ ...jobData, [name]: value });
  }
};

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const {data} = await axios.post(`${BASE_URL}/job/post`,jobData);
      console.log(data)
    if(data.success){
      toast.success("job posted success");
      navigate('/recruiter/JobsList');
    }
    else{
      toast.error(data.message);
    }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  useEffect(()=>{
    fetchCompanies();
  },[]);
  return (
    <form action="" onSubmit={handleSubmit} className='bg-white text-gray-500 max-w-3xl mx-4 md:p-6 p-4 text-left text-sm rounded shadow-[0px_0px_10px_0px] shadow-black/10 w-full'>
      <h2 className='text-2xl font-semibold mb-6 text-center text-gray-800'>
      Post a new job
      </h2>
       {
      preview && (
        <div className='mb-3 flex justify-center'>
          <img src={preview} alt="" className='w-24 h-24 object-cover rounded-full shadow'/>
        </div>
      )
    }

    {/* <div>
      <input type="file" accept='image/*' onChange={handleFileChange} name='image' className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 -100 cursor-pointer hover:file:bg-blue-100'/>
    </div> */}
    <label htmlFor="jobTitle">job Title</label>
    <input type="text" name="name" id="" value={jobData.name} onChange={handleChange} placeholder='Enter job title' className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4' required/>

    <label htmlFor="jobTitle">Company Name</label>
    <select name="company" id="" onChange={handleChange} value={jobData.company} className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4 cursor-pointer' >
    <option value="">Select a company</option>
    {
      companies.map((company)=>(
        <option key={company._id} value={company._id}>{company.name}</option>
      ))
    }
    </select>

    <label >Job Description</label>
    <textarea type="text" name="description" id="" value={jobData.description} onChange={handleChange} placeholder='Describe the job role' className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4' required rows={3}></textarea>

    <label>Location</label>
    <input type="text" name="location" id="" value={jobData.location} onChange={handleChange} placeholder='job location' className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4' required/>

    <label>Salary </label>
    <input type="text" name="salary" id="" value={jobData.salary} onChange={handleChange} placeholder='Enter salary' className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4' required/>

    <label>Job Type</label>
    <select name="type" value={jobData.type} onChange={handleChange} className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4'>
    <option value="">Select Type</option>
    <option value="Full-time">Full-time</option>
    <option value="Part-time">Part-time</option>
    <option value="Remote">Remote</option>
    <option value="Internship">Internship</option>
    </select>

    <label>Requirements</label>
    <textarea name="requirements" id="" value={jobData.requirements} onChange={handleChange} placeholder='Enter company requirements' className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4' required rows={2}></textarea>

    <label>Benefits</label>
    <textarea type="text" name="benefits" id="" value={jobData.benefits} onChange={handleChange} placeholder='Enter benefits' className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4' required rows={2}></textarea>

    <label>job level</label>
    <input type="text" name="jobLevel" id="" value={jobData.jobLevel} onChange={handleChange} placeholder='e.g. senior, mid-level' className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4'/> 

    <label htmlFor="jobTitle">Education</label>
    <input type="text" name="education" id="" value={jobData.education} onChange={handleChange} placeholder='e.g. Bachelor , master degree' className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4'/>

    <label htmlFor="jobTitle">Experience</label>
    <input type="text" name="experience" id="" value={jobData.experience} onChange={handleChange} placeholder='e.g. 5 years' className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4'/>

    <button type='submit' className='w-full my-3 bg-blue-600 active:scale-95 transition py-2.5 rounded text-white cursor-pointer'>
      Post Job
    </button>
    </form>
  )
}

export default PostJob
