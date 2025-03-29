import express from "express";
import {
  generatePortfolio,
  getTemplateById,
  getTemplates,
  updatePortfolio,
} from "../controllers/portfolio.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const portfolioRouter = express.Router();

portfolioRouter.get("/templates", authMiddleware, getTemplates);

portfolioRouter.post("/generate", authMiddleware, generatePortfolio);

portfolioRouter.get("/:id", authMiddleware, getTemplateById);

portfolioRouter.put("/id", authMiddleware, updatePortfolio);

export default portfolioRouter;
