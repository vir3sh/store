import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
const SingleProduct = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [visibleReviews, setVisibleReviews] = useState(2);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = products.find(
          (item) => item.id === parseInt(productId)
        );
        if (product) {
          setProductData(product);
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

  const handleSeeMore = () => {
    setVisibleReviews((prev) =>
      prev + 2 > productData.userReviews.length
        ? productData.userReviews.length
        : prev + 2
    );
  };

  const recommendedProducts = products.filter(
    (item) =>
      item.category === productData.category && item.id !== productData.id
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={
              Array.isArray(productData.image)
                ? productData.image[0]
                : productData.image
            }
            alt={productData.title}
            className="w-full h-5/6 max-w-lg rounded-lg shadow-md object-cover"
          />
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

      {/* Additional Info Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Product Details
        </h2>
        <div className="border-t border-gray-300 pt-4">
          <p className="text-gray-700">
            <span className="font-semibold">Category:</span>{" "}
            {productData.category}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Sub-Category:</span>{" "}
            {productData.subCategory}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Brand:</span> {productData.brand}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Stock Status:</span> In Stock
          </p>
        </div>
      </div>

      {/* User Comments Section */}
      <div className="mt-12">
        <h2 className="text-2xl  font-semibold text-gray-800 mb-4">
          Customer Reviews
        </h2>
        <div className="add mb-9 flex justify-between">
          <input
            type="text"
            placeholder="Add comment"
            className="border border-black rounded-full p-3 w-[90%]"
          />
          <button
            className="rounded-full bg-black text-white hover:outline hover:outline-black hover:outline-[1px] hover:bg-white  hover:text-black p-[15px]  px-5"
            type="submit"
          >
            Submit
          </button>
        </div>

        {productData.userReviews && productData.userReviews.length > 0 ? (
          <div className="space-y-6">
            {productData.userReviews
              .slice(0, visibleReviews)
              .map((review, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow-md"
                >
                  <div className="flex bg-gray-100 items-center mb-2">
                    <span className="text-xl bg-gray-100 font-semibold">
                      {review.username}
                    </span>
                    <span className="ml-4 text-sm bg-gray-100 text-gray-500">
                      {review.date}
                    </span>
                    <span className="text-yellow-500 bg-gray-100 pl-2 text-lg">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </span>
                  </div>
                  <p className="text-gray-700 bg-gray-100">{review.review}</p>
                </div>
              ))}
            {visibleReviews < productData.userReviews.length && (
              <button
                onClick={handleSeeMore}
                className="bg-black hover:bg-neutral-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md mt-4"
              >
                See More
              </button>
            )}
          </div>
        ) : (
          <p className="text-gray-500">
            No reviews yet. Be the first to review!
          </p>
        )}
      </div>

      {/* Recommended section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Recommended Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recommendedProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800 bg-white">
                {item.title}
              </h3>
              <p className="text-gray-500 bg-white">
                {currency}
                {item.price}
              </p>
              {/* Link to the product detail page */}
              <Link
                to={`/product/${item.id}`}
                className="bg-black hover:bg-neutral-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md mt-4"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
