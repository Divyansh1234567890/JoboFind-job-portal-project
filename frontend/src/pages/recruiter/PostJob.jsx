import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';

const PostJob = () => {
  const {navigate} = useContext(AppContext);
  const [jobData,setJobData] = useState({
    title:"",
    company:"",
    description:"",
    location:"",
    salary:"",
    type:"",
    image:null,
    requirements:"",
    benefits:"",
    jobLevel:"",
    education:"",
    experience:"",
  });
  const [preview,setPreview] = useState(null);

  const handleChange = (e)=>{
    setJobData({...jobData,[e.target.name]:e.target.value})
  };
  const handleFileChange = (e)=>{
    const selectedFile = e.target.files[0];
    if(selectedFile){
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreview(imageUrl);
    }
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log("jobData",jobData);
    navigate('/recruiter/JobsList');
  }
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

    <div>
      <input type="file" accept='image/*' onChange={handleFileChange} name='image' className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 -100 cursor-pointer hover:file:bg-blue-100'/>
    </div>
    <label htmlFor="jobTitle">job Title</label>
    <input type="text" name="title" id="" value={jobData.title} onChange={handleChange} placeholder='Enter job title' className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4' required/>

    <label htmlFor="jobTitle">Company Name</label>
    <input type="text" name="company" id="" value={jobData.company} onChange={handleChange} placeholder='Enter company name' className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4' required/>

    <label >Job Description</label>
    <textarea type="text" name="description" id="" value={jobData.description} onChange={handleChange} placeholder='Describe the job role' className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4' required rows={3}></textarea>

    <label>Location</label>
    <input type="text" name="location" id="" value={jobData.location} onChange={handleChange} placeholder='job location' className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4' required/>

    <label>Salary </label>
    <input type="text" name="salary" id="" value={jobData.salary} onChange={handleChange} placeholder='Enter company name' className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4' required/>

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

    <button type='submit' className='w-full my-3 bg-blue-600 active:scale-95 transition py-2.5 rounded text-white'>
      Post Job
    </button>
    </form>
  )
}

export default PostJob
