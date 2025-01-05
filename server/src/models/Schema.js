import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    title: {
        type: String || Number,
        required: true,
    },
    description: {
        type: String || Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String || Number,
        required: true,
    }
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
