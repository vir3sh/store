import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mx-10 my-10 text-center border-t pt-7 items-center">
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold">Subscribe to NewsLetter</h2>
        <form onSubmit={formSubmit} className="flex flex-col items-center">
          <h2>Enter Your Email</h2>
          <input
            className="p-3 rounded-md bg-slate-100 w-[290px] text-center "
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button className="p-3 rounded-md bg-black mt-4 w-[150px] text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
