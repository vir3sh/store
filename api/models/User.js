import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  address: { type: String, require: true },
  resetotp: { type: String, default: "" },
  resetotpExpiresAt: { type: Number, default: 0 },
});
