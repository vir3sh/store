import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    sizes: "",
    bestseller: "false",
    images: "", // For image URLs
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/product/add",
        product,
        { withCredentials: true }
      );
      alert(response.data.message);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Error while adding the product");
    }
  };

  return (
    <div className="bg-white text-black p-6 max-w-lg mx-auto rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg font-medium">Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium">Description:</label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium">Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium">Category:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium">
            Sizes (comma separated):
          </label>
          <input
            type="text"
            name="sizes"
            value={product.sizes}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium">Bestseller:</label>
          <select
            name="bestseller"
            value={product.bestseller}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium">
            Image URLs (comma separated):
          </label>
          <input
            type="text"
            name="images"
            value={product.images}
            onChange={handleChange}
            placeholder="Enter image URLs, separated by commas"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
