import React, { useContext, useState } from "react";
import { AppContext} from "../../context/AppContext";
import toast from "react-hot-toast";
const Login = ()=>{
  const {navigate,user,setUser,setAdmin,axios} = useContext(AppContext);
  const [loginFormData,setLoginFormData] = useState({
    email:"",
    password:""
  });
  const handleChange = (e)=>{
    setLoginFormData({...loginFormData,[e.target.name]:e.target.value});
  } 
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
    const {data} = await axios.post('http://localhost:4000/auth/login',loginFormData,{ withCredentials: true });
    if(data.success){
      if(data.user.role=="recruiter"){
        setUser(data.user);
        toast.success(data.message);
        navigate('/recruiter');
      }
      else if(data.user.role=="student"){
        setUser(data.user);
        toast.success(data.message);
        navigate('/');
      }
      else{
        setAdmin(true);
        navigate('/admin');
        toast.success(data.message);
      }
    }
  }
  catch(error){
    toast.error(error.response.data.message);
  }
  };
  return(
    <div className="flex items-center justify-center min-h-screen"> 
      <form onSubmit={handleSubmit} autoComplete="off" className="bg-white text-gray-500 max-w-87.5 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Login Now</h2>

            <input id="email" name="email" autoComplete="off" onChange={handleChange} value={loginFormData.email} className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="email" placeholder="Enter your email" required />

            <input id="password" name="password" autoComplete="new-password" onChange={handleChange} value={loginFormData.password} className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="password" placeholder="Enter your password" required />

            <div className="text-right py-4">
                <a className="text-blue-600 underline" href="#">Forgot Password</a>
            </div>
            <button type="submit" className="w-full mb-3 bg-blue-500 hover:bg-blue-700/90 active:scale-95 transition py-2.5 rounded-full text-white cursor-pointer">Log in</button>
            <p className="text-center mt-4">Don’t have an account? <a href="/signup" className="text-blue-500 underline">Signup Now</a></p>
        </form>
    </div>
  )
}
export default Login;