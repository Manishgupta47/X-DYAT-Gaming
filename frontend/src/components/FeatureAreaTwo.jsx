import React from "react";
import { Link } from "react-router-dom";
import { SlArrowRightCircle } from "react-icons/sl";
import { motion } from "framer-motion";
import { FaEthereum } from "react-icons/fa";

const cards = [
  {
    id: 1,
    title: "LUNE STUDIO",
    avatar: "/img/feature/1.png",
    image: "/img/feature/5.png",
    delay: 0.2,
  },
  {
    id: 2,
    title: "TUNE STUDIO",
    avatar: "/img/feature/2.png",
    image: "/img/feature/6.png",
    delay: 0.3,
  },
  {
    id: 3,
    title: "BONE STUDIO",
    avatar: "/img/feature/3.png",
    image: "/img/feature/7.png",
    delay: 0.4,
  },
  {
    id: 4,
    title: "DOE STUDIO",
    avatar: "/img/feature/4.png",
    image: "/img/feature/8.png",
    delay: 0.5,
  },
];

const FeatureAreaTwo = () => {
  return (
    <div className="py-28 bg-[#0B0E13]">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-4xl font-extrabold text-white uppercase tracking-wide">
          DISCOVER ITEM BLOCKCHAIN
          </h2>
          <Link
            to="/explore-product"
            className="flex items-center gap-2 mt-4 md:mt-0 text-gray-300 hover:text-lime-400 transition"
          >
            Discover More <SlArrowRightCircle className="text-2xl" />
          </Link>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: card.delay }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gradient-to-b from-[#1A1F2C] to-[#0F1218] 
                         rounded-2xl p-6 border border-[#2A2F3D] 
                         shadow-lg shadow-black/30 hover:shadow-lime-400/20
                         hover:border-lime-400/40 transition-all duration-500"
            >
              {/* Header */}
              <h4 className="flex justify-between items-center text-lg font-bold text-white mb-4 uppercase tracking-wide">
                {card.title}
                <img
                  src={card.avatar}
                  alt="avatar"
                  className="w-11 h-11 rounded-full border-2 border-lime-400/50 shadow-md"
                />
              </h4>

              {/* Image */}
              <div className="text-center mb-6">
                <div className="w-44 h-44 mx-auto flex items-center justify-center">
                  <img
                    src={card.image}
                    alt="img"
                    className="max-w-full max-h-full object-contain drop-shadow-[0_0_20px_rgba(100,200,255,0.3)]"
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center">
                <div>
                  <h5 className="text-sm text-gray-400">Highest bid</h5>
                  <div className="flex items-center gap-2 text-white font-medium">
                    <FaEthereum className="text-lime-400 text-xl" />
                    <span className="text-white">3.005</span>
                    <span className="text-lime-400 font-bold">ETH</span>
                  </div>
                </div>
                <Link
                  to="/creator-details"
                  className="px-6 py-2.5 
                             bg-lime-400 text-black text-sm font-bold 
                             rounded-lg 
                             hover:scale-105 hover:bg-lime-300 
                             shadow-[0_0_15px_rgba(163,230,53,0.8)] 
                             transition-all duration-300"
                >
                  BID →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureAreaTwo;
