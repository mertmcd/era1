import Schema from "../models/Schema.js";

export const createEvent = async (title, description, date, location) => {
    const newEvent = new Schema({ title, description, date, location });
    return await newEvent.save();
}

export const listEvents = async () => {
    return await Schema.find();
}
