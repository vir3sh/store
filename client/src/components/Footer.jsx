import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" text-white py-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm mb-4">
          {/* &copy; 2024 Your Company. All rights reserved. */}
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="w-6 h-6 text-blue-600 hover:text-blue-800" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="w-6 h-6 text-blue-400 hover:text-blue-600" />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6 text-pink-600 hover:text-pink-800" />
          </a>
        </div>

        <p className="text-sm text-black">&copy; Created by Ankit</p>
      </div>
    </footer>
  );
}

export default Footer;
