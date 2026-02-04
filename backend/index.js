import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { connectDB } from './config/connectDB.js';

dotenv.config();

const app = express();
const allowedOrigins = ['http://localhost:5173'];
app.use(express.json());
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(cookieParser())

connectDB();
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('hello server');
})

app.listen(PORT, () => {
  console.log(`server is running at:http://localhost:${PORT}`);
})