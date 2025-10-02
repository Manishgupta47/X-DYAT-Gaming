import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

const TestimonialAreaTwo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS animations
  }, []);

  return (
    <div className="testimonial-area pt-20 pb-20 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h6
            className="sub-title text-xl font-semibold text-yellow-400 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our Testimonial
          </h6>
          <h2
            className="title text-5xl font-bold text-white mb-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            HAPPY CUSTOMER
            <br /> QUOTES
          </h2>
          <span data-aos="fade-up" data-aos-delay="400">
            <img className="mt-3 mx-auto" src="/img/icon/shalep-1.png" alt="img" />
          </span>
        </div>

        {/* Center the grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
          {/* Testimonial 1 */}
          <div
            className="single-testimonial-inner p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{ width: "300px", height: "330px" }} // Adjusted card width and height
          >
            <div className="date flex justify-between mb-4 text-sm text-gray-400">
              <img className="w-8" src="/img/testimonial/6.png" alt="icon" />
              <span>AUG 10, 2024</span>
            </div>
            <p className="mb-4 text-white">
              “An honest endorsement of your product/service that comes with a quick note to let you know customer, colleague, or peer who.”
            </p>
            <div className="author flex items-center mt-4">
              <div className="thumb mr-3">
                <img className="w-16 h-16 rounded-full object-cover" src="/img/testimonial/7.png" alt="Emely Jonson" />
              </div>
              <div className="details">
                <h4 className="name text-lg font-semibold text-white">Emely Jonson</h4>
                <span className="designation text-gray-400">Developer</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div
            className="single-testimonial-inner p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
            style={{ width: "300px", height: "330px" }} // Adjusted card width and height
          >
            <div className="date flex justify-between mb-4 text-sm text-gray-400">
              <img className="w-8" src="/img/testimonial/6.png" alt="icon" />
              <span>AUG 10, 2024</span>
            </div>
            <p className="mb-4 text-white">
              “An honest endorsement of your product/service that comes with a quick note to let you know customer, colleague, or peer who.”
            </p>
            <div className="author flex items-center mt-4">
              <div className="thumb mr-3">
                <img className="w-16 h-16 rounded-full object-cover" src="/img/testimonial/8.png" alt="Mike Alfradson" />
              </div>
              <div className="details">
                <h4 className="name text-lg font-semibold text-white">Mike Alfradson</h4>
                <span className="designation text-gray-400">Developer</span>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div
            className="single-testimonial-inner p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
            style={{ width: "300px", height: "330px" }} // Adjusted card width and height
          >
            <div className="date flex justify-between mb-4 text-sm text-gray-400">
              <img className="w-8" src="/img/testimonial/6.png" alt="icon" />
              <span>AUG 10, 2024</span>
            </div>
            <p className="mb-4 text-white">
              “An honest endorsement of your product/service that comes with a quick note to let you know customer, colleague, or peer who.”
            </p>
            <div className="author flex items-center mt-4">
              <div className="thumb mr-3">
                <img className="w-16 h-16 rounded-full object-cover" src="/img/testimonial/7.png" alt="Emely Jonson" />
              </div>
              <div className="details">
                <h4 className="name text-lg font-semibold text-white">Emely Jonson</h4>
                <span className="designation text-gray-400">Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialAreaTwo;
