import express from 'express';
import connectToDatabase from './src/database/connection.js';
import cors from 'cors';
import { router } from './src/routes/index.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

connectToDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// health check
app.get('/health', (req, res) => {
  res.send('I am healthy');
});


app.use('/api', router);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
