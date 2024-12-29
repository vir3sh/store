import React, { useState } from "react";
import profileimg from "../assets/profileicon.png";
function Account() {
  const [section, setSection] = useState("profile");

  const cartItems = [
    {
      id: 1,
      name: "Wireless Mouse",
      price: 1200,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Bluetooth Keyboard",
      price: 2500,
      quantity: 2,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: 1500,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 1500,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 5,
      name: "Laptop Stand",
      price: 1500,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 6,
      name: "Laptop Stand",
      price: 1500,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
  ];

  const wishlistItems = [
    {
      id: 1,
      name: "Wireless Mouse",
      price: 1200,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Bluetooth Keyboard",
      price: 2500,
      quantity: 2,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: 1500,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 1500,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 5,
      name: "Laptop Stand",
      price: 1500,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 6,
      name: "Laptop Stand",
      price: 1500,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div className="flex justify-center text-center">
      <div className="w-1/5">
        <ul className="p-4 " style={{ marginTop: "8px" }}>
          <li
            className={`p-3 border border-black cursor-pointer transition-all
            ${
              section === "profile"
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            }
            active:transform active:scale-98
            font-medium tracking-wide`}
            onClick={() => setSection("profile")}
          >
            My Profile
          </li>
          <li
            className={`p-3 border border-black  cursor-pointer transition-all
            ${
              section === "cart"
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            }
            active:transform active:scale-98
            font-medium tracking-wide`}
            onClick={() => setSection("cart")}
          >
            My Cart
          </li>
          <li
            className={`p-3 border border-black cursor-pointer transition-all
            ${
              section === "wishlist"
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            }
            active:transform active:scale-98
            font-medium tracking-wide`}
            onClick={() => setSection("wishlist")}
          >
            My Wishlist
          </li>
          <li
            className={`p-3 border border-black  cursor-pointer transition-all
            ${
              section === "account"
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            }
            active:transform active:scale-98
            font-medium tracking-wide`}
            onClick={() => setSection("account")}
          >
            Account Setting
          </li>
        </ul>
      </div>

      <div className="w-4/5 ">
        <ul className="p-3 m-3 ">
          {section === "profile" && (
            <div className="profiles-section flex flex-col items-center p-8 bg-white border border-black rounded-lg h-[600px]">
              {/* Profile Image Section */}
              <div className="relative mb-6">
                <img
                  src={profileimg}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-2 border-black"
                />
                <button className="absolute bottom-0 right-0 p-2 bg-white border-2 border-black rounded-full hover:bg-black hover:text-white transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>
              </div>

              {/* Name Section */}
              <h2 className="text-xl font-bold mb-8 tracking-wide">Name</h2>

              {/* Details Grid */}
              <div className="w-full max-w-md mb-8">
                <div className="grid grid-cols-2 gap-y-6 text-left">
                  <div className="font-semibold tracking-wide">Phone</div>
                  <div className="tracking-wide">+1234567890</div>

                  <div className="font-semibold tracking-wide">Email</div>
                  <div className="tracking-wide">user@example.com</div>

                  <div className="font-semibold tracking-wide">Date Joined</div>
                  <div className="tracking-wide">2024-01-01</div>

                  <div className="font-semibold tracking-wide">Orders</div>
                  <div className="tracking-wide">15</div>

                  <div className="font-semibold tracking-wide">
                    Wishlist Items
                  </div>
                  <div className="tracking-wide">10</div>
                </div>
              </div>

              {/* Edit Button */}
              <button
                className="px-8 py-3 border-2 border-black rounded-lg font-medium tracking-wide
                     transition-all hover:bg-black hover:text-white
                     active:transform active:scale-98"
              >
                Edit Personal Details
              </button>
            </div>
          )}

          {section === "cart" && (
            <div className="mycart-section p-6 bg-white shadow-lg rounded-md border border-black h-[500px] flex flex-col">
              <h2 className="text-lg font-semibold mb-4">My Cart</h2>

              <div className="cart-items flex-1 overflow-y-auto mb-4 pr-2">
                <div className="space-y-4">
                  {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center border-b border-gray-200 pb-4"
                      >
                        <div className="flex items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-md mr-4"
                          />
                          <div>
                            <h3 className="text-md font-medium text-gray-800">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              Price: ₹{item.price}
                            </p>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">
                          Qty: {item.quantity}
                        </div>
                        <div className="text-sm font-semibold text-gray-800">
                          ₹{item.price * item.quantity}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-600">Your cart is empty!</p>
                  )}
                </div>
              </div>

              {cartItems.length > 0 && (
                <div className="total-section flex justify-between items-center border-t border-gray-200 pt-4 mt-auto">
                  <h3 className="text-md font-medium text-gray-800">Total:</h3>
                  <h3 className="text-md font-semibold text-gray-800">
                    ₹
                    {cartItems.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )}
                  </h3>
                  <button className="px-6 py-2 bg-black text-white hover:bg-neutral-900   rounded-lg">
                    Proceed to buy
                  </button>
                </div>
              )}
            </div>
          )}

          {section === "wishlist" && (
            <div className="mywishlist-section p-6 bg-white shadow-lg rounded-md border border-black h-[600px] flex flex-col">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                My Wishlist
              </h2>

              <div className="wishlist-items flex-1 overflow-y-auto mb-4 pr-2">
                <div className="space-y-6">
                  {wishlistItems.length > 0 ? (
                    wishlistItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center border border-gray-200 rounded-md p-6 hover:shadow-lg transition-shadow duration-200 ease-in-out"
                      >
                        <div className="flex items-center flex-1 space-x-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-md"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-medium text-gray-800">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              ₹{item.price}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-neutral-900 transition-colors duration-200 ease-in-out">
                            Add to Cart
                          </button>
                          <button className="text-black hover:text-red-600 p-2 transition-colors duration-200 ease-in-out">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-600 text-sm mb-4">
                        Your wishlist is empty!
                      </p>
                      <button className="text-blue-500 hover:text-blue-600 text-sm font-semibold">
                        Continue Shopping
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {section === "account" && (
            <div className="account-section p-6 bg-white shadow-lg rounded-md border border-black">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">
                Account Settings
              </h2>

              <div className="p-4 border border-red-200 rounded-md bg-red-50">
                <h3 className="text-md font-medium text-gray-700 mb-2">
                  Delete Account
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Warning: This action cannot be undone. All your data will be
                  permanently deleted.
                </p>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Account;
