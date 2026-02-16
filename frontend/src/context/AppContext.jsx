import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../assets/asset";
import { jobs } from "../assets/asset";
import {companies} from '../assets/asset'
import { applicants } from "../assets/asset";
import toast from "react-hot-toast";
import axios from 'axios';
axios.defaults.withCredentials=true;
const BASE_URL = import.meta.env.VITE_BACKEND_URL;
console.log("BASE_URL:", BASE_URL);
export const AppContext = createContext();
const AppContextProvider = ({children})=>{
  const navigate = useNavigate();
  const [user,setUser] = useState(null);
  const [admin,setAdmin] = useState(false);
  const [categoriesData,setCategoriesData] = useState([]);
  const [jobsData,setJobsData] = useState([]);
  const [query,setQuery] = useState("");
  const [isJobApplied,setIsJobApplied] = useState(false);
  const [savedJobs,setSavedJobs] = useState([]);
  const [companiesData,setCompaniesData] = useState([]);
  const [applicantsData,setApplicantsData] = useState([]);

  const fetchApplicants = async ()=>{
    try {
      const {data} = await axios.get(`${BASE_URL}/application/allApplications`);
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

  const fetchCompanies=async ()=>{
    try{
      const {data} = await axios.get(`${BASE_URL}/company/allCompanies`);
      if(data.success){
          setCompaniesData(data.companies);
      }
      else toast.error('can not fetch companies data');
    }
    catch(error){
      toast.error(error.response.data.message);
    }
  }
  const fetchCategories = async ()=>{
    try {
      const {data} = await axios.get(`${BASE_URL}/category/getAll`);
    if(data.success){
      setCategoriesData(data.categories);
    }
    else{
      toast.error(error.message);
    }
    } catch (error) {
      toast.error("Internal server error");
    }
  }
  const fetchJobs = async()=>{
    try {
      const {data} = await axios.get(`${BASE_URL}/job/all`);
      if(data.success){
        setJobsData(data.jobs);
      }
      else{
        toast.error("error while fetching jobs");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }

 useEffect(()=>{
 const fetchLoggedInUser = async ()=>{
   try {
    const {data} = await axios.get(`${BASE_URL}/user/me`,{withCredentials:true,
  headers: {
    token: localStorage.getItem("token")
  }
});
    if(data.success){
      setUser(data.findUser);
    }
    if(data.findUser?.role?.toLowerCase() === "admin"){
   setAdmin(true);
}
  } catch (error) {
    console.log(error);
  }
 };
 fetchLoggedInUser();
 },[]);

  useEffect(()=>{
    fetchJobs();
    fetchApplicants();
    fetchCategories();
  },[]);

  useEffect(()=>{
  if(admin){
    fetchCompanies();
  }
},[admin]);

  const saveJob = (job)=>{
    setSavedJobs((prev)=>{
      const exist = prev.find((item)=>item._id===job._id);
      if(exist){
        return prev;
      }
      else{
        return [...prev,job];
      }
    })
    toast.success("job saved successfully");
  }

  const value = {navigate,user,setUser,admin,setAdmin,categoriesData,setCategoriesData,jobsData,query,setQuery,isJobApplied,setIsJobApplied,savedJobs,saveJob,companiesData,setCompaniesData,applicantsData,axios};
 return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
export default AppContextProvider;