import express from "express";
import { createPortfolio, getTemplateById, getTemplates, } from "../controllers/portfolio.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const templateRouter = express.Router();

templateRouter.get("/bulk", getTemplates);

templateRouter.get("/:templateId", getTemplateById);

templateRouter.post("/create", authMiddleware, createPortfolio);

export default templateRouter;
