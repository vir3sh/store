import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="bg-black p-4 text-[18px] ">
      <div className="flex justify-between    text-white ">
        <div className="left">Logo</div>
        <div className="right hidden sm:block ">
          <ul className="flex gap-4">
            <Link to={"/home"}>Home</Link>

            <Link to={"/collection"}>collection</Link>
            <Link to={"/about"}>about us</Link>
            <Link to={"/contact"}>contact</Link>
          </ul>
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
              Home
            </Link>
            <Link
              to={"/collection"}
              className="p-2 border-b border-white"
              onClick={() => setVisible(false)}
            >
              collection
            </Link>
            <Link
              to={"/about"}
              className="p-2 border-b border-white"
              onClick={() => setVisible(false)}
            >
              about us
            </Link>
            <Link
              to={"/contact"}
              className="p-2 border-b border-white"
              onClick={() => setVisible(false)}
            >
              contact
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
