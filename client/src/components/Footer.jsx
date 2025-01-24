import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-evenly mx-5 my-5 border-t  p-6  flex-col sm:flex-row ">
      <div className="w-2/6 text-center ">
        <p className="text-xl w-[220px] sm:text-3xl font-semibold">
          {" "}
          E-COMMERCE STORE
        </p>
        {/* <p>
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
          Cumque.
        </p> */}
      </div>
      <div className="w-2/6 text-start ">
        <p className="text-xl w-[250px] font-semibold">SOCIAL LINKS</p>
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className="w-2/6 text-start">
        <p className="text-xl w-64 font-semibold ">CONTACT US</p>
        <p className="w-[250px]">+ 12345 67890</p>
        <p>user@email.com</p>
        <p>THANE,MUMBAI,INDIA</p>
      </div>
    </div>
  );
};

export default Footer;
