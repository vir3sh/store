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

router.post("/add", adminAuth, upload.array("images", 5), addProduct);
router.get("/list", adminAuth, listProduct);
router.get("/single", adminAuth, singleProduct);
router.delete("/delete/:productId", adminAuth, deleteProduct);

export default router;
