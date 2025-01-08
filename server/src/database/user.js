import userSchema from '../models/userSchema.js';

export const createUser = async (username, email, passwordHash) => {
    try {
        const newUser = new userSchema({ username, email, passwordHash });
        return await newUser.save();
    }
    catch (error) {
        console.error("Error creating user db:", error);
        return null;
    }
}

export const getUserByUsername = async (username) => {
    try {
        return await userSchema
            .findOne({ username })
            .exec();
    }
    catch (error) {
        console.error("Error getting user by username db:", error);
        return null;
    }
}