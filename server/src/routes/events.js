import express from 'express';
import { getEventList, createNewEvent } from '../controllers/eventController.js';

const router = express.Router();

// event list get
router.get('/list', getEventList);

// event create
router.post('/create', createNewEvent);

export default router;
