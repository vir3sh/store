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

              <Link to={"/collection"}>COLLECTION</Link>
              <Link to={"/about"}>ABOUT</Link>
              <Link to={"/contact"}>CONTACT</Link>
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
