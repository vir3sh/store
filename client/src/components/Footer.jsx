import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t p-6">
      <div className="flex flex-col sm:flex-row justify-around items-center max-w-7xl mx-auto">
        {/* Brand Section */}
        <div className="text-center sm:text-left mb-6 sm:mb-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            E-COMMERCE STORE
          </h1>
          <p className="text-gray-600 mt-2">
            Your one-stop shop for all your needs.
          </p>
        </div>

        <p className="text-sm text-black">&copy; Created by Ankit</p>

        {/* Social Links Section */}
        <div className="text-center sm:text-left mb-6 sm:mb-0">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Social Links
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transition"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transition"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transition"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600">+12345 67890</p>
          <p className="text-gray-600">user@email.com</p>
          <p className="text-gray-600">Thane, Mumbai, India</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t mt-6 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} E-COMMERCE STORE. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
