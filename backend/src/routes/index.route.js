import express from "express";
import authRouter from "./auth.route.js";
import portfolioRouter from "./portfolio.route.js";

const V1Router = express.Router();

V1Router.use("/auth", authRouter);

V1Router.use("/portfolio", portfolioRouter);

export default V1Router;
