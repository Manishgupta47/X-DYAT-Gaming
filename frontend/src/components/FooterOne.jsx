import React from "react";
import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <footer
      className="bg-[#0d0f16] bg-cover bg-center relative pt-20 pb-5"
      style={{ backgroundImage: 'url("./img/footer/bg.png")' }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative container mx-auto px-6">
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-gray-300">
          {/* About */}
          <div>
            <img src="/img/logo.png" alt="logo" className="mb-5 w-40" />
            <p className="text-gray-400 leading-relaxed mb-4">
              Centerl Park West La, New York <br />
              +0 123 456 7890 <br />
              info@andspa.com
            </p>
            <h5 className="text-white font-semibold mb-2">Open Hours</h5>
            <p className="text-gray-400">
              Sunday to Friday{" "}
              <span className="text-orange-400 font-semibold">08:00-20:00</span>
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-5">
              Important Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              {[
                { label: "CURATION", link: "/creators" },
                { label: "ABOUT US", link: "/about" },
                { label: "MY ACCOUNT", link: "/login" },
                { label: "CONTACT", link: "/contact" },
                { label: "SHIPPING & RETURNS", link: "/checkout" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="hover:text-orange-400 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-5">Subscribe</h4>
            <p className="text-gray-400 mb-5 text-sm leading-relaxed">
              Stay updated with our latest news, offers, and updates. Join our
              newsletter today.
            </p>
            <form className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-medium transition">
                Subscribe
              </button>
            </form>
          </div>

          {/* Instagram */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-5">Instagram</h4>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div
                  key={num}
                  className="relative group overflow-hidden rounded-md"
                >
                  <img
                    src={`/img/footer/${num}.png`}
                    alt="insta"
                    className="rounded-md transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <Link
                    to="#"
                    className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <i className="fab fa-instagram text-white text-lg"></i>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 <span className="text-orange-400 font-semibold">Dyat</span>,
            All Rights Reserved
          </p>
          <img
            src="/img/footer/7.png"
            alt="payment"
            className="mt-4 md:mt-0 w-44 opacity-90"
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
