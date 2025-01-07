import bcrypt from 'bcryptjs';

const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

const comparePasswords = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

export { hashPassword, comparePasswords };
