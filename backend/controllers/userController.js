import User from '../models/userModel.js';
export const userLoggedIn = async (req,res) =>{
  try {
    if(req.user.role === "admin"){
      return res.json({
        success:true,
        message:"admin found successfully",
        findUser:{
          email: process.env.ADMIN_EMAIL,
          role:"admin"
        }
      });
    }
    const {id} = req.user;
    const findUser = await User.findById(id).select('-password');

    if(!findUser){
      return res.json({success:false,message:"user not found"});
    }

    return res.json({
      success:true,
      message:"user found successfully",
      findUser
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success:false,
      message:"Internal server error"
    });
  }
};


//controller for update the user
export const updateProfile = async(req,res)=>{
  try {
    const {id} = req.user;
  const {name,email,phone,location,education,skills,experience,about} = req.body;
  const updates = {name,email,phone,location,education,skills,experience,bio:about};
  if(req.files?.profileImage?.[0]){
    updates.image = req.files.profileImage[0].filename;
  }
  if(req.files?.resume?.[0]){
    updates.resume = req.files.resume[0].filename;
  }
  const updatedUser = await User.findByIdAndUpdate(id,updates,{new:true}).select('-password');
  if(!updatedUser){
    return res.json({success:false,message:"unable to update user or user does not exist"});
  }
  return res.json({success:true,message:"user updated successfully",user:updatedUser});
  } catch (error) {
    return res.json({success:false,message:"Internal server error"});
  }
};

//get all students or job seekers
export const getAllStudents = async (req,res)=>{
  try {
    const students = await User.find({role:"student"}).select('-password');
    if(!students){
      return res.json({success:false,message:"unable to fetch students data"});
    }
    return res.json({success:true,message:"successfully fetch students data",students});
  } catch (error) {
    return res.json({success:false,message:"Internal server error"});
  }
}