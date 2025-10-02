import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const GalleryOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(""); // store video link dynamically

  // Function to open modal with specific video
  const openVideo = (url) => {
    setVideoUrl(url);
    setIsOpen(true);
  };

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
 {/* HERO SECTION */}
<div className="bg-[#101217] flex items-center">
  <div className="container mx-auto flex w-[1351px] h-[300px] justify-between items-center px-4 py-2 relative"> {/* Set width and height */}
    {/* Heading */}
    <div className="relative flex-1 flex items-center justify-center min-w-[70px]" data-aos="fade-up">
      <h1
        className="font-extrabold text-[92px] leading-[98px] tracking-tight uppercase"
        style={{
          color: "transparent",
          WebkitTextStroke: "2px #242830",
          fontFamily: "Montserrat, sans-serif",
          letterSpacing: "0.03em"
        }}
      >
        CRYPTO<br />
        MININGS
      </h1>
    </div>

    {/* Media Player Section */}
    <div className="flex-1 flex items-center justify-center" data-aos="fade-up">
      <div className="relative flex items-center">
        {/* Neon vertical line */}
        <span className="h-[68px] w-[5px] rounded-lg bg-lime-400 mr-8" />
        {/* Play section */}
        <button
          onClick={() => openVideo("https://www.youtube.com/watch?v=XxVg_s8xAms")}
          className="relative flex items-center justify-center w-[170px] h-[170px] rounded-full"
          style={{ background: "rgba(30,32,35,0.9)" }}
          type="button"
          data-aos="zoom-in"
        >
          <span className="absolute w-[170px] h-[170px] rounded-full border-[6px] border-[#232529]"></span>
          <span className="absolute w-[130px] h-[130px] rounded-full border-[3px] border-[#c9fa61] opacity-30 animate-spin-slow"></span>
          <span className="absolute w-[110px] h-[110px] rounded-full border-[4px] border-[#c9fa61]"></span>
          <span className="absolute w-[105px] h-[105px] rounded-full border-[2px] border-[#232529]" />
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            className="relative z-10 animate-zoompulse"
            style={{ transformOrigin: "50% 50%" }}
          >
            <circle cx="22" cy="22" r="22" fill="#1a1c1e" opacity="0.6" />
            <polygon
              points="18,13 33,22 18,31"
              fill="#c9fa61"
              style={{
                filter: "drop-shadow(0 0 6px #c9fa61)"
              }}
            />
          </svg>
        </button>
        {/* "See Solution" Label */}
        <span className="ml-7 text-gray-300 text-[18px] font-medium uppercase tracking-wide">
          See Solution
        </span>
      </div>
    </div>
  </div>
</div>

{/* MODAL MEDIA PLAYER */}
{isOpen && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
    <div className="relative w-full max-w-3xl aspect-video">
      <ReactPlayer
        url={videoUrl}
        width="100%"
        height="100%"
        playing
        controls
      />
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
      >
        ✖ Close
      </button>
    </div>
  </div>
)}


      {/* GALLERY GRID */}
      <div className="container mx-auto px-6 mt-2">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-12 gap-4">
          {/* Left Column */}
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-4" data-aos="fade-right">
            <div className="overflow-hidden rounded-xl shadow-md">
              <Link to="/tournament-details">
                <img
                  onClick={() =>
                    openVideo("https://www.youtube.com/watch?v=ysz5S6PUM-U")
                  }
                  className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                  src="/img/gallery-2/1.png"
                  alt="gallery-1"
                />
              </Link>
            </div>
            <div className="overflow-hidden rounded-xl shadow-md">
              <Link to="/tournament-details">
                <img
                  onClick={() =>
                    openVideo("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
                  }
                  className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                  src="/img/gallery-2/2.png"
                  alt="gallery-2"
                />
              </Link>
            </div>
          </div>

          {/* Middle Big Image */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-6 flex items-center" data-aos="fade-up">
            <div className="w-full overflow-hidden rounded-xl shadow-lg">
              <Link to="/tournament-details">
                <img
                  onClick={() =>
                    openVideo("https://www.youtube.com/watch?v=oUFJJNQGwhk")
                  }
                  className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                  src="/img/gallery-2/3.png"
                  alt="gallery-3"
                />
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-4" data-aos="fade-left">
            <div className="overflow-hidden rounded-xl shadow-md">
              <Link to="/tournament-details">
                <img
                  onClick={() =>
                    openVideo("https://www.youtube.com/watch?v=jfKfPfyJRdk")
                  }
                  className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                  src="/img/gallery-2/4.png"
                  alt="gallery-4"
                />
              </Link>
            </div>
            <div className="overflow-hidden rounded-xl shadow-md">
              <Link to="/tournament-details">
                <img
                  onClick={() =>
                    openVideo("https://www.youtube.com/watch?v=ScMzIvxBSi4")
                  }
                  className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                  src="/img/gallery-2/5.png"
                  alt="gallery-5"
                />
              </Link>
            </div>
          </div>

          {/* Extra Right Small Column */}
          <div className="col-span-2 lg:col-span-2 flex items-center" data-aos="fade-up">
            <div className="w-full overflow-hidden rounded-xl shadow-md">
              <Link to="/tournament-details">
                <img
                  onClick={() =>
                    openVideo("https://www.youtube.com/watch?v=aqz-KE-bpKQ")
                  }
                  className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                  src="/img/gallery-2/6.png"
                  alt="gallery-6"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom keyframes for media player icon */}
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 6s linear infinite;
          }

          @keyframes zoompulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.25); }
            100% { transform: scale(1); }
          }
          .animate-zoompulse {
            animation: zoompulse 0.8s infinite cubic-bezier(0.4, 0, 0.2, 1);
          }
        `}
      </style>
    </>
  );
};

export default GalleryOne;
