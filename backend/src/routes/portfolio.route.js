import express from "express";
import templateRouter from "./template.route.js";
import aiRouter from "./ai.route.js";

const portfolioRouter = express.Router();

portfolioRouter.use("/templates", templateRouter);

portfolioRouter.use("/ai", aiRouter);

export default portfolioRouter;
