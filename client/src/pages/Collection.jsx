import { useContext, useState, useEffect } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import SingleProduct from "../components/SingleProduct";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [sortOption, setSortOption] = useState("1"); // Default is "Sort By Relevance"

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products);
    }
  }, [products]);

  const handleCategoryChange = (category) => {
    setCategoryFilter(
      (prev) =>
        prev.includes(category)
          ? prev.filter((item) => item !== category) // Remove category if already selected
          : [...prev, category] // Add category if not selected
    );
  };

  const filterAndSortProducts = () => {
    let filteredProducts = products;

    // Filter by category
    if (categoryFilter.length > 0) {
      filteredProducts = products.filter((product) =>
        categoryFilter.includes(product.category)
      );
    }

    // Sort by selected option
    if (sortOption === "2") {
      // High to Low
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "3") {
      // Low to High
      filteredProducts.sort((a, b) => a.price - b.price);
    }

    setLatestProducts(filteredProducts);
  };

  useEffect(() => {
    filterAndSortProducts();
  }, [categoryFilter, sortOption]);

  return (
    <div>
      <Title text1={"Collection"} text2={""} />

      <div className="flex flex-col lg:flex-row w-full items-start gap-8 p-6">
        {/* Filter Section */}
        <div className="w-full lg:w-1/5  rounded  ">
          <p
            className="text-2xl font-semibold mb-4 sm:block   cursor-pointer"
            onClick={() => setVisible(!visible)}
          >
            Filters
          </p>
          <div
            className={`${
              visible ? "block" : "hidden"
            } sm:block transition-all duration-300 border p-5 rounded border-black ease-in-out`}
          >
            <div className="space-y-2">
              {[
                "Mobile",
                "Laptop",
                "Monitor",
                "HeadPhones",
                "Keyboard",
                "Mouse",
              ].map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    className="w-4 h-4"
                    type="checkbox"
                    value={category}
                    onChange={() => handleCategoryChange(category)}
                  />
                  <span className="text-base">{category}</span>
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
              <option value="2">Sort By Low to High</option>
              <option value="3">Sort By High to Low</option>
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
