import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { FaTwitter, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const TopAdvisorsOne = () => {
  const sliderRef = useRef(null);

  const settings = {
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    responsive: [
      { breakpoint: 1499, settings: { slidesToShow: 4 } },
      { breakpoint: 1399, settings: { slidesToShow: 4 } },
      { breakpoint: 1199, settings: { slidesToShow: 3 } },
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 2 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } },
    ],
  };

  const advisors = [
    { name: "Alxender Pul", role: "CEO", img: "/img/team/1.png" },
    { name: "Siddrat mat", role: "Developer", img: "/img/team/1.png" },
    { name: "Robart Fine", role: "Co-Founder", img: "/img/team/2.png" },
    { name: "Jone Doe", role: "CEO", img: "/img/team/3.png" },
    { name: "Daniel vibe", role: "CEO", img: "/img/team/4.png" },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: 'url("/img/creator/bg2.png")' }}
    >
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h6
              className="text-yellow-200 text-lg font-semibold uppercase mb-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Team & Advisors
            </h6>
            <h2
              className="text-3xl md:text-5xl font-bold text-white"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              CRYPTO EXPERT
              <br /> ADVISORS
            </h2>
          </div>
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200"
              onClick={() => sliderRef.current.slickPrev()}
              data-aos="zoom-in" // AOS zoom-in for the previous button
            >
              <SlArrowLeft size={20} />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200"
              onClick={() => sliderRef.current.slickNext()}
              data-aos="zoom-in" // AOS zoom-in for the next button
            >
              <SlArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Advisors Slider */}
        <Slider ref={sliderRef} {...settings}>
          {advisors.map((advisor, idx) => (
            <div key={idx} className="px-3">
              <div
                className="bg-cover bg-center rounded-xl shadow-md p-5 text-center hover:shadow-xl transition"
                style={{ backgroundImage: 'url("/img/creator/bg.png")' }} // Background image for each card
                data-aos="fade-up" // AOS fade-up effect for each advisor card
                data-aos-delay={idx * 200} // Staggering the animation delays
              >
                <div className="mb-4 relative">
                  <img
                    src={advisor.img}
                    alt={advisor.name}
                    className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-indigo-100"
                  />
                </div>
                <h5 className="text-lg font-semibold text-white">
                  <Link to="/team-details">{advisor.name}</Link>
                </h5>
                <span className="block text-sm text-white mb-4">
                  {advisor.role}
                </span>
                <div className="flex justify-center gap-4 text-gray-500">
                  <Link to="#" className="hover:text-indigo-500" onClick={handleScrollToTop}>
                    <FaFacebookSquare size={20} />
                  </Link>
                  <Link to="#" className="hover:text-indigo-500" onClick={handleScrollToTop}>
                    <FaTwitter size={20} />
                  </Link>
                  <Link to="#" className="hover:text-indigo-500" onClick={handleScrollToTop}>
                    <FaLinkedin size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Dotted yellow dot */}
      <div className="absolute right-0 bottom-0 mb-5 mr-5 flex justify-center items-center text-yellow-400">
        <span className="w-3 h-3 rounded-full border-2 border-yellow-400" data-aos="zoom-in"></span> {/* AOS zoom-in for the yellow dot */}
      </div>
    </div>
  );
};

export default TopAdvisorsOne;
