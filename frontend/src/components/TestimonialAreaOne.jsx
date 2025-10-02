import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialAreaOne = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const settings = {
    speed: 800,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
  };

  const settings_1 = {
    speed: 800,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    responsive: [
      { breakpoint: 1499, settings: { slidesToShow: 4 } },
      { breakpoint: 1199, settings: { slidesToShow: 3 } },
      { breakpoint: 991, settings: { slidesToShow: 3 } },
      { breakpoint: 767, settings: { slidesToShow: 2 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-[#0d0f16] py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-14"
          data-aos="fade-up"
        >
          <div>
            <h6
              className="text-[#d4f10f] text-sm uppercase font-bold tracking-wide mb-4"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Our Testimonials
            </h6>
            <h2
              className="text-3xl md:text-5xl font-extrabold text-white leading-snug"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              OUR CLIENT <span className="text-[#d4f10f]">FEEDBACK</span>
            </h2>
          </div>

          {/* Arrows */}
          <div
            className="flex gap-4 mt-6 lg:mt-0"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="w-12 h-12 rounded-full border border-[#d4f10f] flex items-center justify-center text-[#d4f10f] hover:bg-[#d4f10f] hover:text-black transition-all duration-300 text-xl"
            >
              <SlArrowLeft />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="w-12 h-12 rounded-full border border-[#d4f10f] flex items-center justify-center text-[#d4f10f] hover:bg-[#d4f10f] hover:text-black transition-all duration-300 text-xl"
            >
              <SlArrowRight />
            </button>
          </div>
        </div>

        {/* Main Feedback Slider */}
        <Slider ref={sliderRef} {...settings}>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="px-4">
              <div
                className="bg-[#0c0e14] rounded-2xl p-12 relative shadow-xl min-h-[280px] flex items-center"
                data-aos="fade-up"
                data-aos-delay={item * 200}
              >
                {/* Quote Icon */}
                <span className="text-[#d4f10f] text-5xl absolute top-8 left-8">
                  ❝
                </span>
                <p className="text-gray-300 text-xl leading-relaxed pl-14 pr-6">
                  Building your own stuff, you can do that too. The ASSET
                  CREATOR will allow creators to make things for the as well as
                  sell. With bigger freedom comes endless creativity.
                </p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Thumbnail Slider */}
        <div className="mt-14" data-aos="fade-up" data-aos-delay="800">
          <Slider {...settings_1}>
            {[2, 3, 4, 5, 6, 7].map((item, index) => (
              <div key={index} className="px-3">
                <div className="bg-[#10121b] p-6 rounded-2xl flex items-center gap-5 border border-gray-800 shadow-md min-h-[120px] hover:scale-105 transition-transform duration-300">
                  <img
                    src={`/img/testimonial/${item}.png`}
                    alt="testimonial"
                    className="w-16 h-16 rounded-full border-2 border-[#d4f10f]"
                  />
                  <div>
                    <h5 className="text-white font-semibold text-lg">
                      {index % 2 === 0 ? "Alexander" : "Jemse Lee"} “
                    </h5>
                    <span className="text-gray-400 text-sm">Game CEO</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialAreaOne;
