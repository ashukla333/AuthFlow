import express from "express";
import userRouter from "./routes/user.js";
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";

export const app = express();
configDotenv({
  path: "./data/config.env",
});

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
