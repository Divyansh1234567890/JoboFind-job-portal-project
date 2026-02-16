import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import toast from 'react-hot-toast';

const AddCompany = () => {
  const {navigate,axios} = useContext(AppContext);
  const [companiesData,setCompaniesData] = useState({
    name:"",
    about:"",
    logo:null,
  });
  const [file,setFile] = useState(null);
  const [preview,setPreview] = useState(null);
  const handleChange = (e)=>{
    setCompaniesData({...companiesData,[e.target.name]:e.target.value});
  }
  const handleFileChange = (e)=>{
    const selectedFile = e.target.files[0];
    setCompaniesData({...companiesData,logo:selectedFile});
    if(selectedFile){
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreview(imageUrl);
    }
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const formPayLoad = new FormData();
      formPayLoad.append("name",companiesData.name);
      formPayLoad.append("about",companiesData.about);
      formPayLoad.append("logo",companiesData.logo);
      const {data} = await axios.post('http://localhost:4000/company/add',formPayLoad);
      if(data.success){
        toast.success(data.message);
        navigate('/recruiter');
      }
      else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return ( 
    <div className='flex items-center max-w-4xl w-full mx-auto'>
      <form action="" onSubmit={handleSubmit} className='bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded shadow-[0px_0px_10px_0px] shadow-black/10'>
      <h2 className='text-2xl font-medium text-gray-800'>Register a new company</h2>
      <div className='w-full my-4'>
    {
      preview && (
        <div className='mb-3 flex justify-center'>
          <img src={preview} alt="" className='w-24 h-24 object-cover rounded-full shadow'/>
        </div>
      )
    }
    <input type="file" accept='image/*' onChange={handleFileChange} className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 -100 cursor-pointer hover:file:bg-blue-100'/>
      </div>
      <label htmlFor="name">Company Name</label>
      <input type="text" value={companiesData.name} onChange={handleChange} name='name' placeholder='Enter Company Name' className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4' />
      <div className='mb-4'>
        <label htmlFor="about">About Company</label>
        <textarea name="about" value={companiesData.about} onChange={handleChange} placeholder='Enter something about company' className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rouded py-2.5 px-4'/>
      </div>
      <button type='submit' className='w-full my-3 bg-blue-400 active:scale-95 transition py-2.5 rounded text-white cursor-pointer'>Add Company</button>
      </form>
    </div>
  )
}

export default AddCompany