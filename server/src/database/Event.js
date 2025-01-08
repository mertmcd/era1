import eventSchema from "../models/eventSchema.js";

export const createEvent = async (title, description, date, location) => {
    try {
        const newEvent = new eventSchema({ title, description, date, location });
        return await newEvent.save();
    }
    catch (error) {
        console.error("Error creating event:", error);
        return null;
    }
}

export const listEvents = async () => {
    try {
        return await eventSchema.find();
    }
    catch (error) {
        console.error("Error listing events:", error);
        return null;
    }
}
