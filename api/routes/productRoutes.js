import express from "express";
import productModel from "../models/Product.js";
import { addProduct, test } from "../controllers/productController.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.post("/add", upload.array("images", 5), addProduct);

router.post(
  "/test-upload",
  upload.any(), // Accept any file
  (req, res) => {
    console.log("Files:", req.files);
    res.send("Upload test successful");
  }
);

router.post("/upload", upload.array("images", 2), (req, res) => {
  try {
    // Get the uploaded files from req.files
    const files = req.files;

    // Check if files were uploaded
    if (!files || files.length === 0) {
      return res.status(400).send("No files uploaded.");
    }

    // Respond with the uploaded file details
    res.status(200).json({
      message: "Files uploaded successfully",
      files: files.map((file) => ({
        originalname: file.originalname,
        filename: file.filename,
        path: file.path,
        size: file.size,
      })),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
