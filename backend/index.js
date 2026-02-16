import express, { application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { connectDB } from './config/connectDB.js';
import authRouter from './routes/authRoutes.js';
import UserRouter from './routes/userRoutes.js';
import categoryRouter from './routes/categoryRoutes.js';
import companyRouter from './routes/companyRoutes.js';
import jobRouter from './routes/jobRoutes.js'
import applicationRouter from './routes/applicationRoutes.js';
import mongoose from 'mongoose';
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
const allowedOrigins = ['http://localhost:5173'];
app.use(express.json());
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(cookieParser())
app.use('/auth',authRouter);
app.use('/user',UserRouter);
app.use('/category',categoryRouter);
app.use('/company',companyRouter);
app.use('/job',jobRouter);
app.use('/application',applicationRouter);
app.use('/uploads',express.static("uploads"));
connectDB();
app.get('/', (req, res) => {
  res.send('hello server');
})
mongoose.connection.once("open", () => {
  console.log("Connected to DB:", mongoose.connection.name);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})