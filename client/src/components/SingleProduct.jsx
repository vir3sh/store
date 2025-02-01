import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const SingleProduct = ({ title, price, id, image, category }) => {
  const { currency } = useContext(ShopContext);

  return (
<<<<<<< HEAD
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
=======
    <Link to={`/product/${id}`} className="group">
      <div className="bg-slate-100 p-4 rounded-md flex flex-col  w-[240px] shadow-md hover:shadow-lg transition m-4">
        <img
          className="rounded-lg h-[200px] w-[200px] mx-auto object-cover border mb-4"
          src={image}
          alt={title}
        />
        <p className="text-lg font-medium truncate w-full">{title}</p>
        <p className="text-sm font-medium text-gray-600 mb-2">{category}</p>
        <p className="text-xl font-semibold text-gray-800 mb-3">
          {currency} {price}
        </p>
        <button className="p-2 rounded-md bg-black text-white w-full group-hover:bg-gray-800 transition">
          Add to Cart
        </button>
>>>>>>> 1f426a5552738d0fc7b9faf83ecf3506b2fd737a
      </div>
    </Link>
  );
};

export default SingleProduct;
