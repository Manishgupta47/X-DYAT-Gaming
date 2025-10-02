import React from "react";

const InstagramAreaOne = () => {
  const images = [
    "1.png", "2.png", "3.png", "4.png", "5.png", "6.png"
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative py-5 bg-[#121212]"> {/* Darker background color */}
      {/* Instagram Heading with Scroll to Top */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center opacity-0 animate-fadeIn">
        <button
          onClick={scrollToTop}
          className="bg-[#F0FF4B] border-2 border-[#F0FF4B] text-black px-8 py-3 rounded-lg text-3xl font-medium shadow-md hover:bg-transparent hover:text-[#F0FF4B] hover:bg-black transition duration-300"
        >
          INSTAGRAM
        </button>
      </div>

      {/* Grid Layout for Images */}
      <div className="max-w-full mx-auto px-0 mt-1">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-1">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative group overflow-hidden shadow-md transition-transform duration-500 opacity-0 animate-fadeIn"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img
                src={`/img/instagram/${img}`}
                alt={`instagram-${i}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramAreaOne;  