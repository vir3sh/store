import React from "react";
import mainimage from "../assets/mainpage.jpg";
const Hero = () => {
  return (
    <div>
      <div className="flex justify-around my-6 flex-col-reverse sm:flex-row  p-4 ">
        <div className="self-center  ">
          <p className="text-5xl font-semibold pt-3">Realme 6</p>
          <p className="text-xl font-medium pt-3">
            {" "}
            Mobile for day to day actvity <br />
            at resonable price
          </p>
          <p className="text-3xl font-bold pt-3">$120</p>
          <button className="rounded-2xl px-5  py-3 bg-black text-white">
            Check{" "}
          </button>
        </div>
        <div className="self-center">
          <img
            src={mainimage}
            alt="main page image"
            className="rounded-2xl  w-[700px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
