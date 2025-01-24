import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const SingleProduct = ({ title, price, id, image, category }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`}>
      <div className="bg-slate-100 p-5 rounded-md  overflow-auto">
        <img
          className=" rounded-lg h-[200px] w-[210px] border "
          src={image}
          alt={title}
        />
        <p className="text-xl font-medium  ">{title}</p>
        <p className="text-xs font-medium">{category}</p>
        <p className="text-2xl font-normal">
          {currency} {price}
        </p>
        <button className="p-2 rounded-xl bg-black text-white">
          Add to cart
        </button>
      </div>
    </Link>
  );
};

export default SingleProduct;
