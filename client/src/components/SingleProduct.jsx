import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const SingleProduct = ({ title, price, id, image, category }) => {
  const { currency } = useContext(ShopContext);

  return (
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
      </div>
    </Link>
  );
};

export default SingleProduct;
