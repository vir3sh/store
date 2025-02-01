import "dotenv/config";
import productModel from "../models/Product.js";

//For Adding Product
export const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,

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

//for listing product
export const listProduct = async (req, res) => {
  try {
    const token = req.cookies.token;
    // console.log("token from list", token);
    const product = await productModel.find({});
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "no product found" });
  }
};

//single product
export const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "failed to load single product" });
  }
};

//delete product
export const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const deleteProduct = await productModel.findByIdAndDelete(productId);
    if (!deleteProduct) {
      return res
        .status(404)
        .json({ success: false, error: "product not found" });
    }
    return res.json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error while deleting product" });
  }
};
