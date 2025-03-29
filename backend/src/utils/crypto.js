import bcrypt from "bcryptjs"

export const createHash = (text) => {
    const salt = bcrypt.genSalt(10);
    const hash = bcrypt.hashSync(text, salt);
    return hash;
}

export const compareHash = (original, hashed) => {
    return bcrypt.compareSync(original, hashed);
}
