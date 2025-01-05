import express from 'express';
import { router as eventsRouter } from './events.js';

export const router = express.Router();

const app = express();

app.use(express.json());

router.use('/events', eventsRouter);