import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import toast from 'react-hot-toast';
const BASE_URL = import.meta.env.VITE_BASE_URL;
const AddCatogery = () => {
  const {navigate,axios} = useContext(AppContext);
  const [categoryData,setCategoryData] = useState({
    name:"",
    logo:null,
  });
  const [file,setFile] = useState(null);
  const [preview,setPreview] = useState(null);
  const handleChange = (e)=>{
    setCategoryData({...categoryData,[e.target.name]:e.target.value});
  };
  const handleFileChange = (e)=>{
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setCategoryData({...categoryData,logo:selectedFile});
    if(selectedFile){
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreview(imageUrl)
    }
  };
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const formPayLoad = new FormData();
    formPayLoad.append("name", categoryData.name);

    if (categoryData.logo) {
      formPayLoad.append("logo", categoryData.logo);
    }

    const { data } = await axios.post(
      `${BASE_URL}/category/add`,
      formPayLoad,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },withCredentials:true
      }
    );

    if (data.success) {
      toast.success(data.message);
      navigate("/admin");
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.response?.data?.message || error.message);
  }
};

  return (
    <div className='flex items-center max-w-4xl w-full mx-auto'>
     <form action="" onSubmit={handleSubmit} className='bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-s rounded shadow-[0px_0px_10px_0px] shadow-black/10'>
      <h2 className='text-2xl font-semibold mb-6 text-center text-grayt-800'>
        Add New Category
      </h2>
      <div className='w-full my-4 '>
        {
      preview && (
        <div className='mb-3 flex justify-center'>
          <img src={preview} alt="" className='w-24 h-24 object-cover rounded-full shadow'/>
        </div>
      )}
      </div>
      <input type="file" accept='image/*' onChange={handleFileChange} className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 -100 cursor-pointer hover:file:bg-blue-100'/>   

      <label htmlFor="name">Category Name</label>
      <input type="text" value={categoryData.name} onChange={handleChange} name='name' placeholder='Enter Category Name' className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4' />

      <button type='submit' className='w-full my-3 bg-blue-400 active:scale-95 transition py-2.5 rounded text-white cursor-pointer'>Add Category</button>
     </form>
    </div>
  )
}

export default AddCatogery
