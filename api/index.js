import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("API is working");
  res.send("API is working");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("api working");
});