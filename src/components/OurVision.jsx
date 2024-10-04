import React from "react";
import ab3 from "../assets/ab3.jpeg";

const OurVision = () => {
  return (
    <section className="relative bg-[#FFFA12] py-10 px-20 flex flex-col md:flex-row items-start">
      {/* Container for text and progress bars */}
      <div className="md:w-1/2 pr-10 z-10">
        <h2 className="text-3xl font-bold text-black mb-4">
          United For Progress Our Vision
        </h2>
        <p className="text-lg text-black mb-8">
          I pledge to serve all Americans with integrity and commitment. My duty
          is to work across party lines to ensure the well-being and progress of
          every citizen.
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="text-m font-semibold text-black">Health Care</h3>
            <div className="relative mt-2 bg-gray-200 rounded-full h-2">
              <div
                className="absolute bg-pink-500 h-2 rounded-full"
                style={{ width: "93%" }}
              />
            </div>
            <span className="text-black font-semibold">93%</span>
          </div>
          <div>
            <h3 className="text-m font-semibold text-black">Education</h3>
            <div className="relative mt-2 bg-gray-200 rounded-full h-2">
              <div
                className="absolute bg-pink-500 h-2 rounded-full"
                style={{ width: "85%" }}
              />
            </div>
            <span className="text-black font-semibold">85%</span>
          </div>
        </div>
      </div>

      {/* Image container */}
      <div className="absolute pl-10 right-0 top-0 bottom-0">
        <img
          src={ab3}
          alt="Raju Karemore"
          className="h-full w-auto object-cover shadow-lg" // Make sure the image covers the full height
        />
      </div>
    </section>
  );
};

export default OurVision;
