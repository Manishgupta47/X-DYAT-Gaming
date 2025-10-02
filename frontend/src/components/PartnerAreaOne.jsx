import React from "react";
import Marquee from "react-fast-marquee";

const PartnerAreaOne = () => {
  const logos = ["1.png", "2.png", "3.png", "4.png", "1.png", "2.png", "3.png"];

  return (
    <div className="py-20 bg-[#0d0f16] relative overflow-hidden">
      {/* Decorative Gradient Blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00ffd5]/10 via-transparent to-[#a0ff00]/10 pointer-events-none"></div>

      {/* Left to Right */}
      <div className="mb-10">
        <Marquee gradient={false} speed={50}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-1 bg-[#10121b]/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-gray-700/50 hover:border-[#d4f10f]/70 transition-all duration-300"
            >
              <img
                src={`/img/partner/${logo}`}
                alt="partner-logo"
                className="w-70 h-30 object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Right to Left */}
      <div>
        <Marquee direction="right" gradient={false} speed={50}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-1 bg-[#10121b]/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-gray-700/50 hover:border-[#00ffd5]/70 transition-all duration-300"
            >
              <img
                src={`/img/partner/${logo}`}
                alt="partner-logo"
                className="w-70 h-30 object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default PartnerAreaOne;
