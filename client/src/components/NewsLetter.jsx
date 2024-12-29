import React, { useState } from "react";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Simulating a subscription API call
    setTimeout(() => {
      setMessage("Thank you for subscribing!");
      setEmail(""); // Clear the input field
    }, 1000);
  };

  return (
    <div className="border-t border-b border-black my-5">
      <div className="p-6 rounded-lg max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-bold  mb-4 text-center">
          Subscribe to Our Newsletter
        </h2>
        <p className=" text-center mb-6">
          Stay updated with the latest news and special offers!
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
          />
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded-lg hover:bg-neutral-900 transition-all"
          >
            Subscribe
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center ${
              message.includes("Thank you") ? "text-black" : "text-black"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default NewsLetter;
