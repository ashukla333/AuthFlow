import express from "express";
import mongoose, { model } from "mongoose";

const dbUser = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true ,unique:true},
  password: { type: String,select: false },
  createdAT: {
    type: Date,
    default: Date.now
}
});

export default user=mongoose.model('user',dbUser)
