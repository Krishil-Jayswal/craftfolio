import dotenv from "dotenv";

dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET || "JWT_SECRET";

export const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/portfolio-builder";

export const PORT = process.env.PORT || "3000";

export const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

export const maxAge = process.env.maxAge || 604800000;

export const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;

export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;

export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
