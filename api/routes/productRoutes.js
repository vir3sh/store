import express from "express";
import productModel from "../models/Product.js";
import {
  addProduct,
  deleteProduct,
  listProduct,
  singleProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

router.post("/add", upload.array("images", 5), addProduct);
router.get("/list", listProduct);
router.get(`/single/:productId`, singleProduct);
router.delete("/delete/:productId", deleteProduct);

export default router;
