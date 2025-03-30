import express from "express";
import { getTemplateById, getTemplates } from "../controllers/portfolio.controller.js";

const templateRouter = express.Router();

templateRouter.get("/bulk", getTemplates);

templateRouter.get("/:templateId", getTemplateById);

export default templateRouter;
