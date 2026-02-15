import jwt from 'jsonwebtoken';
export const isAuthenticated = (req,res,next)=>{
  const token = req.cookies.token;
  if(!token){
    return res.status(401).json({success:false,message:"please login first"});
  }
  try{
    const decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.user = decode;
    next();
  }
  catch(error){
    return res.status(401).json({success:false,message:"error while fetching user data"});
  }
}