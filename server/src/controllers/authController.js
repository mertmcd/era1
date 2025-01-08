import jwt from "jsonwebtoken";
import { hashPassword, comparePasswords } from "../utils/hash.js";
import { createUser, getUserByUsername } from "../database/user.js";

const register = async (req, res) => {
    const { username, email, password } = req.body;

    // check for missing fields
    if (!username || !email || !password) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    // hash password
    const passwordHash = await hashPassword(password);

    // check if user already exists
    const existingUser = await getUserByUsername(username);
    if (existingUser) {
        return res.status(409).json({ error: "User already exists" });
    }

    // create user
    const user = await createUser(username, email, passwordHash);
    if (!user) {
        return res.status(500).json({ error: "Error creating user auth" });
    }
    return res.json({ message: "User created successfully" });
}

const login = async (req, res) => {
    const { username, password } = req.body;

    // check for missing fields
    if (!username || !password) {
        return res.status(400).json({ error: "Missing username or password" });
    }

    // check if user exists
    const user = await getUserByUsername(username);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    } else {
        // check if password matches
        const passwordMatch = await comparePasswords(password, user.passwordHash);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        // create token
        const SECRET_KEY = process.env.SECRET_KEY;
        const token = jwt.sign({ username: user.username }, SECRET_KEY);

        return res.json({ token, user });
    }
}

export { register, login };


