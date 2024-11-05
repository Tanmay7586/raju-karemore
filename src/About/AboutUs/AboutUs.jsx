import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Image Container */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px]">
            <img 
              src="/api/placeholder/800/600"
              alt="About Us" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              About Us
            </h1>
            
            <h2 className="mt-4 text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
              From Vision to Reality: The Inspirational Story of{" "}
              <span className="text-[#5f008e] border-b-2 border-[#c6318b] pb-1">
                Raju Karemore
              </span>
            </h2>
          </div>

          <div className="space-y-4 text-gray-700">
            <p className="text-sm md:text-base lg:text-lg leading-relaxed md:leading-relaxed lg:leading-loose">
              Raju Karemore's journey is a shining example of how vision, perseverance, 
              and innovation can turn dreams into reality. Starting from humble beginnings, 
              he faced numerous challenges that tested his resolve, yet he remained undeterred. 
              Each obstacle became a stepping stone, propelling him closer to his goals. 
              Raju's relentless pursuit of excellence pushed him to achieve groundbreaking 
              milestones in his field, setting new standards and inspiring those around him.
            </p>

            <p className="text-sm md:text-base lg:text-lg leading-relaxed md:leading-relaxed lg:leading-loose">
              His leadership extended beyond personal success; he became a beacon of hope, 
              encouraging others to pursue their dreams with the same fervor. Raju's story 
              is not just about reaching the pinnacle of success but about embracing the 
              journey of growth, learning, and making a meaningful impact on the community. 
              His dedication to giving back and uplifting others exemplifies the true essence 
              of leadership and success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;