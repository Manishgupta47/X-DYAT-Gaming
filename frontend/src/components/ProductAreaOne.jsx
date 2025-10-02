import React from "react";
import Marquee from "react-fast-marquee";

const PartnerAreaOne = () => {
  const partners = [
    "/img/partner/1.png",
    "/img/partner/2.png",
    "/img/partner/3.png",
    "/img/partner/4.png",
  ];

  return (
    <div className="py-28 bg-gray-50">
      {/* Left Marquee */}
      <div className="mb-8">
        <Marquee gradient={false} speed={50}>
          {partners.concat(partners).map((img, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-6"
            >
              <img src={img} alt={`partner-${index}`} className="h-20 object-contain" />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Right Marquee */}
      <div>
        <Marquee gradient={false} direction="right" speed={50}>
          {partners.concat(partners).map((img, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-6"
            >
              <img src={img} alt={`partner-${index}`} className="h-20 object-contain" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default PartnerAreaOne;
