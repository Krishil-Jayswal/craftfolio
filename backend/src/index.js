import express from "express";
import V1Router from "./routes/index.route.js";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { CLIENT_URL, DATABASE_URL, PORT } from "./config/constants.js";

const app = express();

app.use(
  cors({
    origin: CLIENT_URL,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

app.get("/health", (req, res) => {
  return res.json({ message: "Server is running." });
});

app.use("/api/v1", V1Router);

app.listen(PORT, async (error) => {
  if (error) {
    console.error("Error in starting server: ", error);
    process.exit(1);
  }

  await connectDB(DATABASE_URL);
  console.log("Server is running on port ", PORT);
});
