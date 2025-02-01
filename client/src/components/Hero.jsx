<<<<<<< HEAD
import mainpageboy from "../assets/forceimage.jpg";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
function Hero() {
=======
import mainimage from "../assets/mainpage.jpg";

const Hero = () => {
>>>>>>> 1f426a5552738d0fc7b9faf83ecf3506b2fd737a
  return (
    <div className=" py-8 max-w-[1250px] mx-auto">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-around mx-auto max-w-7xl p-4">
        {/* Text Section */}
<<<<<<< HEAD
        <div className="main w-full sm:w-1/2 lg:w-1/2 p-4">
          <h3 className="text-4xl font-semibold mb-2">Nike Air Force 1 '07</h3>
          <h3 className="text-2xl text-gray-600 mb-2">Nike</h3>
          <h3 className="font-light text-lg mb-4">Men's Shoes</h3>
          <h3 className="text-5xl text-black font-bold mb-4">₹ 7495</h3>
          {/* You can add more content like a button here */}
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-neutral-900 transition-all">
            Add to Cart
=======
        <div className="text-center sm:text-left sm:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
            Realme 6
          </h1>
          <p className="text-lg sm:text-xl font-medium text-gray-600 mt-3">
            Mobile for day-to-day activity at a reasonable price.
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3">
            $120
          </p>
          <button className="mt-6 rounded-2xl px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition">
            Check Now
>>>>>>> 1f426a5552738d0fc7b9faf83ecf3506b2fd737a
          </button>
        </div>

        {/* Image Section */}
        <div className="sm:w-1/2 flex justify-center">
          <img
            src="https://images.jdmagicbox.com/quickquotes/images_main/realme-6-pro-181814040-f7sjk8dm.jpg"
            alt="Realme 6"
            className="rounded-2xl w-full max-w-md sm:max-w-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
