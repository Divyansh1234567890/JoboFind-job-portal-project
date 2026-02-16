import express from 'express';
const categoryRouter = express.Router();
import {upload} from '../middlewares/multer.js'
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { isAdmin } from '../middlewares/isAdmin.js';
import { AddCategory, deleteCategory, getCategories } from '../controllers/categoryController.js';
categoryRouter.post('/add',isAuthenticated,isAdmin,upload.single('logo'),AddCategory);
categoryRouter.get('/getAll',getCategories);
categoryRouter.delete('/delete/:id',deleteCategory);
export default categoryRouter;