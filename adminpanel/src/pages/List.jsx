import { useEffect, useState } from "react";
import axios from "axios";

const List = () => {
  const [products, setProducts] = useState([]);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/product/list",
          { withCredentials: true }
        );
        if (response.data.success) {
          setProducts(response.data.product); // Access the nested product array
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Delete product
  const handleDelete = async (productId) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/product/delete/${productId}`,
        { withCredentials: true }
      ); // Ensure this endpoint exists
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Products List</h1>
      <table className="w-[80%]  border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Description</th>
            <th className="border border-gray-300 p-2">Price</th>
            <th className="border border-gray-300 p-2">Category</th>
            <th className="border border-gray-300 p-2">SubCategory</th>
            <th className="border border-gray-300 p-2">Sizes</th>
            <th className="border border-gray-300 p-2">Bestseller</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="border border-gray-300 p-2">{product.name}</td>
              <td className="border border-gray-300 p-2">
                {product.description}
              </td>
              <td className="border border-gray-300 p-2">${product.price}</td>
              <td className="border border-gray-300 p-2">{product.category}</td>
              <td className="border border-gray-300 p-2">
                {product.subCategory}
              </td>
              <td className="border border-gray-300 p-2">
                {product.sizes.join(", ")}
              </td>
              <td className="border border-gray-300 p-2">
                {product.bestseller ? "Yes" : "No"}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-black text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
