import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import SingleProduct from "./SingleProduct";
import Title from "./Title";

function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 5));
    }
  }, [products]);

  return (
    <div>
      <Title text1={"Latest"} text2={"Collection"} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 gap-y-6 ">
        {latestProducts.map((item) => (
          <SingleProduct
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestCollection;
