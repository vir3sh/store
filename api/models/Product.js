import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: { type: [Array], required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    bestseller: { type: Boolean },
    date: { type: Number, required: true },
  },
  { minimize: false }
);

const productModel =
  mongoose.model.product || mongoose.model("Product", productSchema);
export default productModel;
