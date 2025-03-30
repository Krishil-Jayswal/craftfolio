import express from "express";
import { generatePortfolio } from "../controllers/portfolio.controller.js";

const aiRouter = express.Router();

aiRouter.post("/generate", generatePortfolio);

aiRouter.post("/update", );

export default aiRouter;
