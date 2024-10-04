import React from "react";
import backgroundImage from "../assets/bgimg.jpeg"; // Replace this with your actual image path

const Member = () => {
  return (
    <section
      className="relative h-[400px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Pink Overlay */}
      <div className="absolute inset-0 bg-pink-700 opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center p-8">
        <h3 className="text-white text-lg font-semibold mb-2">Get Involved!</h3>
        <h1 className="text-white text-4xl font-bold mb-8">Become a Member</h1>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-full bg-white text-gray-800 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-full bg-white text-gray-800 focus:outline-none"
          />

          <button
            type="submit"
            className="w-[300px] bg-[#FFFA12] text-gray-800 font-bold py-3 rounded-full mt-4"
          >
            Register Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Member;
