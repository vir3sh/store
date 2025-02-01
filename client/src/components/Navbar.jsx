import React, { useContext, useState } from "react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { ImCross } from "react-icons/im";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { MdKeyboardBackspace } from "react-icons/md";
import { ShopContext } from "../context/ShopContext";

// import { useNavigate } from "react-router-dom";

function Navbar() {
  const products = useContext(ShopContext);
  const [Visible, setVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for controlling dropdown visibility

  // const navigate = useNavigate();

  // const takeToCart = async () => {
  //   navigate("/account");
  //   setSection("cart");
  // };

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
          {/* <img src={logo} className="h-14" alt="" /> */}
          <h1 className="text-4xl ">LOGO</h1>
        </Link>
      </div>

      <div className="hidden sm:flex flex-row list-none gap-3 ">
        <Link className=" text-xl" to={"/"}>
          Home
        </Link>
        <Link className=" text-xl" to={"/collection"}>
          Collection
        </Link>
        <Link className=" text-xl" to={"/about"}>
          About
        </Link>
        <Link className=" text-xl" to={"/contact"}>
          Contact
        </Link>
      </div>

      <div className="right">
        <ul className="flex flex-row gap-4 items-center">
          <li>
            <FaSearch className="text-xl self-center" />
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
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-32"
                    onClick={closeDropdown} // Close dropdown on click
                  >
                    My Account
                  </Link>
                  {/* <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={closeDropdown} // Close dropdown on click
                  >
                    Logout
                  </li> */}
                </ul>
              </div>
            )}
          </li>
          <li>
            <BiMenuAltRight
              className="text-2xl self-center sm:hidden"
              onClick={() => setVisible(true)}
            />
          </li>
        </ul>
      </div>

      <div
        className={`absolute top-0 overflow-hidden bg-white transition-all h-full right-0 ${
          Visible ? "w-full" : "w-0"
        } `}
      >
        <div className="list items">
          <div
            className="flex flex-row gap-2 text-xl items-center"
            onClick={() => setVisible(false)}
          >
            <MdKeyboardBackspace />
            <p>Back</p>
          </div>
          <div className="li my-4 flex  flex-col">
            <Link
              to={"/"}
              onClick={() => setVisible(false)}
              className="list-none p-3 border-black border "
            >
              Home
            </Link>
            <Link
              to={"/collection"}
              onClick={() => setVisible(false)}
              className="list-none p-3 border-black border"
            >
              Collection
            </Link>
            <Link
              to={"/about"}
              onClick={() => setVisible(false)}
              className="list-none p-3 border-black border"
            >
              About
            </Link>
            <Link
              to={"/contact"}
              onClick={() => setVisible(false)}
              className="list-none p-3 border-black border"
            >
              {" "}
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
