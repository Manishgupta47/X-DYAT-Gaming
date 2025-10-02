import React from "react";
import { Link } from "react-router-dom";

const FooterThree = () => {
  return (
    <footer
      className="bg-cover bg-no-repeat mt-[-8rem] pt-28"
      style={{ backgroundImage: "url('/img/footer/bg.png')" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Widget */}
          <div>
            <div className="mb-6">
              <img src="assets/img/logo.png" alt="logo" className="mb-4" />
              <p className="text-gray-300 mb-4 text-sm">
                Centerl Park West La, New York <br />
                +0 123 456 7890 <br />
                info@andspa.com
              </p>
              <h5 className="text-white font-semibold mb-1">Open Hours</h5>
              <p className="text-gray-300 text-sm">
                <strong>
                  Sunday to Friday{" "}
                  <span className="text-yellow-400">08:00-20:00</span>
                </strong>
              </p>
            </div>
          </div>

          {/* Important Links */}
          <div className="ps-0 md:ps-10 lg:ps-16">
            <h4 className="text-white font-semibold mb-4 text-lg">
              Important Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link className="text-gray-300 hover:text-yellow-400" to="/creators">
                  CURATION
                </Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-yellow-400" to="/about">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-yellow-400" to="/login">
                  MY ACCOUNT
                </Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-yellow-400" to="/contact">
                  CONTACT
                </Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-yellow-400" to="/checkout">
                  SHIPPING & RETURNS
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe Widget */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Subscribe</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Sedsit amet nisl inveli viverra bendum acnisi. Etiam efficitur.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="info@yourmail.com"
                className="flex-1 px-4 py-2 rounded-md text-gray-900"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-yellow-300 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Instagram Widget */}
          <div className="ps-0 md:ps-10 lg:ps-16">
            <h4 className="text-white font-semibold mb-4 text-lg">Instagram</h4>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <img
                  key={i}
                  src={`/img/footer/${i}.png`}
                  alt={`insta-${i}`}
                  className="w-full h-24 object-cover rounded-md"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-3 md:mb-0">
              © 2024 By dyat, All Rights Reserved
            </p>
            <img src="/img/footer/7.png" alt="payment" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
