import mainpageboy from "../assets/mainpage.jpg";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
function Hero() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center w-full p-4">
        {/* Text Section */}
        <div className="main w-full sm:w-1/2 lg:w-1/2 p-4">
          <h3 className="text-4xl font-semibold mb-2">
            Men Full Sleeve Solid Hooded Sweatshirt
          </h3>
          <h3 className="text-2xl text-gray-600 mb-2">We Perfect</h3>
          <h3 className="font-light text-lg mb-4">Hoodie for Winters</h3>
          <h3 className="text-5xl text-black font-bold mb-4">$499</h3>
          {/* You can add more content like a button here */}
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-neutral-900 transition-all">
            Add to Cart
          </button>
        </div>

        {/* Image Section */}
        <div className="image-section w-full sm:w-1/2 lg:w-1/2">
          <img
            src={mainpageboy}
            alt="Product"
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
