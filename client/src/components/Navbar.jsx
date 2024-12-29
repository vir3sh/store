import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart, FaSearch } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { ImCross } from "react-icons/im";
import logo from "../assets/logo.png";
function Navbar() {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClear = () => {
    setSearchText("");
  };

  return (
    <div className="flex justify-between p-2  items-center border-b border-b-black border-solid">
      <div className="left">
        <img src={logo} className="h-16" alt="" />
      </div>

      <div className="flex flex-row items-center">
        <div className="relative flex items-center">
          <input
            type="text"
            className="border-2 border-black rounded-md px-4 py-2 pr-10"
            placeholder="Search..."
            value={searchText}
            // onKeyPress={handleKeyPress}
            onChange={handleInputChange}
          />
          {searchText ? (
            <ImCross
              className="absolute right-3 text-sm text-gray-500 cursor-pointer"
              onClick={handleClear}
            />
          ) : (
            <FaSearch className="absolute right-3 text-xl text-gray-500 cursor-pointer" />
          )}
        </div>
      </div>

      <div className="right">
        <ul className="flex flex-row gap-4">
          <li>
            <FaHeart className="text-xl self-center" />
          </li>
          <li>
            <FaShoppingCart className="text-xl self-center" />
          </li>
          <li className="relative group">
            <MdOutlineAccountCircle className="text-xl cursor-pointer" />
            <div className="absolute hidden group-hover:block bg-white border border-gray-300 rounded-md shadow-lg mt-2 z-10 right-0 min-w-full">
              <ul className="flex flex-col text-black">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-32">
                  My Account
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
