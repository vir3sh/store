import { shopContext } from "@/context/shopContext";
import axios from "axios";
import { useContext, useState } from "react";

const Add = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    subCategory: "",
    bestseller: false,
  });

  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const { backendUrl } = useContext(shopContext);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Client-side validation
    const { name, description, price, category, subCategory } = formValues;
    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !subCategory ||
      images.length === 0
    ) {
      setError("Please fill all required fields and upload images.");
      return;
    }

    try {
      const formData = new FormData();

      // Append images
      Array.from(images).forEach((image) => {
        formData.append("images", image); // Match backend's `upload.array("images")`
      });

      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log(response.data);
      alert("Product added successfully!");
    } catch (error) {
      console.error(error);
      setError("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={formSubmit} className="flex-col flex">
        <h3 className="text-3xl font-semibold pl-3">Add New Product</h3>

        {error && <p className="text-red-500 m-3">{error}</p>}

        <div className="first-section">
          <input
            className="p-3 border border-black rounded m-3"
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formValues.name}
            onChange={handleInputChange}
            required
          />
          <input
            className="p-3 border border-black rounded m-3"
            type="text"
            name="description"
            placeholder="Enter Description"
            value={formValues.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="second-section">
          <input
            className="p-3 border border-black rounded m-3"
            type="number"
            name="price"
            placeholder="Enter Price"
            value={formValues.price}
            onChange={handleInputChange}
            required
          />
          <input
            className="p-3 border border-black rounded m-3"
            type="text"
            name="category"
            placeholder="Enter Category"
            value={formValues.category}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="third-section">
          <input
            className="p-3 border border-black rounded m-3"
            type="text"
            name="subCategory"
            placeholder="Enter Sub-Category"
            value={formValues.subCategory}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="fourth-section">
          <label className="flex items-center m-3">
            <input
              type="checkbox"
              name="bestseller"
              checked={formValues.bestseller}
              onChange={handleInputChange}
            />
            <span className="ml-2">Mark as Bestseller</span>
          </label>
        </div>

        <div className="fifth-section">
          <input
            className="p-3 border border-black rounded m-3"
            type="file"
            name="images"
            multiple
            onChange={handleFileChange}
            required
          />
        </div>

        <button
          type="submit"
          className="p-3 rounded w-1/3 ml-4 bg-black text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;
