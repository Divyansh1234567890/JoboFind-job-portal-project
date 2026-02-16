import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cookie from 'cookie-parser';

// user signup
export const register = async (req,res)=>{
  console.log("REGISTER API HI");
console.log("BODY:", req.body);
console.log("FILE:", req.file);

  try{
  const {name,email,password,role} = req.body;
  if(!name || !email || !password || !role){
    return res.json({message:"fill all the fields"});
  }
  const existUser = await User.findOne({email});
  if(existUser){
    
   return res.json({message:"user already exist"});
  }
  const image = req.file?req.file.filename:null;
  const hassedPassword = await bcrypt.hash(password,10);
  const user = await User.create({
    name,
    password:hassedPassword,
    email,
    role,
    image,
  });
  return res.json({
    success:true,
    message:"user register successfully",
    user
  });
}
catch(error){
  console.log(error);
 return  res.json({message:"internal server error"});
}
};

// user login

export const login = async (req,res)=>{
  const {email,password} = req.body;

  try {
    //admin login
    if(email==process.env.ADMIN_EMAIL && password==process.env.ADMIN_PASSWORD){
      const token = jwt.sign(
    {
      id: "admin",
      role: "admin",
      email: process.env.ADMIN_EMAIL,
    },
      process.env.JWT_SECRET_KEY,
    { expiresIn: "1d" }
    );

      res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax"
    });

      return res.json({
        success:true,
        message:"Admin login successfully",
        user:{email:process.env.ADMIN_EMAIL,role:"admin"}
      })
    }
    //user login
    const user = await User.findOne({email});
    if(!user){
      return res.json({success:false,message:"user does not exist"});
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
      return res.json({success:false,message:"invalid password"});
    }
    const token = jwt.sign(
  {
    id: user._id,
    role: user.role || "user",
  },
  process.env.JWT_SECRET_KEY,
  { expiresIn: "1d" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax"
    });

    return res.json({
      success:true,
      message:"user login successfully",
      user
    });
  } 
  catch (error) {
    return  res.json({message:"internal server error"});
  }
}


//logout
export const logout = async(req,res)=>{
  res.clearCookie('token');
  return res.json({success:true,message:"logout successfully"});
}