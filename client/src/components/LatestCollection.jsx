import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import SingleProduct from "./SingleProduct";
import Title from "./Title";

function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 8));
    }
  }, [products]);

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <Title text1={"Latest"} text2={"Collection"} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {latestProducts.map((item) => (
          <SingleProduct
            key={item.id}
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

export default LatestCollection;
