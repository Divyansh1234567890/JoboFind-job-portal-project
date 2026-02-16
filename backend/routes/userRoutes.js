import express from 'express';
import { getAllStudents, updateProfile, userLoggedIn } from '../controllers/userController.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { upload } from '../middlewares/multer.js';
import { isAdmin } from '../middlewares/isAdmin.js';
const UserRouter = express.Router();
UserRouter.get('/me',isAuthenticated,userLoggedIn);
UserRouter.put('/updateProfile/:id',isAuthenticated,upload.fields([
  {name:"profileImage",maxCount:1},
  {name:"resume",maxCount:1}
]),updateProfile);
UserRouter.get('/allStudents',isAuthenticated,isAdmin,getAllStudents);
export default UserRouter;