import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../assets/asset";
import { jobs } from "../assets/asset";
import toast from "react-hot-toast";
export const AppContext = createContext();
const AppContextProvider = ({children})=>{
  const navigate = useNavigate();
  const [user,setUser] = useState(null);
  const [recruiter,setRecruiter] = useState(false);
  const [admin,setAdmin] = useState(false);
  const [categoriesData,setCategoriesData] = useState([]);
  const [jobsData,setJobsData] = useState([]);
  const [query,setQuery] = useState("");
  const [isJobApplied,setIsJobApplied] = useState(false);
  const [savedJobs,setSavedJobs] = useState([]);
  const fetchCategories = async ()=>{
    setCategoriesData(categories);
  }
  const fetchJobs = async()=>{
    setJobsData(jobs);
  }
  useEffect(()=>{
    fetchCategories();
    fetchJobs();
  },[]);
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

  const value = {navigate,user,setUser,recruiter,setRecruiter,admin,setAdmin,categoriesData,jobsData,query,setQuery,isJobApplied,setIsJobApplied,savedJobs,saveJob};
 return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
export default AppContextProvider;