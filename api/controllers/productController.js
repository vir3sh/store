import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import "dotenv/config";
import productModel from "../models/Product.js";
export const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    // Check if files are uploaded
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    // Extract file paths
    const imagePaths = req.files.map((file) => file.path);

    console.log("Uploaded images:", imagePaths);

    // Prepare product data
    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes), // Convert sizes string to array
      bestseller: bestseller === "true", // Convert to boolean
      images: imagePaths, // Store image paths in the database
      date: Date.now(),
    };

    // Save to database
    const product = new productModel(productData);
    await product.save();

    res
      .status(200)
      .json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
