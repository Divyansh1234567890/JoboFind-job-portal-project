import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Profile = () => {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    location:"",
    education:"",
    experience:"",
    skills:"",
    about:"",
    profileImage:null,
    resume:null,
  });
  const {user,setUser,axios,navigate} = useContext(AppContext);
  const [preview,setPreview] = useState(null);
  const handleChange = (e)=>{
    const {name,value,files} = e.target;
    if(files){
      setFormData({...formData,[name]:files[0]});
    }
    else{
      setFormData({...formData,[name]:value});
    }
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const formPayLoad = new FormData();
      formPayLoad.append("name",formData.name);
      formPayLoad.append("email", formData.email);
      formPayLoad.append("phone", formData.phone);
      formPayLoad.append("location", formData.location);
      formPayLoad.append("education", formData.education);
      formPayLoad.append("skills",formData.skills);
      formPayLoad.append("about",formData.about);
      formPayLoad.append("resume",formData.resume);
      formPayLoad.append("profileImage",formData.profileImage);
      const {data} = await axios.put(`http://localhost:4000/user/updateProfile/:${user._id}`,formPayLoad);
      if(data.success){
        setUser(data.user);
        toast.success(data.message)
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
    navigate('/');
  }
  useEffect(()=>{
    if(user){
      setFormData({
        name:user.name,
        email:user.email,
        phone:user.phone,
        location:user.location,
        education:user.education,
        experience:user.experience,
        skills:user.skills,
        about:user.about,
        profileImage:user.image,
        resume:user.resume,
      })
    }
  },[user])
  return (
    <div className='max-w-3xl mx-auto mt-8 p-6 bg-white shadow rounded-lg'>
      <h2 className='text-2xl font semibold mb-4'>My Profile</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          {
            preview && (
              <img src={preview} alt="preview" className='w-24 h-24 object-cover rounded-full mb-4' />
            )
          }
        </div>
        <div>
          <label htmlFor="" className='block mb-1 font-semibold'>Profile Image</label>
          <input type="file" name='profileImage' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="" className='block mb-1 font-semibold'>Full Name</label>
          <input type="text" name='name' value={formData.name} onChange={handleChange} className='w-full border rounded p-2' required/> 
        </div>
        <div>
          <label htmlFor="" className='block mb-1 font-semibold'>Email</label>
          <input type="email" name='email' value={formData.email} onChange={handleChange} className='w-full border rounded p-2 bg-gray-100' readOnly/> 
        </div>
        <div>
          <label htmlFor="" className='block mb-1 font-semibold'>Phone</label>
          <input type="text" name='phone' value={formData.phone} onChange={handleChange} className='w-full border rounded p-2'/> 
        </div>
        <div>
          <label htmlFor="" className='block mb-1 font-semibold'>Location</label>
          <input type="text" name='location' value={formData.location} onChange={handleChange} className='w-full border rounded p-2'/> 
        </div>
        <div>
          <label htmlFor="" className='block mb-1 font-semibold'>Education</label>
          <input type="text" name='education' value={formData.education} onChange={handleChange} className='w-full border rounded p-2'/> 
        </div>
        <div>
          <label htmlFor="" className='block mb-1 font-semibold'>Experience</label>
          <input type="text" name='experience' value={formData.experience} onChange={handleChange} className='w-full border rounded p-2'/> 
        </div>
        <div>
          <label htmlFor="" className='block mb-1 font-semibold'>Skills</label>
          <textarea name='skills' value={formData.skills} onChange={handleChange} className='w-full border rounded p-2' rows={2} placeholder='e.g. React, SQL, Node.Js'></textarea> 
        </div>
        <div>
          <label htmlFor="" className='block mb-1 font-semibold'>About</label>
          <textarea type="text" name='about' value={formData.about} onChange={handleChange} className='w-full border rounded p-2' placeholder='Tell us something about yourself'></textarea> 
        </div>
        <div>
          <label htmlFor="" className='block mb-1 font-semibold'>profile-image</label>
          <input type="file" name='profileImage'  onChange={handleChange} className='w-full border rounded p-2'/> 
        </div>
        <div>
          <label htmlFor="" className='block mb-1 font-semibold'>Resume</label>
          <input type="file" name='resume'  onChange={handleChange} className='w-full border rounded p-2'/> 
        </div>
        {
          formData.resume && (
            <div>
              <a href={`http://localhost:4000/uploads/${formData.resume}`} className='text-blue-600' target='_blank'>view resume</a>
            </div>
          )
        }
        <button className='bg-blue-500 text-white px-4 py-2 rounded'>
          Update Profile
        </button>
      </form>
    </div>
  )
}

export default Profile
