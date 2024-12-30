import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    address: { type: String, require: false },
    resetotp: { type: String, default: "" },
    resetotpExpiresAt: { type: Number, default: 0 },
    cartData: { type: Object, default: {} },
    wishlist: { type: Object, default: {} },
  },
  { minimize: false }
);

const User = mongoose.model("User", userSchema);
export default User;
