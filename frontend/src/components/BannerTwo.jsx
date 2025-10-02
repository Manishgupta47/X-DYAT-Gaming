import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BannerTwo = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32"
      style={{ backgroundImage: 'url("/img/banner-2/bg.png")' }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-7/12 text-white space-y-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className=" text-7xl flex items-center gap-2 font-light whitespace-nowrap">
              ONLINE EYES
              <motion.img
  src="/img/banner/4.png"
  alt="decor"
  className="inline-block w-12 sm:w-16 md:w-20 lg:w-28 align-middle animate-move-smooth"
  initial={{ opacity: 0, x: -120 }} // Initial position
  animate={{ opacity: 1, x: 0 }} // Final position
  transition={{ duration: 1.6, ease: "easeOut" }} // Animation speed and easing
  data-aos="fade-up" // AOS animation trigger
  data-aos-delay="900" // AOS delay for smooth effect
/>

            </span>

            <span className="text-5xl md:text-7xl font-extrabold">
              CRYPTO{" "}
              <span className="text-lime-400 font-jersey">ACCOUNT</span>
            </span>
          </motion.h1>

          <motion.h4
            className="text-2xl md:text-3xl tracking-widest text-white uppercase font-extrabold mt-6"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            GENERAL INFORMATION
          </motion.h4>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Link
              to="/about"
              className="inline-block bg-gradient-to-r from-lime-400 to-cyan-400 text-black font-bold py-3 px-8 rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Explore More
            </Link>
          </motion.div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-5/12 mt-10 md:mt-0 relative flex justify-center">
          {/* Main Banner Image with bounce animation */}
          <motion.img
  src="/img/banner-2/1.png"
  alt="main"
  className="w-72 md:w-96"// Initial state: hidden and moved down
  animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
/>

<motion.img
  src="/img/banner-2/2.png" // Adjusting this image to bounce along with 3.png
  alt="circle"
  className="absolute w-10"
  // Start with full opacity and no rotation
  animate={{
   // Keep opacity at 1 so it doesn't fade
    rotate: [0, 360], // Rotate from 0 to 360 degrees
    x: [0, 20, 0], // Optionally add horizontal movement if you want it to move left and right while spinning
  }}
  transition={{
    duration: 3, // Duration of each full rotation
    repeat: Infinity, // Repeat the spinning animation infinitely
    ease: "linear", // Smooth linear rotation
  }}
  style={{
    top: "70%", // Position image near the bottom
    left: "5%", // Position it to the left
  }}
  data-aos="fade-up"
  data-aos-delay="500"
/>




          <motion.img
            src="/img/banner-2/3.png" // Adjusting this to be in the place of 2.png
            alt="circle"
            className="absolute top-12 right-20 w-16 animate-bounce"
            
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            data-aos="fade-up"
            data-aos-delay="700"
          />
<motion.img
  src="/img/banner-2/4.png"
  alt="small"
  className="absolute w-20 animate-move-smooth"
  initial={{ opacity: 0, x: -120 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.6, ease: "easeOut" }}
  data-aos="fade-up"
  data-aos-delay="900"
  style={{ left: "-160px", top: "180px" }}  // Positioned 580px from left and 180px from top
/>





        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
