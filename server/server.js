import express from 'express';
import connectToDatabase from './src/database/connection.js';
import cors from 'cors';
import eventRouters from './src/routes/events.js';
import authRouters from './src/routes/auth.js';
import errorMiddleware from './src/middlewares/errorMiddleware.js';

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
app.use(errorMiddleware);

// health check
app.get('/health', (req, res) => {
  res.send('I am healthy');
});

app.use('/api/events', eventRouters);
app.use('/api/auth', authRouters);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
