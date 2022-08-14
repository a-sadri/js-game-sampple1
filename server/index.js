import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

import connectDB from './config/db.js';
import userRouter from './routes/userRoutes.js';

dotenv.config();

connectDB();
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//API Routes
app.use('/users', userRouter);

const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('Hi');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
