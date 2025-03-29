import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants.js";

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = {...payload, token};

    next();
  } catch (error) {
    console.error("Error in auth middleware: ", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
