import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import SingleProduct from "./SingleProduct";
function BestSeller() {
  const { products } = useContext(ShopContext);
  const [BestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);
    setBestSeller(bestProducts.slice(0, 5));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <Title text1={"BestSeller"} text2={"Products"} />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 gap-y-6 ">
        {BestSeller.map((item, index) => (
          <SingleProduct
            key={index}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
