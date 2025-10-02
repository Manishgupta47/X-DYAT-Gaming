import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CreatorOne = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize the animation duration
      once: true, // Ensure animations happen only once
    });
  }, []);

  return (
    <div
      className="creator-area service bg-cover bg-center"
      style={{ backgroundImage: 'url("/img/creator/bg2.png")' }}
    >
      <div className="container mx-auto px-4 py-16 text-center">
        {/* Section Title */}
        <div className="section-title text-center mb-5">
          <h6
            className="subtitle text-lg font-semibold text-yellow-300 mb-2"
            data-aos="fade-up" // AOS fade-up effect on section title
            data-aos-delay="200"
          >
            Trusted Wallet
          </h6>
          <h2
            className="title text-4xl font-extrabold text-white"
            data-aos="fade-up" // AOS fade-up effect on section title
            data-aos-delay="300"
          >
            TRUSTED BY THE BEST
          </h2>
        </div>

        {/* Wallet Icons Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {/* Icon 1 */}
          <div className="wallet-item text-center" data-aos="fade-up" data-aos-delay="400">
            <img className="mx-auto mb-4" src="/img/wallet/3.png" alt="Ethereum Max" />
            <h5 className="text-white">Ethereum Max</h5>
          </div>
          {/* Icon 2 */}
          <div className="wallet-item text-center" data-aos="fade-up" data-aos-delay="500">
            <img className="mx-auto mb-4" src="/img/wallet/4.png" alt="Mahereum Max" />
            <h5 className="text-white">Mahereum Max</h5>
          </div>
          {/* Icon 3 */}
          <div className="wallet-item text-center" data-aos="fade-up" data-aos-delay="600">
            <img className="mx-auto mb-4" src="/img/wallet/5.png" alt="Max Tone" />
            <h5 className="text-white">Max Tone</h5>
          </div>
          {/* Icon 4 */}
          <div className="wallet-item text-center" data-aos="fade-up" data-aos-delay="700">
            <img className="mx-auto mb-4" src="/img/wallet/6.png" alt="Fix Turbo" />
            <h5 className="text-white">Fix Turbo</h5>
          </div>
          {/* Icon 5 */}
          <div className="wallet-item text-center" data-aos="fade-up" data-aos-delay="800">
            <img className="mx-auto mb-4" src="/img/wallet/7.png" alt="Edereum Max" />
            <h5 className="text-white">Edereum Max</h5>
          </div>
          {/* Icon 6 */}
          <div className="wallet-item text-center" data-aos="fade-up" data-aos-delay="900">
            <img className="mx-auto mb-4" src="/img/wallet/8.png" alt="Roereum Max" />
            <h5 className="text-white">Roereum Max</h5>
          </div>
        </div>

        {/* Description Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {/* Left Section */}
          <div className="trusted-wallet-inner relative" data-aos="fade-right" data-aos-delay="1000">
            <img className="bg-one w-full" src="/img/bg/1.png" alt="background 1" />
            <img className="bg-two w-full absolute top-0 left-0" src="/img/bg/2.png" alt="background 2" />
            <div className="content-inner text-center absolute inset-0 flex flex-col justify-center items-center p-6 bg-transparent rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-opacity-80">
              {/* Category */}
              <div className="cat text-end mb-4">
                <Link to="/wallet" className="text-white text-lg font-semibold hover:text-lime-400">
                  Crepto User
                </Link>
              </div>
              {/* Icon */}
              <div className="icon mb-4">
                <img className="mx-auto" src="/img/wallet/1.png" alt="wallet icon" />
              </div>
              {/* Safe Core Text */}
              <span className="text-white text-lg mb-2">Safe {"{"}core{"}"}</span>
              {/* Description */}
              <h4 className="text-white text-xl mb-4">The most battle-tested Account Abstraction Stack</h4>
              {/* Learn More Link */}
              <Link to="/wallet" className="read-more text-lime-400 hover:text-white">
                Learn More <i className="fa fa-angle-right" />
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="trusted-wallet-inner relative" data-aos="fade-left" data-aos-delay="1100">
            <img className="bg-one w-full" src="/img/bg/1.png" alt="background 1" />
            <img className="bg-two w-full absolute top-0 left-0" src="/img/bg/2.png" alt="background 2" />
            {/* Content Inner */}
            <div className="content-inner text-center absolute inset-0 flex flex-col justify-center items-center p-6 bg-transparent rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-opacity-80">
              {/* Category */}
              <div className="cat text-end mb-4">
                <Link to="/wallet" className="text-white text-lg font-semibold hover:text-lime-400">
                  Developer
                </Link>
              </div>
              {/* Icon */}
              <div className="icon mb-4">
                <img className="mx-auto" src="/img/wallet/2.png" alt="wallet icon" />
              </div>
              {/* Safe Core Text */}
              <span className="text-white text-lg mb-2">Safe {"{"}core{"}"}</span>
              {/* Description */}
              <h4 className="text-white text-xl mb-4">The most battle-tested Account Abstraction Stack</h4>
              {/* Learn More Link */}
              <Link to="/wallet" className="read-more text-lime-400 hover:text-white">
                Learn More <i className="fa fa-angle-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorOne;
