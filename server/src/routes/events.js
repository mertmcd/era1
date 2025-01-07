import express from 'express';
import { getEventList, createNewEvent } from '../controllers/eventController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// event list get
router.get('/list', authMiddleware, getEventList);

// event create
router.post('/create', authMiddleware, createNewEvent);

export default router;
