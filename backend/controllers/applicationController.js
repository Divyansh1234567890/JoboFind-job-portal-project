import Job from "../models/jobModel.js";
import Application from "../models/applicationModel.js";
export const applyToJob = async(req,res)=>{
  try {
    const {id} = req.user;
    const {jobId} = req.body;
    const alreadyApplied = await Application.findOne({job:jobId,applicant:id});
    if(alreadyApplied){
      return res.json({success:false,message:"you have already applied for this job"});
    }
    const job = await Job.findById(jobId);
    console.log(job)
    if(!job){
      return res.json({success:false,message:"job does not exist"});
    }
    const application = await Application.create({
      job:jobId,
      applicant:id,
      employer:job.createdBy,
    });
    console.log("Saved Application:", application);
    return res.json({success:true,message:"successfully applied for job",application});
  } catch (error) {
    console.log(error);
    return res.json({success:false,message:"Internal server error"});
  }
};

export const getStudentApplication = async(req,res)=>{
  try{
    const {id} = req.user;
    const applications = await Application.find({applicant:id}).populate('job');
    return res.json({success:true,message:"applications fetched successfully",applications})
  }catch(error){
    return res.json({success:false,message:"Internal server error"});
  }
};

export const getEmployerJobApplicants = async(req,res)=>{
  try {
    const {id} = req.user;
    const applications = await Application.find({employer:id}).populate('job').populate('employer').populate('employer').populate('applicant');
    return res.json({success:true,applications});
  } catch (error) {
    return res.json({success:false,message:"Internal server error"});
  }
};

export const getAllApplications = async (req,res)=>{
  try {
    const {id} = req.user;
    const applications = await Application.find().populate('job').populate('applicant').populate('employer');
    return res.json({success:true,applications});
  } catch (error) {
    return res.json({success:false,message:"Internal server error"});
  }
};

export const updateApplicationsStatus = async(req,res)=>{
  try{
    const {applicationId} = req.params;
    const {status} = req.body;
    const application = await Application.findById(applicationId);
    if(!application){
      return res.status(404).json({success:false,message:"Appiication not found"});
    }
    application.status = status;
    await application.save();

    res.status(200).json({
      success:true,
      message:"Application status updated",
      application
    });
  }catch(error){
    return res.json({success:false,message:"Internal server error"});
  }
};

