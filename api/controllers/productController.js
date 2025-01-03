import Product from "../models/Product.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import "dotenv/config";
import productModel from "../models/Product.js";

export const addProduct = async (req, res) => {
  try {
    // Extract form data
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    // Log uploaded files for debugging
    console.log("Files:", req.files);
    const files = req.files;
    console.log("files uploaded are", files);

    // Check if files are uploaded
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    // Process the files array
    const imagePaths = req.files.map((file) => file.path); // Array of file paths

    console.log(
      "Product details:",
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller
    );
    console.log("Uploaded images:", imagePaths);

    // Prepare product data
    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes), // Assuming sizes is a JSON string
      bestseller: bestseller === "true", // Convert to boolean
      images: imagePaths, // Store image paths in the database
      date: Date.now(),
    };

    // Create and save product
    const product = new productModel(productData);
    await product.save();

    res
      .status(200)
      .json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const test = async (req, res) => {
  res.send("test worked");
};
