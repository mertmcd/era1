import jwt from "jsonwebtoken";

const SECRET_KEY = "your_jwt_secret_key";

export const login = (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "password") {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
        return res.json({ token });
    }

    return res.status(401).json({ error: "Invalid username or password" });
};
