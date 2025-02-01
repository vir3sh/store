import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/product/list"
        );
        setProducts(response.data.product);
      } catch (error) {
        console.error(error);
        alert("Error fetching products");
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-white text-black p-6">
      <h2 className="text-3xl font-semibold mb-6">Product List</h2>
      <Link
        to="/add-product"
        className="inline-block bg-black text-white px-6 py-2 rounded-lg mb-4 hover:bg-gray-800 transition"
      >
        Add New Product
      </Link>
      <ul className="space-y-6">
        {products.map((product) => (
          <li
            key={product._id}
            className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition flex justify-between items-center"
          >
            {/* Product Info on Left */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-gray-800 mt-2">Price: ${product.price}</p>
              <p className="text-gray-600">Category: {product.category}</p>
              <div className="mt-4 flex space-x-4">
                <Link
                  to={`/product/${product._id}`}
                  className="text-black hover:text-gray-700 font-medium"
                >
                  View Details
                </Link>
                <Link
                  to={`/delete-product/${product._id}`}
                  className="text-red-600 hover:text-red-800 font-medium"
                >
                  Delete
                </Link>
              </div>
            </div>

            {/* Product Image on Right */}
            <div className="ml-6">
              {product.images && product.images.length > 0 ? (
                <img
                  src={product.images[0]} // Show only the first image
                  alt="Product Image"
                  className="w-32 h-32 object-cover rounded-lg"
                />
              ) : (
                <span className="text-gray-500">No image available</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListProducts;
