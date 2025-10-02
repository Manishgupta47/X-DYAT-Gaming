import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure you import AOS CSS

const BreadcrumbOne = ({
  title = "ABOUT",
  theme = "US",
  inner = "About us",
}) => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // AOS initialization
  }, []);

  return (
    <div
      className="relative min-h-[440px] flex items-center py-15"
      style={{
        backgroundImage: 'url("/img/bg/4.png")', // Ensure your background image path is correct
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-20">
        {/* Text Section */}
        <div
          className="w-full md:w-1/2 text-left"
          data-aos="fade-right" // AOS fade effect for text
          data-aos-delay="200"
        >
          <h2 className="text-white font-extrabold text-5xl md:text-7xl mb-6 tracking-tight uppercase">
            {title}{" "}
            <span className="text-[#DBFF26]">{theme}</span>
          </h2>
          <ul className="flex items-center space-x-2 text-xl font-semibold">
            <li>
              <Link
                to="/"
                className="hover:text-[#DBFF26] text-white transition-colors"
                data-aos="fade-up" // AOS fade effect for the home link
                data-aos-delay="300"
              >
                Home
              </Link>
            </li>
            <li>
              <span
                className="text-[#DBFF26]"
                data-aos="fade-up" // AOS fade effect for ">"
                data-aos-delay="400"
              >
                &gt;
              </span>
            </li>
            <li>
              <span
                className="text-white lowercase"
                data-aos="fade-up" // AOS fade effect for inner text
                data-aos-delay="500"
              >
                {inner}
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* Overlay for better text contrast */}
      <div />
    </div>
  );
};

export default BreadcrumbOne;
