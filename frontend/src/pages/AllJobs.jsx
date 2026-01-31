import React, { useContext,useEffect } from "react";
import { AppContext } from "../context/AppContext";
import JobCards from "../components/JobCards";
import JobDetails from "./JobDetails";

const AllJobs = ()=>{
  const {jobsData,query,setQuery} = useContext(AppContext);
    useEffect(()=>{
      setQuery("");
    },[]);
  const filteredJobs = jobsData.filter((job)=>{
    return job.title.toLowerCase().includes(query.toLowerCase());
  })
  filteredJobs.map((job,index)=>{
    return <JobDetails key={index} />
  })
  return(
    <div className="py-10">
      <h1 className="text-2xl md:text-5xl font-semibold text-gray-800">Available Jobs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
      {
        filteredJobs.map((job,index)=>{
          return(
            <JobCards key={job._id} jobs={job}/>
          )
        })
      }
      </div>
    </div>
  )
}
export default AllJobs;
