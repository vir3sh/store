import React, { useState } from "react";
import profileimg from "../assets/profileicon.png";
function Account() {
  const [section, setSection] = useState("");

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
      <div className="w-2/5">
        <ul className="p-4 space-y-2">
          <li
            className="p-4 border-2 border-black rounded-lg cursor-pointer transition-all
                 hover:bg-black hover:text-white
                 active:transform active:scale-98
                 font-medium tracking-wide"
            onClick={() => setSection("profile")}
          >
            My Profile
          </li>
          <li
            className="p-4 border-2 border-black rounded-lg cursor-pointer transition-all
                 hover:bg-black hover:text-white
                 active:transform active:scale-98
                 font-medium tracking-wide"
            onClick={() => setSection("cart")}
          >
            My Cart
          </li>
          <li
            className="p-4 border-2 border-black rounded-lg cursor-pointer transition-all
                 hover:bg-black hover:text-white
                 active:transform active:scale-98
                 font-medium tracking-wide"
            onClick={() => setSection("wishlist")}
          >
            My Wishlist
          </li>
          <li
            className="p-4 border-2 border-black rounded-lg cursor-pointer transition-all
                 hover:bg-black hover:text-white
                 active:transform active:scale-98
                 font-medium tracking-wide"
            onClick={() => setSection("account")}
          >
            Account Setting
          </li>
        </ul>
      </div>

      <div className="w-2/5 ">
        <ul className="p-3 m-3 ">
          {section === "profile" && (
            <div className="profiles-section flex flex-col items-center p-8 bg-white border-2 border-black rounded-lg h-[600px]">
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
            <div className="mywishlist-section p-6 bg-white shadow-lg rounded-md border border-gray-200 h-[600px] flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                My Wishlist
              </h2>

              <div className="wishlist-items flex-1 overflow-y-auto mb-4 pr-2">
                <div className="space-y-4">
                  {wishlistItems.length > 0 ? (
                    wishlistItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center border border-gray-200 rounded-md p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center flex-1">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-md mr-4"
                          />
                          <div className="flex-1">
                            <h3 className="text-md font-medium text-gray-800">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              ₹{item.price}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <button className="bg-black text-white px-4 py-2 text-sm rounded-md hover:bg-neutral-900 transition-colors">
                            Add to Cart
                          </button>
                          <button className="text-black hover:text-red-600 p-2">
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
                    <div className="text-center py-8">
                      <p className="text-gray-600 text-sm mb-2">
                        Your wishlist is empty!
                      </p>
                      <button className="text-blue-500 hover:text-blue-600 text-sm">
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

              {/* <div className="mb-8 p-4 border border-gray-200 rounded-md">
                <h3 className="text-md font-medium text-gray-700 mb-3">
                  Reset Password
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                    Update Password
                  </button>
                </div>
              </div> */}

              {/* Delete Account Section */}
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
