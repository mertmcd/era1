import axiosInstance from "../api/axiosInstance";

export const authService = {
    async login(username, password) {
        try {
            const response = await axiosInstance.post("/auth/login", { username, password });
            const token = response.data.token;

            // Token'ı localStorage'a kaydet
            localStorage.setItem("jwtToken", token);

            return token;
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    },

    logout() {
        localStorage.removeItem("jwtToken");
    },

    isAuthenticated() {
        return !!localStorage.getItem("jwtToken");
    }
};
