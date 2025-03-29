import { createHash, compareHash } from "../utils/crypto.js";
import User from "../models/User.model.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET, maxAge } from "../config/constants.js";

// Register Controller
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Verify that all fields are provided
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide username, email, and password." });
    }

    // Check if a user with the provided email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered." });
    }
    console.log(email, name, password)
    // Create hash of the password using the provided utility function
    const hashedPassword = createHash(password);

    // Create and save the new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    // Creating the token
    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      JWT_SECRET,
      { expiresIn: maxAge }
    );

    // Return the new user
    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        token
      },
    });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Login Controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Verify that all fields are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide email and password" });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare the provided password with the stored hash
    const isMatch = compareHash(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Creating the token and setting the cookies
    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      JWT_SECRET,
      { expiresIn: maxAge }
    );

    // Return the user
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        token
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Logout Controller
export const logout = (req, res) => {
  return res.status(200).json({ message: "Logout successful." });
};

// Me Controller (protected route)
export const me = (req, res) => {
  const user = req.user;
  return res.status(200).json({ user: {
    id: user.id,
    name: user.name,
    email: user.email,
    token: user.token
  } });
};
