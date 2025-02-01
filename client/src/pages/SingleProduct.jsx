import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = products.find(
          (item) => item.id === parseInt(productId)
        );
        if (product) {
          setProductData(product);
          setSelectedImage(
            Array.isArray(product.image) ? product.image[0] : product.image
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [productId, products]);

  if (!productData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {/* Image Section */}
        <div className="flex gap-4">
          {/* Thumbnail List */}
          <div className="flex flex-col gap-2">
            {Array.isArray(productData.image) &&
              productData.image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className={`w-20 h-20 rounded-md cursor-pointer border ${
                    selectedImage === img ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
          </div>
          {/* Main Image */}
          <div className="flex-grow flex justify-center">
            <img
              src={selectedImage}
              alt={productData.title}
              className="w-full h-96 max-w-lg rounded-lg shadow-md object-cover"
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="product-info flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-black mb-4">
            {productData.title}
          </h1>
          <p className="text-gray-600 mb-4">{productData.description}</p>
          <p className="text-2xl font-bold text-black mb-4">
            {currency}
            {productData.price}
          </p>

          {/* Rating Section */}
          <div className="flex items-center mb-6">
            <span className="text-yellow-500 text-2xl">
              {"★".repeat(Math.floor(productData.rating))}
              {"☆".repeat(5 - Math.floor(productData.rating))}
            </span>
            <span className="text-gray-500 text-sm ml-2">
              ({productData.rating}/5)
            </span>
          </div>

          {/* Buy and Add to Cart Buttons */}
          <div className="flex gap-4">
            <button className="bg-black hover:bg-neutral-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all">
              Buy Now
            </button>
            <button className="bg-black hover:bg-neutral-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Additional Details Section */}
      {/* <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Additional Details</h2>
        <p className="text-gray-700">{productData.additionalDetails}</p>
      </div> */}

      {/* Comments Section */}
      {/* <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <div className="border p-4 rounded-md">
          {productData.comments && productData.comments.length > 0 ? (
            productData.comments.map((comment, index) => (
              <div key={index} className="mb-2 border-b pb-2">
                <p className="font-semibold">{comment.user}</p>
                <p className="text-gray-600">{comment.text}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default SingleProduct;
