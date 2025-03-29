import { createHash, compareHash } from '../utils/crypto.js';
import User from '../models/user.js';

// Register Controller
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Verify that all fields are provided
        if (!name || !email || !password) {
          return res.status(400).json({ message: 'Please provide username, email, and password' });
        }
    
        // Check if a user with the provided email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
        }
    
        // Create hash of the password using the provided utility function
        const hashedPassword = createHash(password);
    
        // Create and save the new user
        const newUser = new User({
          username,
          email,
          password: hashedPassword,
        });
    
        await newUser.save();
        
        return res.status(201).json({ 
            message: 'User registered successfully', 
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            }
        });
      } catch (error) {
        console.error('Error during registration:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }    
};

// Login Controller
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Verify that all fields are provided
        if (!email || !password) {
          return res.status(400).json({ message: 'Please provide email and password' });
        }
    
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
    
        // Compare the provided password with the stored hash
        const isMatch = compareHash(password, user.password);
        if (!isMatch) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
    
        return res.status(200).json({
          message: 'Login successful',
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
          }
        });
        } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
};

export const logout = (req, res) => {};

export const me = (req, res) => {};
