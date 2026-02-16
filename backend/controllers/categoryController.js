import Category from "../models/categoryModel.js";
export const AddCategory = async (req,res)=>{
  try {
    const {name} = req.body;
  const logo = req.file?.filename;
  if(!name || !logo){
    return res.json({success:false,message:"please fill all the fields"});
  }
  const categories = await Category.create({name,logo});
  return res.json({
    success:true,
    message:"categories fetched successfully",
    categories
  })
  } catch (error) {
    return res.json({success:false,message:"error while adding a new category"});
  }
}

export const getCategories = async (req,res)=>{
  try {
    const categories = await Category.find();
    if(!categories){
      return res.json({success:false,message:"can not fetch all categories"})
    }
    return res.json({
      success:true,
      message:"All categories fetch successfully",
      categories,
    })
  } catch (error) {
    return res.json({success:false,message:"error while fetcing all the categories"});
  }
}

export const deleteCategory = async (req,res)=>{
  try {
    const {id} = req.params;
    const category = await Category.findByIdAndDelete(id);
    if(!category){
      return res.json({success:false,message:"category id not found"});
    }
    return res.json({
      success:true,
      message:"category delete successfully",
    })
  } catch (error) {
    return res.json({success:false,message:"error while deleting the category"});
  }
}