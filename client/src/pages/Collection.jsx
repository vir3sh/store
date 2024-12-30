import React from "react";
import ProductPanel from "../components/ProductPanel";
import { CiSearch } from "react-icons/ci";

function Collection() {
  return (
    <div>
      {/* Heading */}
      <div className="heading">
        <h3 className="text-4xl text-center mt-5 font-semibold">Collection </h3>
        <p className="text-2xl text-center font-light ">
          Choose form different options
        </p>
      </div>

      {/* <ProductPanel /> */}
      <div className="section1">
        <div className="filter"></div>
        <div className="searchandproduct">
          <div className="search">
            <input type="search" placeholder="Search" />
            <img src={<CiSearch />} alt="" />
          </div>
          <div className="products">
            <ProductPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
