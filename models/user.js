
import mongoose, { model } from "mongoose";

const dbUser = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String,  required: true, unique: true},
  password: { type: String, select: false },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const user = mongoose.model("user", dbUser);
