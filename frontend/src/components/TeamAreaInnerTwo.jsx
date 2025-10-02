import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FaTwitter, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import AOS from 'aos'; 
import 'aos/dist/aos.css'; // Make sure to import AOS CSS
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme styles

const TeamAreaInnerTwo = () => {
  const sliderRef = useRef(null);

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    // Cleanup AOS on unmount
    return () => {
      AOS.refresh();
    };
  }, []);

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
    <div className="team-area pt-24 pb-24 relative">
      <div className="container mx-auto " >
        <div className="section-title text-center pb-8">
          <h6 className="sub-title tracking-wide text-[#DBFF26] uppercase text-lg font-semibold">Our team</h6>
          <h2 className="title text-4xl md:text-5xl font-extrabold my-4 text-white tracking-tight">
            Meet Our Members
          </h2>
          <img className="mt-3 mx-auto" src="/img/icon/shalep-1.png" alt="Icon" />
        </div>

        <Slider ref={sliderRef} {...settings}>
          {advisors.map((advisor, idx) => (
            <div key={idx} className="px-3">
              <div
                className="bg-cover bg-center rounded-xl shadow-md p-5 text-center hover:shadow-xl transition"
                style={{ backgroundImage: 'url("/img/creator/bg.png")' }} 
                data-aos="fade-up"
                data-aos-delay={idx * 200} 
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
      

        {/* Slider Navigation */}
        <div className=" gap-3 mt-6 md:mt-0 absolute bottom-0 left-0 right-0 flex justify-center items-center">
        
        
        </div>
      </div>

      
    </div>
  );
};

export default TeamAreaInnerTwo;
