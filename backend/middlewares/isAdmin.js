import jwt from 'jsonwebtoken';
export const isAdmin = (req,res,next)=>{
  const token = req.cookies.token;
  if(!token){
    return res.json({success:false,message:"please login first"});
  }
  try{
    const decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
    if(decode.email==process.env.ADMIN_EMAIL){
      next();
    }
    else{
      return res.status(401).json({success:false,message:"please login first"});
    }
  }
  catch(error){
    return res.json({success:false,message:"internal server error"});
  }
}