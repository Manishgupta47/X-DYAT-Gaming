import React, { useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { FaHeart, FaLink } from "react-icons/fa";

// Auction data (Dynamic)
const auctions = [
  { id: 1, title: "Lune Studio", image: "/img/top-auction/1.png", price: "3.005 ETH" },
  { id: 2, title: "Aune Studio", image: "/img/top-auction/2.png", price: "3.005 ETH" },
  { id: 3, title: "Quae Studio", image: "/img/top-auction/3.png", price: "3.005 ETH" },
  { id: 4, title: "Nova Studio", image: "/img/top-auction/4.png", price: "3.005 ETH" },
];

// Shuffle helper
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const TopAuctionOne = () => {
  const sliderRef = useRef(null);

  // Memoized shuffled auctions (prevents reshuffle on every re-render)
  const shuffledAuctions = useMemo(() => shuffleArray(auctions), []);

  // Slider settings
  const settings = {
    infinite: true,
    speed: 800,
    cssEase: "ease-in-out",
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // auto slide every 2.5s
    responsive: [
      { breakpoint: 1499, settings: { slidesToShow: 4 } },
      { breakpoint: 1199, settings: { slidesToShow: 3 } },
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } },
    ],
  };

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="bg-[#0f111a] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between mb-14"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h6 className="text-yellow-400 text-lg uppercase tracking-wider mb-2 font-extrabold">
              Top Auction
            </h6>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Limited Auction
            </h2>
          </div>
          {/* Slider Buttons */}
          <div className="mt-6 md:mt-0 flex gap-4">
            <button
              className="w-12 h-12 rounded-full bg-[#1a1c29] border border-gray-700 hover:bg-yellow-400 hover:text-black flex items-center justify-center transition"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <RxCaretLeft className="text-3xl" />
            </button>
            <button
              className="w-12 h-12 rounded-full bg-[#1a1c29] border border-gray-700 hover:bg-yellow-400 hover:text-black flex items-center justify-center transition"
              onClick={() => sliderRef.current.slickNext()}
            >
              <RxCaretRight className="text-3xl" />
            </button>
          </div>
        </motion.div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {shuffledAuctions.map((auction, i) => (
            <motion.div
              key={auction.id}
              className="px-3"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="group bg-[#1a1c29] rounded-2xl overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl border border-gray-700 w-[90%] mx-auto">
                {/* Image with padding */}
                <div className="relative p-3">
                  <img
                    src={auction.image}
                    alt={auction.title}
                    className="w-full h-56 object-cover rounded-xl group-hover:scale-105 transition"
                  />
                  <span className="absolute top-6 right-6 text-white text-lg cursor-pointer hover:text-pink-500 transition">
                    <FaHeart />
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h5 className="font-bold text-lg text-white mb-3 uppercase">
                    <Link
                      to="/creator-details"
                      className="hover:text-yellow-400 transition"
                    >
                      {auction.title}
                    </Link>
                  </h5>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-400">Highest bid</p>
                      <Link
                        to="/creator-details"
                        className="flex items-center gap-2 font-semibold text-[#a78bfa]"
                      >
                        <FaLink className="text-yellow-400" />
                        {auction.price}
                      </Link>
                    </div>
                    <Link
                      className="px-5 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition font-semibold flex items-center gap-2"
                      to="/creator-details"
                    >
                      BID <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopAuctionOne;
