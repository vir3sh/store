import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <nav className=" top-1 z-50">
      <div className="bg-black p-4 text-[18px] max-w-[1250px]  items-center mx-auto rounded-xl my-2 ">
        <div className="flex justify-between text-white ">
          <div className="left">Logo</div>
          <div className="right hidden sm:block ">
            <ul className="flex gap-4">
              <Link to={"/home"}>HOME</Link>

<<<<<<< HEAD
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
=======
              <Link to={"/collection"}>COLLECTION</Link>
              <Link to={"/about"}>ABOUT</Link>
              <Link to={"/contact"}>CONTACT</Link>
            </ul>
>>>>>>> 1f426a5552738d0fc7b9faf83ecf3506b2fd737a
          </div>

          <div onClick={() => setVisible(true)} className="block  sm:hidden">
            <div className="text-xl">=</div>
          </div>

          <div
            className={`absolute ${
              visible ? "block" : "hidden"
            } bg-black w-full ml-[-16px] p-3   `}
          >
            <ul className="   min-h-screen text-white gap-4 flex flex-col ">
              <Link
                to={"/home"}
                className="p-2 border-b border-white"
                onClick={() => setVisible(false)}
              >
                HOME
              </Link>
              <Link
                to={"/collection"}
                className="p-2 border-b border-white"
                onClick={() => setVisible(false)}
              >
                COLLECTION
              </Link>
              <Link
                to={"/about"}
                className="p-2 border-b border-white"
                onClick={() => setVisible(false)}
              >
                ABOUT
              </Link>
              <Link
                to={"/contact"}
                className="p-2 border-b border-white"
                onClick={() => setVisible(false)}
              >
                CONTACT
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
