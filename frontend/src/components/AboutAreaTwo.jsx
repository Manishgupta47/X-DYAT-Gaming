import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos"; // Importing AOS
import "aos/dist/aos.css"; // AOS CSS

const AboutAreaTwo = () => {

  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-1">
        {/* Top Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1 mb-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center"
              data-aos="fade-up"
              data-aos-delay={200 + i * 100}
            >
              <div className="p-6 bg-[#10121b]/70 rounded-xl border border-gray-400  transition-all duration-300 shadow-md hover:shadow-[#25C6DA]/30">
                <img
                  src={`/img/about-icon-img/${i + 1}.png`}
                  alt={`about-icon-${i + 1}`}
                  className="h-22 w-22 "
                />
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
          {/* Left Image */}
          <div
            className="xl:col-span-7 lg:col-span-6"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <img
              src="/img/about/7.png"
              alt="about-main"
              className="rounded-2xl shadow-lg border border-gray-800"
            />
          </div>

          {/* Right Content */}
          <div className="xl:col-span-5 lg:col-span-6 space-y-6">
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Gaming Next Level
            </h2>

            <h5
  className="text-lg font-medium text-yellow-600 bg-gray-800 flex items-center justify-between p-2 rounded-lg"
  data-aos="fade-up"
  data-aos-delay="300"
>
  ARCTIC WARFARE MAGNUM {"{NFT’S}"}
 
            
            </h5>

            <p
              className="text-white leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="400"
            >
             Building your own stuff, you can do that too. The
             ASSET CREATOR will allow creators to make things  
             for the as well as sell them game’s marketp just characters.
            </p>

            <div
              className="flex items-center gap-3 text-lg"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img
                src="/img/about/2.png"
                alt="reward"
                className="w-10 h-10"
              />
              <span>
                Earn Great Rewards{" "}
                <span className="text-[#25C6DA] font-semibold">(Friend)</span>
              </span>
            </div>

            <div
              className="pt-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Link
                to="/about"
                className="inline-block bg-[#25C6DA] hover:bg-[#1ea9bb] text-white px-6 py-3 rounded-lg font-medium shadow-md transition"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAreaTwo;
