import { useContext, useState, useEffect } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import SingleProduct from "../components/SingleProduct";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [typeFilter, setTypeFilter] = useState([]);
  const [sortOption, setSortOption] = useState("1"); // Default: Sort By Relevance

  useEffect(() => {
    setLatestProducts(products);
  }, [products]);

  const handleTypeChange = (type) => {
    setTypeFilter(
      (prev) =>
        prev.includes(type)
          ? prev.filter((item) => item !== type) // Remove if already selected
          : [...prev, type] // Add if not selected
    );
  };

  useEffect(() => {
    let filteredProducts = products;

    // Filter by type
    if (typeFilter.length > 0) {
      filteredProducts = products.filter((product) =>
        typeFilter.includes(product.type)
      );
    }

    // Sort by selected option
    const sortedProducts = [...filteredProducts]; // Create a new array to avoid mutating state directly
    if (sortOption === "2") {
      sortedProducts.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price) // High to Low
      );
    } else if (sortOption === "3") {
      sortedProducts.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price) // Low to High
      );
    }

    setLatestProducts(sortedProducts);
  }, [typeFilter, sortOption, products]);

  return (
    <div>
      <Title text1={"Collection"} text2={""} />

      <div className="flex flex-col lg:flex-row w-full items-start gap-8 p-6">
        {/* Filter Section */}
        <div className="w-full lg:w-1/5 rounded">
          <p
            className="text-2xl font-semibold mb-4 sm:block cursor-pointer"
            onClick={() => setVisible(!visible)}
          >
            Filters
          </p>
          <div
            className={`${
              visible ? "block" : "hidden"
            } sm:block transition-all duration-300 border p-5 rounded  border-black ease-in-out`}
          >
            <div className="space-y-2">
              {["Running", "Lifestyle", "Classic", "Soccer"].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    className="w-4 h-4"
                    type="checkbox"
                    value={type}
                    checked={typeFilter.includes(type)}
                    onChange={() => handleTypeChange(type)}
                  />
                  <span className="text-base">{type}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="w-full lg:w-4/5">
          <div className="flex flex-col sm:flex-row justify-between mb-4">
            <h2 className="text-2xl font-semibold">Choose from the best</h2>
            <select
              className="border border-black rounded px-3 py-2 text-sm"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="1">Sort By Relevance</option>
              <option value="2">Sort By High to Low</option>
              <option value="3">Sort By Low to High</option>
            </select>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {latestProducts.map((item, index) => (
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
      </div>
    </div>
  );
};

export default Collection;
