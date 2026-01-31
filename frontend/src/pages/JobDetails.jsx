import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { asset } from "../assets/asset";
import toast from 'react-hot-toast'
const JobDetails = () => {
  const { jobsData,isJobApplied,setIsJobApplied,savedJobs,saveJob} = useContext(AppContext);
  const { id } = useParams();

  const job = jobsData.find((job) => String(job._id) === id);
  if (!job) return <p>Job not found</p>;

  return (
    <div className="py-16 mx-15">
      <h1 className="text-2xl md:text-5xl text-gray-800 font-semibold">
        Job Details
      </h1>

      {/* MAIN WRAPPER */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT SECTION (2 columns) */}
        <div className="lg:col-span-2 flex flex-col gap-8">

          {/* Header */}
          <div className="flex items-center gap-5">
            <img src={job.image} alt="" className="w-20 h-20" />
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                {job.title}
              </h2>
              <p className="text-sm text-gray-600">
                {job.company}
                <span className="bg-green-200/40 px-2 py-1 rounded ml-2">
                  {job.type}
                </span>
              </p>
            </div>
          </div>

          {/* Job Description */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Job Description
            </h4>
            <p className="text-gray-700">{job.description}</p>
          </div>

          {/* Job Requirements */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Job Requirements
            </h4>
            <ul className="list-disc pl-5">
              {job.requirements.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Job Benefits */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Job Benefits
            </h4>
            <ul className="list-disc pl-5">
              {job.benefits.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-6 border border-gray-300 p-6 rounded-lg">

          {/* Actions */}
          <div className="flex gap-4 items-center" onClick={()=>saveJob(job)}>
            <img
              src={asset.saveLaterIcon}
              alt=""
              className="cursor-pointer w-11.5"
              
            />
            <button className={`px-6 py-2 ${isJobApplied?`bg-gray-500`:`bg-blue-500`} text-white rounded-full cursor-pointer`} onClick={()=>{
              setIsJobApplied(!isJobApplied);
              toast.success("applied successfully");
            }} disabled={isJobApplied}>
            {isJobApplied?"job applied":"Apply"}
            {/* {isJobApplied} */}
            </button>
          </div>

          {/* Salary & Location */}
          <div className="border border-gray-300 p-4 rounded">
            <p className="font-medium">Salary: {job.salary}</p>
            <p className="mt-1">Location: {job.location}</p>
          </div>

          {/* Job Overview */}
          <div className="border border-gray-300 p-4 rounded">
            <p className="text-lg font-bold mb-2">Job Overview</p>
            <div className="text-sm text-gray-700 flex flex-col gap-1">
              <p>Posted Date: {job.postedDate}</p>
              <p>Job Level: {job.jobLevel}</p>
              <p>Education: {job.education}</p>
              <p>Experience: {job.experience}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JobDetails;
