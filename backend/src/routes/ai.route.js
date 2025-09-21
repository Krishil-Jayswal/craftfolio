import express from "express";
import {
  generatePortfolio,
  updatePortfolio,
} from "../controllers/portfolio.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const aiRouter = express.Router();

aiRouter.post("/generate", generatePortfolio);

aiRouter.post("/update", updatePortfolio);

export default aiRouter;
