import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";

const TopSellerAreaOne = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const settings = {
    speed: 800, // ⏳ thoda smooth
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    centerMode: true, // 🎯 smooth center alignment
    centerPadding: "40px",
    cssEase: "ease-in-out", // 🎞️ smooth animation
    responsive: [
      { breakpoint: 1199, settings: { slidesToShow: 2, centerPadding: "30px" } },
      { breakpoint: 767, settings: { slidesToShow: 1, centerPadding: "20px" } },
    ],
  };

  const sellers = [
    { id: 1, name: "First Player", img: "/img/top-seller/1.png" },
    { id: 2, name: "Second Player", img: "/img/top-seller/2.png" },
    { id: 3, name: "Third Player", img: "/img/top-seller/3.png" },
    { id: 4, name: "Fourth Player", img: "/img/top-seller/1.png" },
    { id: 5, name: "Fifth Player", img: "/img/top-seller/2.png" },
  ];

  return (
    <div className="top-seller-area pt-0 py-16 bg-[#0c0e17] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row justify-between items-center mb-10"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-extrabold text-white">
            TOP SELLER <span className="text-[#c6ff00]">IN 1 DAY</span>
          </h2>

          {/* Arrows */}
          <div className="flex gap-4 mt-6 md:mt-0">
            <button
              className="w-12 h-12 border-2 border-dotted border-[#c6ff00] rounded-full flex items-center justify-center text-[#c6ff00] hover:bg-[#c6ff00] hover:text-black transition"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <RxCaretLeft size={26} />
            </button>
            <button
              className="w-12 h-12 border-2 border-dotted border-[#c6ff00] rounded-full flex items-center justify-center text-[#c6ff00] hover:bg-[#c6ff00] hover:text-black transition"
              onClick={() => sliderRef.current.slickNext()}
            >
              <RxCaretRight size={26} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div data-aos="fade-up" data-aos-delay="200">
          <Slider ref={sliderRef} {...settings}>
            {sellers.map((seller, index) => (
              <div key={index} className="px-3">
                <div className="bg-[#161b29] rounded-xl p-6 relative transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl w-[280px] mx-auto">
                  {/* Top Section */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={seller.img}
                      alt={seller.name}
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <h5 className="text-white font-semibold uppercase text-sm">
                        {seller.name}
                      </h5>
                      <span className="text-[#c6ff00] text-xs">Highest bid</span>
                    </div>
                  </div>

                  {/* Middle Section */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src="/img/top-seller/4.png"
                        alt="author"
                        className="w-7 h-7 rounded-full border border-gray-600"
                      />
                      <img
                        src="/img/top-seller/5.png"
                        alt="author"
                        className="w-7 h-7 rounded-full border border-gray-600"
                      />
                      <span className="text-gray-300 text-xs">+56</span>
                    </div>

                    <div className="text-right">
                      <span className="bg-[#2a3147] text-white px-2 py-1 rounded-md text-xs block mb-1">
                        158
                      </span>
                      <span className="bg-[#2a3147] text-white px-2 py-1 rounded-md text-xs block">
                        35K
                      </span>
                    </div>
                  </div>

                  {/* Footer */}
                  <p className="absolute bottom-3 left-5 text-[10px] text-gray-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#c6ff00] rounded-full inline-block"></span>
                    POWERED BY BLOCKCHAIN
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TopSellerAreaOne;
