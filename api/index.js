import express from "express";
import userRoutes from "./routes/userRoutes.js";
import myDB from "./config/myDB.js";

const app = express();

myDB();
app.get("/", (req, res) => {
  console.log("API is working");
  res.send("API is working");
});
app.use(express.json());
app.use("/api/user", userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("api working");
});
