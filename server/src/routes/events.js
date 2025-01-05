import express from 'express';
import { createEvent, listEvents } from '../database/Event.js';

export const router = express.Router();


// event list get
router.get('/list', async (req, res) => {
    try {
        const events = await listEvents();
        res.json(events);
    }
    catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ error: "Error fetching events" });
    }
});

// event create
router.post('/create', async (req, res) => {
    try {
        const { title, description, date, location } = req.body;



        if (!title || !description || !date || !location) {
            console.error("Missing required fields");
            res.status(400).json({ error: "Missing required fields" });
            return;
        }
        const event = await createEvent(title, description, date, location);
        res.json(event);
    }
    catch (error) {
        console.error("Error creating event:", error);
        res.status(500).json({ error: "Error creating event" });
    }
});


