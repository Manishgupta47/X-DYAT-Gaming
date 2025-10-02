import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const CreatorAreaOne = () => {
  return (
    <div
      className="py-28 pb-20 bg-cover bg-center"
      style={{ backgroundImage: 'url("/img/creator/bg2.png")' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
        >
          <div>
            <h6 className="text-[#d4f10f] text-sm font-bold uppercase tracking-wider mb-2">
              Our NFT Creator
            </h6>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-snug">
              Top Creator of Week
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              to="/about"
              className="inline-block px-6 py-2 text-sm font-semibold text-black bg-gradient-to-r from-[#a0ff00] to-[#00ffd5] hover:opacity-90 rounded-lg shadow-md transition-all"
            >
              Explore More
            </Link>
          </div>
        </motion.div>

        {/* Creator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              mainImg: "/img/creator/4.png",
              imgs: ["/img/creator/5.png", "/img/creator/6.png", "/img/creator/7.png"],
            },
            {
              mainImg: "/img/creator/8.png",
              imgs: ["/img/creator/9.png", "/img/creator/10.png", "/img/creator/11.png"],
            },
            {
              mainImg: "/img/creator/4.png",
              imgs: ["/img/creator/5.png", "/img/creator/6.png", "/img/creator/7.png"],
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-[#10121b] border border-gray-800 shadow-lg hover:shadow-[#d4f10f]/40 hover:border-[#d4f10f] transition-all duration-500"
            >
              {/* Top Info */}
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center">
                  <motion.img
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-12 h-12 rounded-full mr-3 border-2 border-[#d4f10f]"
                    src="/img/creator/1.png"
                    alt="creator"
                  />
                  <div>
                    <h5 className="text-white font-semibold text-base">
                      Lune Studio
                    </h5>
                    <p className="text-xs text-gray-400">
                      Created by{" "}
                      <span className="text-white font-medium">
                        Ninja Hunter
                      </span>
                    </p>
                  </div>
                </div>

                {/* Heart Icon with Ellipse */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-10 h-10 rounded-full bg-[#1f2230] flex items-center justify-center text-[#d4f10f] relative"
                >
                  <FaHeart className="text-sm" />
                  <span className="absolute -bottom-2 text-xs text-gray-300">
                    86
                  </span>
                </motion.div>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-2">
                {/* Left big image */}
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={item.mainImg}
                  alt="main"
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Right 3 images */}
                <div className="grid grid-cols-2 gap-2">
                  {item.imgs.map((img, i) => (
                    <motion.img
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={img}
                      alt={`sub${i}`}
                      className={`${
                        i === 2 ? "col-span-2" : ""
                      } w-full h-full object-cover rounded-lg`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreatorAreaOne;
