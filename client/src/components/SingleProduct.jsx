import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

function SingleProduct({ id, title, price, image, rating }) {
  const { currency } = useContext(ShopContext);

  // Generate stars based on the rating
  const generateStars = (rating) => {
    const fullStars = Math.floor(rating); // Full stars
    const remainingStars = 5 - fullStars; // Remaining empty stars

    return (
      <>
        {"★".repeat(fullStars)} {/* Full stars */}
        {"☆".repeat(remainingStars)} {/* Remaining empty stars */}
      </>
    );
  };

  return (
    <Link to={`/product/${id}`}>
      <div className="product-card group overflow-hidden border border-[#c5b9b9] bg-white shadow-lg rounded-md transform transition hover:scale-105">
        <div className="product-image">
          <img
            className="w-full h-[300px] object-cover rounded"
            src={Array.isArray(image) ? image[0] : image}
            alt={title}
          />
        </div>
        <div className="product-details p-4 flex flex-col justify-between bg-white">
          <p className="product-title text-[16px] font-semibold text-gray-800 bg-white group-hover:text-neutral-700 transition">
            {title}
          </p>
          <p className="product-price text-[14px] text-gray-600 bg-white">
            {currency}
            {price}
          </p>
          <div className="product-rating flex bg-white items-center mt-2">
            <span className="text-yellow-500 text-lg bg-white">
              {generateStars(rating)}
            </span>
            <span className="text-gray-500 bg-white text-sm ml-2">
              ({rating}/5)
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SingleProduct;
