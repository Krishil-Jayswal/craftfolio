import express from "express";
import V1Router from "./routes/index.route";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.use("/api/v1", V1Router);

app.listen(8080, (err) => {

});
