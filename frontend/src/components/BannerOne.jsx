import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BannerOne = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat flex items-center pt-[120px] w-[1391px] h-[750px]"
      style={{ backgroundImage: 'url("/img/banner/3.png")' }}
    >
      {/* Left chain image with very slow rotate */}
      <motion.img
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }} // slow rotation
        className="absolute top-16 left-10 w-14 md:w-20"
        src="/img/banner/5.png"
        alt="chain-left"
      />

      {/* Right chain image with very slow rotate (reverse) */}
      <motion.img
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }} // reverse slow rotation
        className="absolute top-16 right-10 w-14 md:w-20"
        src="/img/banner/5.png"
        alt="chain-right"
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            className="text-white space-y-6 lg:pr-10"
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[80px] font-extrabold leading-tight tracking-tight uppercase">
              {/* First line */}
              <span className="flex items-center gap-2 font-light whitespace-nowrap">
                <span>Unleash the</span>
                <img
                  src="/img/banner/4.png"
                  alt="line"
                  className="inline-block w-12 sm:w-16 md:w-20 lg:w-28 align-middle"
                />
              </span>

              {/* Second line */}
              <span className="flex items-center gap-2 mt-2">
                Create <span className="text-lime-400">NFT’s</span>
              </span>

              {/* Third line */}
              <span className="flex items-center gap-2 mt-2">
                Of <span className="text-lime-400">Art</span>
              </span>
            </h1>

            {/* Subheading */}
            <h4 className="text-2xl md:text-3xl tracking-widest text-white uppercase font-extrabold mt-6">
              General Information
            </h4>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <Link
                to="/about"
                className="inline-block bg-gradient-to-r from-lime-400 to-cyan-400 text-black font-bold py-3 px-8 rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Explore More
              </Link>
            </motion.div>

            {/* Decorative small image */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <img
                src="/img/banner/1.png"
                alt="decor"
                className="w-[813px] h-[100px] object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative flex justify-center lg:justify-end mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Main Banner Image with floating effect */}
            <motion.img
              src="/img/banner/2.png"
              alt="banner"
              className="w-72 md:w-96 lg:w-[420px]"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} // slower float
            />

            {/* Shapes */}
            <motion.img
              src="/img/banner/6.png"
              alt="shape"
              className="absolute -top-4 right-12 w-16 md:w-24"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} // slow pulse
            />
            <motion.img
              src="/img/banner/7.png"
              alt="shape"
              className="absolute bottom-0 -left-6 w-14 md:w-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }} // smooth spin
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
