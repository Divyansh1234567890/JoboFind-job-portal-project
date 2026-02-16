import Company from '../models/companyModel.js';
export const addCompany = async(req,res)=>{
  try {
    const {id} = req.user;
  const {name,about} = req.body;
  const logo = req.file.filename;
  if(!name || !about || !logo || !id){
    return res.json({success:false,message:"Please fill all the fields"});
  }
  const companies = await Company.create({
    name,
    about,
    logo,
    createdBy:id,
  });
  return res.json({success:true,message:"company added successfully",companies});
  } catch (error) {
    res.json({success:false,message:"Internal server error"});
  }
};

export const getEmployerCompany = async (req,res)=>{
  try {
    const {id} = req.user;
    const companies = await Company.find({createdBy:id});
    if(!companies){
      return res.json({success:false,message:"no company found"});
    }
    return res.json({success:true,message:"company fetched successfully",companies});
  } catch (error) {
    res.json({success:false,message:"Internal server error"});
  }
};

export const getAllCompanies = async (req,res)=>{
  try {
    const companies = await Company.find();
    if(!companies){
      return res.json({success:false,message:"No companies found"});
    }
    return res.json({success:true,message:"all companies found successfully",companies});

  } catch (error) {
    res.json({success:false,message:"Internal server error"});
  }
};

export const deleteCompany = async (req,res)=>{
  try {
    const {id} = req.params;
    const deletedCompany = await Company.findByIdAndDelete(id);
    if(!deletedCompany){
      return res.json({success:false,message:"unable to delete the company"});
    }
    return res.json({success:true,message:"company deleted successfully",deletedCompany})
  } catch (error) {
    res.json({success:false,message:"Internal server error"});
  }
}