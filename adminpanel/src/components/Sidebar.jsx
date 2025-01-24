import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
const Sidebar = () => {
  return (
    <div className="w-[18%]   border-none sm:border-r-2  sm:min-h-screen ">
      <div className="flex flex-row sm:flex-col gap-5 pt-6  text-[19px]">
        <NavLink
          to={"/add"}
          className=" border  border-solid border-[#7b7575]  pr-3"
        >
          <p>Add Items</p>
        </NavLink>
        <NavLink
          to={"/list"}
          className=" border border-solid border-[#7b7575]  pr-3"
        >
          <p>List Items</p>
        </NavLink>
        <NavLink
          to={"/order"}
          className=" border border-solid border-[#7b7575]  pr-3"
        >
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
