import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "swiper/css";
import "swiper/css/navigation";

const BlockChainGalleryAreaOne = () => {
  return (
    <div className="bg-[#0f111a] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h6 className="text-[#d4f10f] text-sm uppercase tracking-wider mb-3 font-bold">
            Our Blockchain
          </h6>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-snug">
            Powered by Blockchain
          </h2>
        </motion.div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            speed={1500}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".array-next",
              prevEl: ".array-prev",
            }}
            breakpoints={{
              1499: { slidesPerView: 5 },
              1199: { slidesPerView: 3 },
              991: { slidesPerView: 3 },
              767: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          >
            {/* Slides */}
            {[1, 2, 3, 4, 5, 1, 2, 3].map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                {({ isActive }) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative overflow-hidden rounded-2xl shadow-lg border transition-all duration-500 mx-auto flex items-center
                      ${
                        isActive
                          ? "w-72 h-96 md:w-80 md:h-[28rem] scale-110 border-[#d4f10f] shadow-[0_0_25px_#d4f10f] z-20"
                          : "w-56 h-72 md:w-60 md:h-[22rem] scale-90 opacity-60 border-gray-700"
                      }`}
                    style={{
                      backgroundImage: `url('/img/gallery/${item}.png')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Content inside card */}
                    <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                      <h3 className="text-lg font-semibold">
                        Blockchain #{item}
                      </h3>
                      <p className="text-sm opacity-80">Decentralized Future</p>
                    </div>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 flex items-center z-20">
            <button
              className="array-prev w-12 h-12 bg-[#1a1c29] border border-gray-700 
              hover:bg-[#d4f10f] hover:text-black text-white rounded-full flex 
              items-center justify-center shadow-lg transition"
            >
              <SlArrowLeft className="text-2xl" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center z-20">
            <button
              className="array-next w-12 h-12 bg-[#1a1c29] border border-gray-700 
              hover:bg-[#d4f10f] hover:text-black text-white rounded-full flex 
              items-center justify-center shadow-lg transition"
            >
              <SlArrowRight className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockChainGalleryAreaOne;
