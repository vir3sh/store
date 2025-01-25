import { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import SingleProduct from "./SingleProduct";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestproduct, setBestproduct] = useState([]);

  useEffect(() => {
    setBestproduct(products.filter((item) => item.bestseller));
  }, []);
  return (
    <div className="mx-auto max-w-[1250px] my-6">
      <Title text1={"BestSeller"} text2={"Products"} />
      <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestproduct.map((item, index) => (
          <SingleProduct
            key={index}
            id={item.id}
            category={item.category}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
