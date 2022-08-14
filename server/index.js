import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

const MONGODB_URL =
  'mongodb+srv://ali:wX4M6z70WmesNl8g@cluster0.jlyospb.mongodb.net/?retryWrites=true&w=majority';

const port = 5000;
app.get('/', (req, res) => {
  res.send('Hi');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
