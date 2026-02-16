import mongoose from "mongoose";
export const connectDB = async ()=>{
  try{
    console.log("MONGO_URI:", process.env.MONGO_URI);
    mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully");
  }
  catch(err){
    console.log(err);
  }
}