import React from "react";
import ab1 from "../assets/ab1.jpeg";
import ab2 from "../assets/ab2.jpeg"; // Adjust the path if necessary

const AboutUsPage = () => {
  return (
    <section className="bg-white p-20">
      <h2 className="text-3xl font-bold text-center text-[#C6318B] mb-4">
        About Us
      </h2>
      <h3 className="text-xl text-center mb-6">
        From Vision to Reality: The Inspirational Story of Raju Karemore
      </h3>
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="w-full md:w-1/2 ">
          {" "}
          {/* Added right padding */}
          <p className="text-gray-700 mb-4 mt-10 ml-20">
            Raju Karemore’s journey is a shining example of how vision,
            perseverance, and innovation can turn dreams into reality. Starting
            from humble beginnings, he faced numerous challenges that tested his
            resolve, yet he remained undeterred. Each obstacle became a stepping
            stone, propelling him closer to his goals. Raju's relentless pursuit
            of excellence pushed him to achieve groundbreaking milestones in his
            field, setting new standards and inspiring those around him.
            <span className="text-[#C6318B] cursor-pointer"> Read more</span>
          </p>
          <div className="w-full mt-10 ml-40">
            <h4 className="text-3xl text-[#C6318B] font-semibold">My Stands</h4>
            <ul className="list-disc text-lg font-semibold list-inside mt-2">
              <li>Innovation</li>
              <li>Leadership</li>
              <li>Inspiration</li>
              <li>Perseverance</li>
              <li>Excellence</li>
              <li>Community Impact</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row ">
          <img
            src={ab1}
            alt="Raju Karemore"
            className="h-[400px] w-[200] object-cover shadow-lg mb-0" // Set margin-bottom to 0
          />
          <img
            src={ab2}
            alt="Raju Karemore"
            className="h-[300px] w-[200] object-cover shadow-lg" // Set margin-bottom to 0
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
