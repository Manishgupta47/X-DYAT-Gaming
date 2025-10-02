import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactInner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Animation run only once
      offset: 100,    // Offset from viewport
    });
    AOS.refresh();
  }, []);

  return (
    <div className="contact-area py-24 bg-[#0b1120] min-h-screen">
      <div className="container max-w-7xl mx-auto px-6 lg:px-12 xl:px-20">
        <div className="flex flex-col lg:flex-row lg:gap-16 gap-12">
          {/* Left Contact Form Section */}
          <div
            className="lg:w-1/2 w-full"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="section-title max-w-lg">
              <h6
                className="text-[#e6fe46] font-semibold uppercase mb-3 tracking-wide"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                Contact Us
              </h6>
              <h2
                className="text-white text-4xl lg:text-5xl font-extrabold mb-5 leading-tight"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                Get in Touch
              </h2>
              <p
                className="text-gray-400 mb-10 text-lg leading-relaxed"
                data-aos="fade-left"
                data-aos-delay="600"
              >
                In a space saturated by rushed, low-quality video games battle
                other players through game
              </p>

              {/* Contact Form */}
              <div className="space-y-6">
                <textarea
                  placeholder="Message"
                  className="w-full h-32 p-4 rounded-lg bg-[#101726] text-gray-300 border border-[#222c38] focus:ring-2 focus:ring-[#e6fe46] outline-none resize-none"
                  data-aos="fade-up"
                  data-aos-delay="700"
                />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 rounded-lg bg-[#101726] text-gray-300 border border-[#222c38] focus:ring-2 focus:ring-[#e6fe46] outline-none"
                  data-aos="fade-up"
                  data-aos-delay="800"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 rounded-lg bg-[#101726] text-gray-300 border border-[#222c38] focus:ring-2 focus:ring-[#e6fe46] outline-none"
                  data-aos="fade-up"
                  data-aos-delay="900"
                />
                <button
                  className="w-full bg-[#e6fe46] text-[#0b1120] font-bold py-4 rounded-lg hover:bg-[#d4ec3a] transition"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                >
                  Post Message
                </button>
              </div>
            </div>
          </div>

          {/* Right Contact Map and Info Section */}
          <div
            className="lg:w-1/2 w-full"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div
              className="rounded-lg overflow-hidden shadow-lg mb-8 border border-[#222c38]"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2s!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
                className="w-full h-[400px] lg:h-[430px] border-0"
                allowFullScreen=""
                loading="lazy"
              />
            </div>

            {/* Contact Info */}
            <div className="text-gray-300" data-aos="fade-up" data-aos-delay="600">
              <ul className="space-y-3 mb-6">
                <li>
                  <span className="font-semibold text-[#e6fe46]">ADDRESS :</span>{" "}
                  Central Park West LA87, New York
                </li>
                <li>
                  <span className="font-semibold text-[#e6fe46]">EMAIL :</span>{" "}
                  info@example.com
                  <span className="ml-6 font-semibold text-[#e6fe46]">
                    TIME :
                  </span>{" "}
                  16:00 - 19:00
                </li>
              </ul>
              <h2
                className="text-3xl font-extrabold text-[#e6fe46]"
                data-aos="zoom-in"
                data-aos-delay="700"
              >
                +3 555 854 326
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInner;
