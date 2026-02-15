import Job from "../models/jobModel.js";
export const postJob = async(req,res)=>{
  try {
    const {id} = req.user;
    const {name,company,description,location,salary,type,requirements,benefits,jobLevel,education,experience} = req.body;
    const job = await Job.create({
      name,
      company,
      description,
      location,
      salary,
      type,
      requirements,
      benefits,
      jobLevel,
      education,
      experience,
      createdBy:id
    });
    return res.json({success:true,message:"job posted successfully",job});
  } catch (error) {
    return res.json({success:false,message:"internal server error"});
  }
};

export const getEmployerJobs = async(req,res)=>{
  try {
    const {id} = req.user;
    const jobs = await Job.find({createdBy:id}).populate("company").sort({createdAt:-1});
    return res.json({success:true,jobs});
  } catch (error) {
    console.log(error);
      return res.json({success:false,message:"internal server error"});
  }
};

export const getAllJobs = async(req,res)=>{
  try {
    const jobs = await Job.find().populate("company").sort({createdAt:-1});
    return res.json({success:true,jobs});
  } catch (error) {
      return res.json({success:false,message:"internal server error"});
  }
};

export const deleteJob = async(req,res)=>{
  try {
    const {id} = req.user;
    const {id:jobId} = req.params;
    console.log("JobId from params:", jobId);
    const job = await Job.findById(jobId);
    if(!job){
      return res.json({success:false,message:"job not found"});
    }
    if(job.createdBy!=id){
      return res.json({success:false,message:"unauthorized"});
    }
    const deletedJob = await Job.findByIdAndDelete(jobId);
    if(!deletedJob){
      return res.json({success:false,message:"error while fetching the job to be deleted"});
    }
    return res.json({success:true,message:"job deleted successfully"});
  } catch (error) {
    return res.json({success:false,message:"internal server error"});
  }
}