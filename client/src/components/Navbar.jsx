import React, { useState } from "react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { ImCross } from "react-icons/im";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Navbar() {
  const [searchText, setSearchText] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for controlling dropdown visibility

  // const navigate = useNavigate();

  // const takeToCart = async () => {
  //   navigate("/account");
  //   setSection("cart");
  // };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClear = () => {
    setSearchText("");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState); // Toggle dropdown visibility
  };

  // Function to close dropdown when clicking on "My Account" or "Logout"
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex justify-between p-2 items-center border-b border-b-black border-solid">
      <div className="left">
        <Link to="/">
          <img src={logo} className="h-14" alt="" />
        </Link>
      </div>

      <div className="flex flex-row items-center">
        <div className="relative flex items-center">
          <input
            type="text"
            className="border border-black rounded-md px-4 py-2 pr-10"
            placeholder="Search..."
            value={searchText}
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
          <li className="relative">
            <MdOutlineAccountCircle
              className="text-xl cursor-pointer"
              onClick={toggleDropdown} // Toggle dropdown on click
            />
            {isDropdownOpen && (
              <div className="absolute bg-white border border-gray-300 rounded-md shadow-lg mt-2 z-10 right-0 min-w-full">
                <ul className="flex flex-col text-black">
                  <Link
                    to="/account"
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-32"
                    onClick={closeDropdown} // Close dropdown on click
                  >
                    My Account
                  </Link>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={closeDropdown} // Close dropdown on click
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
