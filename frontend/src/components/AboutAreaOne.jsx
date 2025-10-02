import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutAreaOne = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div
      className="relative bg-cover bg-center py-28"
      style={{ backgroundImage: 'url("/img/about/bg.png")' }}
    >
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
          {/* Left Image */}
          <div
            className="xl:col-span-7 lg:col-span-10"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src="/img/about/1.png"
              alt="about"
              className="rounded-2xl shadow-2xl border border-gray-700 hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right Content */}
          <div className="xl:col-span-5 space-y-6">
            <h2
              className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
              data-aos="fade-left"
              data-aos-delay="200"
            >
               Gaming  <span className="text-[#c6ff00]">Next Level</span>
            </h2>
            <h5
              className="text-lg font-semibold text-gray-300 uppercase tracking-wider"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              Arctic Warfare Magnum <span className="text-[#c6ff00]">{`{ NFTs }`}</span>
            </h5>
            <p
              className="text-gray-400 leading-relaxed max-w-lg"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              Unlock the true power of blockchain gaming 🎮. With our{" "}
              <span className="text-[#c6ff00] font-medium">Asset Creator</span>,
              you can not only craft characters but also trade them in the
              marketplace. Build, Sell & Earn — the future of gaming is here.
            </p>
            <div
              className="flex items-center space-x-3 text-gray-200"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <img src="/img/about/2.png" alt="icon" className="w-9 h-9" />
              <span className="text-sm">
                Earn Great Rewards{" "}
                <span className="text-[#c6ff00] font-semibold">(With Friends)</span>
              </span>
            </div>

            {/* Button */}
            <div data-aos="fade-left" data-aos-delay="600">
              <Link
                to="/about"
                className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-[#c6ff00]/50 transition-transform transform hover:scale-105 duration-500"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {[
            {
              img: "/img/about/3.png",
              title: "Game & Key Seller",
              text: "Sell & manage digital game assets with ease.",
              delay: 200,
            },
            {
              img: "/img/about/4.png",
              title: "AD Generation",
              text: "Boost your visibility with in-game ads.",
              delay: 300,
            },
            {
              img: "/img/about/5.png",
              title: "Game Promotion",
              text: "Promote your games & reach millions of players.",
              delay: 400,
            },
            {
              img: "/img/about/6.png",
              title: "More Earnings",
              text: "Play, trade & earn more with blockchain rewards.",
              delay: 500,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800 shadow-xl hover:shadow-[#c6ff00]/40 transition-all duration-700 transform hover:-translate-y-3"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto mb-5 w-20 h-20 group-hover:scale-110 transition-transform duration-500"
              />
              <h4 className="text-lg font-bold uppercase text-white mb-2 tracking-wide">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutAreaOne;
