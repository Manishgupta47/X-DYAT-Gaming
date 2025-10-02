import React from "react";
import { Link } from "react-router-dom";

const PlatformOne = () => (
  <div className="relative min-h-screen w-full bg-[#0c0d15] py-20">
    <div className="max-w-[1280px] mx-auto px-4">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
        {/* Left Box */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          {/* Gaming Platform "coupon" badge */}
          <div className="inline-block mb-7" data-aos="fade-up" data-aos-delay="200">
            <div className="inline-block rounded-[7px] border border-lime-400 border-dashed bg-[#222d1e] px-6 py-2 shadow-[0_2px_18px_0_rgba(181,255,73,0.14)]">
              <span className="text-lime-300 font-semibold uppercase tracking-wide text-[16px]">
                Gaming Platform
              </span>
            </div>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight tracking-wide uppercase"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            FOLLOW AS CREPTO <br />
            ACROSS <span className="text-lime-300">OWNERSHIP</span> <br />
            CASES
          </h2>
          <div className="flex items-center text-white text-lg font-medium mb-10" data-aos="fade-up" data-aos-delay="400">
            <svg width="36" height="24" fill="none" className="mr-4" viewBox="0 0 36 24">
              <path d="M3 23L12 7L19 18L22.5 11.5L32 23" stroke="#b5ff49" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
            | EARN GREAT REWARDS <span className="text-lime-300 font-extrabold ml-2">( FRIEND )</span>
          </div>
          <Link
            to="/about"
            className="inline-block px-5 py-3 text-[16px] font-extrabold rounded-[9px] border border-lime-400 bg-gradient-to-r from-lime-400 to-cyan-400 shadow-md hover:scale-105 transition-transform duration-300 text-black w-[180px] text-center"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            EXPLORE MORE
          </Link>
        </div>
        {/* Main Card */}
        <div className="w-full lg:w-[42%] flex justify-end items-center" data-aos="fade-up" data-aos-delay="400">
          <div
            className="relative p-10 w-full max-w-lg min-h-[320px] rounded-[18px] shadow-[0_0_26px_2px_#b5ff49]"
            style={{
              backgroundImage: "url('/img/bg/2.pn')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-7 right-7">
              <svg width={25} height={20} fill="none" viewBox="0 0 22 22">
                <path d="M7 15L15 7M15 7H7M15 7V15" stroke="#b5ff49" strokeWidth={2.2} strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col items-center pt-7">
              <img
                src="/img/platform/1.png"
                alt="crypto-chip"
                className="w-21 h-21 mb-6 p-4"
              />
              <div className="text-xl flex items-center gap-2 text-lime-300 font-semibold mb-1 ">
                <span className="w-2.5 h-2.5 bg-lime-300 rounded-sm inline-block" />
                Developer
              </div>
              <h3 className="text-4xl font-bold text-white mt-1 tracking-tight">
                Crypto <span className="text-lime-300">Ownership</span>
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 pb-4">
        {[{ img: "/img/platform/2.png" }, { img: "/img/platform/2.png" }, { img: "/img/platform/3.png" }].map((card, i) => (
          <div
            key={i}
            className="relative pt-10 pb-6 min-h-[220px] rounded-[18px] shadow-[0_0_18px_2px_#b5ff49] flex flex-col items-center justify-center
                       bg-no-repeat bg-cover bg-center cursor-pointer border border-transparent hover:border-lime-400 transition-all duration-300"
            style={{ backgroundImage: "url('/img/bg/1.png')" }}
            data-aos="fade-up"
            data-aos-delay={200 * (i + 1)}
          >
            <div className="absolute top-7 right-7">
              <svg width={22} height={22} fill="none" viewBox="0 0 22 22">
                <path d="M7 15L15 7M15 7H7M15 7V15" stroke="#b5ff49" strokeWidth={2} strokeLinecap="round" />
              </svg>
            </div>
            <img src={card.img} alt="platform" className="w-14 h-14 mb-6" />
            <div className="flex items-center gap-2 text-lime-300 font-semibold text-sm mb-1">
              <span className="w-2 h-2 bg-lime-300 rounded-sm inline-block" /> Developer
            </div>
            <h3 className="text-xl font-bold text-white">
              Crypto <span className="text-lime-300">Ownership</span>
            </h3>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PlatformOne;
