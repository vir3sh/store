import "dotenv/config";
import productModel from "../models/Product.js";

//For Adding Product
// export const addProduct = async (req, res) => {
//   try {
//     const { name, description, price, category, sizes, bestseller } = req.body;

//     // Check if files are uploaded
//     if (!req.files || req.files.length === 0) {
//       return res.status(400).json({ error: "No files uploaded" });
//     }

//     // Extract file paths
//     const imagePaths = req.files.map((file) => file.path);

//     console.log("Uploaded images:", imagePaths);

//     // Prepare product data
//     const productData = {
//       name,
//       description,
//       price: Number(price),
//       category,
//       sizes: JSON.parse(sizes), // Convert sizes string to array
//       bestseller: bestseller === "true", // Convert to boolean
//       images: imagePaths, // Store image paths in the database
//       date: Date.now(),
//     };

//     // Save to database
//     const product = new productModel(productData);
//     await product.save();

//     res
//       .status(200)
//       .json({ success: true, message: "Product added successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
export const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, sizes, bestseller, images } =
      req.body;

    // Check if images are provided
    if (!images || images.length === 0) {
      return res.status(400).json({ error: "No image URLs provided" });
    }

    // Convert the images string into an array
    const imageUrls = images.split(",").map((url) => url.trim());

    // Convert the sizes string into an array
    const sizesArray = sizes.split(",").map((size) => size.trim());

    console.log("Image URLs:", imageUrls);
    console.log("Sizes Array:", sizesArray);

    // Prepare product data
    const productData = {
      name,
      description,
      price: Number(price),
      category,
      sizes: sizesArray, // Now this is an array
      bestseller: bestseller === "true", // Convert to boolean
      images: imageUrls, // Store image URLs in the database
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
    const { productId } = req.params; // Access productId from params
    const product = await productModel.findById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to load single product" });
  }
};

// Delete product
export const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params; // Access productId from params
    const deleteProduct = await productModel.findByIdAndDelete(productId);
    if (!deleteProduct) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }
    return res.json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Error while deleting product" });
  }
};
