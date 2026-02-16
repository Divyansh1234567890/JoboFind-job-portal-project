import express from 'express';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { applyToJob,getAllApplications,getEmployerJobApplicants,getStudentApplication, updateApplicationsStatus } from '../controllers/applicationController.js';
import { isAdmin } from '../middlewares/isAdmin.js';

const applicationRouter = express.Router();
applicationRouter.post('/apply',isAuthenticated,applyToJob);
applicationRouter.get('/studentApplications',isAuthenticated,getStudentApplication);
applicationRouter.get('/employerJobApplicants',isAuthenticated,
  getEmployerJobApplicants
);
applicationRouter.get('/allApplications',isAuthenticated,isAdmin,getAllApplications);
applicationRouter.put('/updateStatus/:applicationId',isAuthenticated,updateApplicationsStatus);
export default applicationRouter;