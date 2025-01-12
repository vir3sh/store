import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
const Sidebar = () => {
  return (
    <div className="w-[18%]   border-r-2 min-h-screen">
      <div className="flex flex-col gap-5 pt-6  text-[19px]">
        <Button className=" border  border-solid border-[#7b7575]  pr-3">
          <p>Add Items</p>
        </Button>
        <Button className=" border border-solid border-[#7b7575]  pr-3">
          <p>List Items</p>
        </Button>
        <Button className=" border border-solid border-[#7b7575]  pr-3">
          <p>Orders</p>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
