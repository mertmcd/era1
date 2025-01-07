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
    },
    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
