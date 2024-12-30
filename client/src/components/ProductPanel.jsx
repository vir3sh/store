import { useState } from "react";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
function ProductPanel() {
  const Products = [
    {
      id: 2,
      name: "Bluetooth Keyboard",
      price: 2500,
      quantity: 2,
      image:
        "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008347417_437Wx649H_202012052125041.jpeg",
      rating: 4.5, // Rating out of 5
      sizes: ["Small", "Medium", "Large"], // Available sizes
      userReviews: [
        {
          username: "JohnDoe123",
          review: "Great keyboard! The Bluetooth connection is seamless.",
          rating: 5,
          date: "2024-12-01",
        },
        {
          username: "Sarah89",
          review:
            "Good value for money, but the keys could be a bit more responsive.",
          rating: 4,
          date: "2024-12-05",
        },
      ], // User reviews
      description:
        "This Bluetooth keyboard offers wireless connectivity with an ergonomic design, perfect for both work and leisure use.",
      brand: "Logitech", // Product brand
      category: "Electronics", // Product category
      subCategory: "Computer Accessories", // Product subcategory
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: 1500,
      quantity: 1,
      image:
        "https://alogic.in/cdn/shop/products/media-40523_1_grande.jpg?v=1688017832",
      rating: 4.2, // Rating out of 5
      sizes: ["One Size"], // Available sizes
      userReviews: [
        {
          username: "Mike91",
          review:
            "Perfect for elevating my laptop. It has improved my posture!",
          rating: 5,
          date: "2024-12-10",
        },
        {
          username: "AliceInWonder",
          review: "Solid build but a bit bulky to carry around.",
          rating: 3,
          date: "2024-12-08",
        },
      ], // User reviews
      description:
        "A sturdy laptop stand with adjustable height, helping you achieve the perfect viewing angle for your work or study sessions.",
      brand: "Xtreme", // Product brand
      category: "example", // Product category
      subCategory: "Laptop Accessories", // Product subcategory
    },
    {
      id: 4,
      name: "Wireless Mouse",
      price: 1200,
      quantity: 3,
      image:
        "https://alogic.in/cdn/shop/products/media-40523_1_grande.jpg?v=1688017832",
      rating: 4.8, // Rating out of 5
      sizes: ["One Size"], // Available sizes
      userReviews: [
        {
          username: "GamerX",
          review: "Amazing precision for gaming. Highly recommended!",
          rating: 5,
          date: "2024-12-02",
        },
        {
          username: "Techie_101",
          review: "Works well for everyday use. Comfortable design.",
          rating: 4,
          date: "2024-12-03",
        },
      ], // User reviews
      description:
        "A high-performance wireless mouse with ergonomic design, perfect for both professional and gaming use.",
      brand: "Razer", // Product brand
      category: "cloth", // Product category
      subCategory: "Computer Accessories", // Product subcategory
    },
    {
      id: 5,
      name: "Wireless Headphones",
      price: 5000,
      quantity: 5,
      image:
        "https://alogic.in/cdn/shop/products/media-40523_1_grande.jpg?v=1688017832",
      rating: 4.3, // Rating out of 5
      sizes: ["One Size"], // Available sizes
      userReviews: [
        {
          username: "AudioLover",
          review:
            "Great sound quality, but a bit heavy after long listening sessions.",
          rating: 4,
          date: "2024-12-12",
        },
        {
          username: "MusicFan88",
          review: "The bass is amazing! Excellent headphones for the price.",
          rating: 5,
          date: "2024-12-14",
        },
      ], // User reviews
      description:
        "These wireless headphones offer superior sound quality and noise-cancellation for an immersive listening experience.",
      brand: "Sony", // Product brand
      category: "Electronics", // Product category
      subCategory: "Audio", // Product subcategory
    },
    {
      id: 6,
      name: "Smartphone Charger",
      price: 500,
      quantity: 10,
      image:
        "https://alogic.in/cdn/shop/products/media-40523_1_grande.jpg?v=1688017832",
      rating: 4.0, // Rating out of 5
      sizes: ["One Size"], // Available sizes
      userReviews: [
        {
          username: "TechSavvy123",
          review: "Charges my phone fast, but the cable could be longer.",
          rating: 3,
          date: "2024-12-15",
        },
        {
          username: "AlexTheGadgeteer",
          review: "Works as expected. Good value for the price.",
          rating: 4,
          date: "2024-12-16",
        },
      ], // User reviews
      description:
        "A fast-charging smartphone charger compatible with most devices. Comes with a durable cable for long-term use.",
      brand: "Anker", // Product brand
      category: "Electronics", // Product category
      subCategory: "Mobile Accessories", // Product subcategory
    },
  ];

  const [category, setCategory] = useState("");
  console.log(category);

  const filteredProducts = category
    ? Products.filter((product) => product.category === category)
    : Products;
  return (
    <div>
      <div className="products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-9 ">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="card border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all relative"
          >
            {/* Wishlist Icon (top-left) */}
            <div
              className="absolute    bg-white rounded-full p-2 shadow-md hover:bg-red-100 transition-all"
              style={{ top: "20px", left: "20px" }}
            >
              <FaRegHeart
                size={20} // Adjusted the size
                className="text-red-500 hover:text-red-700 cursor-pointer"
              />
            </div>

            {/* Cart Icon (top-right) */}
            <div
              className="absolute  bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all"
              style={{ top: "20px", right: "20px" }}
            >
              <FaCartPlus
                size={20} // Adjusted the size
                className="text-black hover:text-gray-700 cursor-pointer"
              />
            </div>

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[300px] object-cover rounded-lg mb-4"
              style={{
                position: "relative",
                filter: "brightness(0.9)",
                zIndex: "-1",
              }}
            />
            <p className="text-xs font-semibold">{product.brand}</p>
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p>{product.category}</p>
            <p className="text-lg text-gray-600 mb-2">
              Price: ₹{product.price}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Rating: {product.rating}
            </p>

            {/* "Buy Now" button */}
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-neutral-900 transition-all">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPanel;
