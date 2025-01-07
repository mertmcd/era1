import { createEvent, listEvents } from '../database/event.js';

export const getEventList = async (req, res) => {
    try {
        const events = await listEvents();
        res.json(events);
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ error: "Error fetching events" });
    }
};

export const createNewEvent = async (req, res) => {
    try {
        const { title, description, date, location } = req.body;

        if (!title || !description || !date || !location) {
            console.error("Missing required fields");
            res.status(400).json({ error: "Missing required fields" });
            return;
        }

        const event = await createEvent(title, description, date, location);
        res.json(event);
    } catch (error) {
        console.error("Error creating event be:", error);
        res.status(500).json({ error: "Error creating event" });
    }
};
