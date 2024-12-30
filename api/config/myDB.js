import mongoose from "mongoose";
import "dotenv/config";
const myDB = async () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("connected sucessfully"))
    .catch((err) => console.log("error connected sucessfully", err));
};

export default myDB;
