import Product from "../models/Product.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import "dotenv/config";

export const addProduct = async (req, res) => {
  const {
    name,
    description,
    price,
    image,
    category,
    subCategory,
    sizes,
    bestseller,
    date,
  } = req.body;
  if (
    !name ||
    !description ||
    !price ||
    !image ||
    !category ||
    !subCategory ||
    !sizes ||
    !bestseller ||
    !date
  )
    try {
      
    } catch (error) {
      console.log(error);
    }
};
