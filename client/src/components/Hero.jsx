import mainimage from "../assets/mainpage.jpg";

const Hero = () => {
  return (
    <div className=" py-8 max-w-[1250px] mx-auto">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-around mx-auto max-w-7xl p-4">
        {/* Text Section */}
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
