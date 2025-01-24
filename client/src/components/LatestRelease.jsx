import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import SingleProduct from "./SingleProduct";

const LatestRelease = () => {
  const { products } = useContext(ShopContext);
  const [latestproduct, setLatestproduct] = useState([]);
  useEffect(() => {
    setLatestproduct(products.slice(0, 10));
  }, []);

  console.log(products);
  return (
    <div className=" my-6 w-[1250px] mx-auto">
      <Title text1={"Latest"} text2={"Release"} />
      <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
        {latestproduct.map((item, index) => (
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

export default LatestRelease;
