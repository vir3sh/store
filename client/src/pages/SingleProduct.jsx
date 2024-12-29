import { useState } from "react";

function SingleProduct() {
  const product = {
    id: 2,
    name: "Bluetooth Keyboard",
    price: 2500,
    quantity: 2,
    image:
      "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008347417_437Wx649H_202012052125041.jpeg",
    rating: 4.5, // Rating out of 5
    sizes: ["Small", "Medium", "Large"], // Available sizes
    userReviews: [
      {
        username: "JohnDoe123",
        review: "Great keyboard! The Bluetooth connection is seamless.",
        rating: 5,
        date: "2024-12-01",
      },
      {
        username: "Sarah89",
        review:
          "Good value for money, but the keys could be a bit more responsive.",
        rating: 4,
        date: "2024-12-05",
      },
    ], // User reviews
    description:
      "This Bluetooth keyboard offers wireless connectivity with an ergonomic design, perfect for both work and leisure use.",
    brand: "Logitech", // Product brand
    category: "Electronics", // Product category
    subCategory: "Computer Accessories", // Product subcategory
  };

  const [selectedRating, setSelectedRating] = useState(null);

  // Filter reviews based on the selected rating
  const filteredReviews = selectedRating
    ? product.userReviews.filter(
        (review) => Math.floor(review.rating) === selectedRating
      )
    : product.userReviews;

  return (
    <div className="text-black min-h-screen p-6 flex flex-col items-center">
      <div
        style={{ maxWidth: "78rem" }}
        className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row"
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Product Info Section */}
        <div className="w-full md:w-1/2 p-6 flex flex-col">
          <div className="mb-6">
            <div className="bg-black text-white px-3 py-1 text-sm rounded-lg inline-block mb-4">
              {product.category}
            </div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-sm text-gray-600 mb-2">Brand: {product.brand}</p>
            <p className="text-lg text-gray-800 mb-4">{product.description}</p>
            <p className="text-xl font-semibold mb-4">₹{product.price}</p>
            <p className="text-sm text-gray-600 mb-4">
              Rating: {product.rating} ★
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-4">
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-all">
              Add to Cart
            </button>
            <button className="bg-white text-black border border-black px-6 py-2 rounded-lg hover:transition-all">
              Buy Now
            </button>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-lg font-bold mb-2">Available Sizes:</h3>
            <div className="flex gap-2">
              {product.sizes.map((size, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-black px-3 py-1 rounded-lg text-sm"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* User Reviews Section */}
      <div className="mt-8 bg-white rounded-lg p-6 w-full">
        {/* <h2 className="text-2xl font-bold mb-4">User Reviews</h2> */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side: User Reviews */}
          <div className="w-full md:w-2/3 pr-4 border-r border-gray-200">
            <h3 className="text-xl font-bold mb-4">User Reviews</h3>
            {filteredReviews.length > 0 ? (
              filteredReviews.map((review, index) => (
                <div
                  key={index}
                  className="mb-6 p-4 rounded-lg border border-gray-200 flex items-center justify-between"
                >
                  {/* Review Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-bold">{review.username}</h3>
                      <span className="text-sm text-gray-600">
                        {review.date}
                      </span>
                    </div>
                    <p className="text-gray-700">{review.review}</p>
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center ml-6">
                    {Array.from({ length: 5 }, (_, starIndex) => (
                      <svg
                        key={starIndex}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 ${
                          starIndex < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.431 8.2 1.193-5.93 5.782 1.399 8.162L12 18.897l-7.337 3.858 1.399-8.162L.132 9.211l8.2-1.193L12 .587z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">
                No reviews available for this rating.
              </p>
            )}
          </div>

          {/* Right Side: Overall Ratings */}
          <div className="w-full md:w-1/3 pl-4 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Overall Ratings</h3>
            <div className="flex flex-col items-center gap-4">
              {Array.from({ length: 5 }, (_, starIndex) => (
                <div
                  key={starIndex + 1}
                  className="flex items-center cursor-pointer"
                  onClick={() => setSelectedRating(5 - starIndex)}
                >
                  {/* Render stars */}
                  <div className="flex items-center mr-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 ${
                          i < 5 - starIndex
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.431 8.2 1.193-5.93 5.782 1.399 8.162L12 18.897l-7.337 3.858 1.399-8.162L.132 9.211l8.2-1.193L12 .587z" />
                      </svg>
                    ))}
                  </div>
                  {/* Show the number of stars */}
                  <span className="text-lg font-medium text-gray-700">
                    {5 - starIndex} Stars
                  </span>
                </div>
              ))}
            </div>
            <button
              className="mt-6 text-blue-500 hover:underline"
              onClick={() => setSelectedRating(null)}
            >
              Show All Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
