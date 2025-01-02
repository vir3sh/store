import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

function SingleProduct({ id, title, price, image }) {
  const { currency } = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`}>
      <div className="overflow-hidden ]">
        <img
          className="   hover:scale-105 transition ease-in-out h-[401px] rounded-2xl  hover:rounded-2xl"
          src={image}
          alt={title}
        />
        <p className="pt-3 pb-1 text-sm text-center">{title}</p>
        <p className="text-center">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
}

export default SingleProduct;
