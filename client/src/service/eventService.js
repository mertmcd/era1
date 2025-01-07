import axiosInstance from "../api/axiosInstance";

export const eventService = {
    async createEvent(title, description, date, location) {
        try {
            const response = await axiosInstance.post('/events/create', { title, description, date, location });
            return response.data;
        } catch (error) {
            console.error("Error creating event fe:", error);
            return null;
        }
    },
    async listEvents() {
        try {
            const response = await axiosInstance.get('/events/list');
            return response.data;
        } catch (error) {
            console.error("Error fetching events:", error);
            return null;
        }
    }
}