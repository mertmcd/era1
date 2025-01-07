import eventSchema from "../models/eventSchema.js";

export const createEvent = async (title, description, date, location) => {
    const newEvent = new eventSchema({ title, description, date, location });
    return await newEvent.save();
}

export const listEvents = async () => {
    return await eventSchema.find();
}
