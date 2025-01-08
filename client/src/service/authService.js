import axiosInstance from "../api/axiosInstance";

export const authService = {

    async register(username, email, password) {
        try {
            const response = await axiosInstance.post("/auth/register", { username, email, password });
            console.log("User registered successfully:", response.data);
            return response.data;
        } catch (error) {
            throw error.response?.data || "Registration failed";
        }
    },

    async login(username, password) {
        try {
            const response = await axiosInstance.post("/auth/login", { username, password });
            const token = response.data.token;
            const user = response.data.user;

            localStorage.setItem("jwtToken", token);
            localStorage.setItem("user", JSON.stringify(user));

            // set authorization header
            axiosInstance.defaults.headers["Authorization"] = `Bearer ${token}`;

            return token;
        } catch (error) {
            throw error.response?.data || "Login failed";
        }
    },

    logout() {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("user");
    },

    isAuthenticated() {
        return !!localStorage.getItem("jwtToken");
    }
};
