import express from 'express';
import { deleteJob, getAllJobs, getEmployerJobs, postJob } from '../controllers/jobController.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
const jobRouter = express.Router();
jobRouter.post('/post',isAuthenticated,postJob);
jobRouter.get('/employerJobs',isAuthenticated,getEmployerJobs);
jobRouter.get('/all',getAllJobs);
jobRouter.delete('/delete/:id',isAuthenticated,deleteJob);
export default jobRouter;