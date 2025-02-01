import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleProduct = () => {
  const { id } = useParams(); // Get the id from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/product/single/${id}`
        );
        setProduct(response.data.product);
      } catch (error) {
        console.error(error);
        alert("Error fetching product details");
      }
    };
    fetchProduct();
  }, [id]); // Re-fetch product when id changes

  if (!product) return <div>Loading...</div>;

  return (
    <div className="bg-white p-6">
      <h2 className="text-3xl font-semibold">{product.name}</h2>
      <div className="mt-4">
        <strong>Name:</strong> {product.name}
      </div>
      <div className="mt-2">
        <strong>Description:</strong> {product.description}
      </div>
      <div className="mt-2">
        <strong>Price:</strong> ${product.price}
      </div>
      <div className="mt-2">
        <strong>Category:</strong> {product.category}
      </div>
      <div className="mt-2">
        <strong>Sizes:</strong>{" "}
        {product.sizes ? product.sizes.join(", ") : "N/A"}
      </div>
      <div className="mt-2">
        <strong>Bestseller:</strong>{" "}
        {product.bestseller === "true" ? "Yes" : "No"}
      </div>
      <div className="mt-2">
        <strong>Images:</strong>
        <div className="flex mt-2 space-x-4">
          {product.images && product.images.length > 0 ? (
            product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product Image ${index + 1}`}
                className="w-32 h-32 object-cover rounded-md border  border-[#776969]"
              />
            ))
          ) : (
            <span>No images available</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
