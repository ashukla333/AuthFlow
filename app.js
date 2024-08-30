import express from "express";
import userRouter from "./routes/user.js";
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
export const app = express();
configDotenv({
  path: "./data/config.env",
});

app.use(
  cors({
    origin: ["https://kigsvillah.vercel.app", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/v1", userRouter);

app.get("/", (req, res) => {
  try {
    res.send("welcome");
  } catch (error) {
    console.log(error);
  }
});
