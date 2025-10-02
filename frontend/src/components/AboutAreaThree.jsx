import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure you import the AOS CSS

const AboutAreaThree = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  // Card background color and rounded style
  const cardClasses =
    "bg-[#181e29] rounded-2xl py-8 px-6 flex-1 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 border border-[#232837] shadow-lg";
  
  // Card icon area circle
  const iconCircleClasses =
    "w-16 h-16 rounded-full flex items-center justify-center bg-[#141924] border-2 border-[#242934] mb-5 shadow-md";
  
  return (
    <div className="about-area relative pt-20 pb-20 bg-[#0f131c]">
      <div className="container mx-auto max-w-7xl">
        <div className="w-[800px] h-[90px] flex justify-center items-center mx-auto pb-10">
          <img
            src="/img/about/8.png"
            alt="Partner logo"
            className="object-contain w-full h-full"
            data-aos="fade-up" // Add fade-up animation to the image
            data-aos-delay="200"
          />
        </div>

        {/* Card Section */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {[{ text: "Come Play", icon: "/img/icon/1.png" },
            { text: "Gome Play", icon: "/img/icon/2.png" },
            { text: "Well Play", icon: "/img/icon/3.png" },
            { text: "Come Play", icon: "/img/icon/4.png" },
            { text: "Feature", icon: "/img/icon/5.png" }]
            .map((item, idx) => (
              <div
                key={idx}
                className={cardClasses}
                style={{ minWidth: 180, maxWidth: 220 }}
                data-aos="fade-up" // Card fade-up animation
                data-aos-delay={`${200 + idx * 100}`} // staggered delay
              >
                <div className={iconCircleClasses}>
                  <img src={item.icon} alt="icon" className="w-9 h-9" />
                </div>
                <span className="text-white font-semibold text-xl">{item.text}</span>
              </div>
          ))}
        </div>

        {/* Roadmap Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 xl:w-5/12 text-left">
            <div className="mb-4 flex items-center">
              <span className="text-[#dbfb48] font-semibold text-lg tracking-wider mr-2">Our Roadmap</span>
              <img src="/img/icon/shalep-1.png" alt="icon" className="inline w-20 h-2.5" />
            </div>
            <h2 className="text-white font-extrabold text-4xl lg:text-5xl leading-tight mb-6 uppercase"
                data-aos="fade-right" // Right fade animation
                data-aos-delay="200">
              Visual Max <br /> Confront Oblivion
            </h2>
            <p className="text-[#c1c7d0] text-base lg:text-lg mb-7 max-w-md"
                data-aos="fade-up" // Fade-up for paragraph text
                data-aos-delay="300">
              Building your own stuff, you can do that too. The ASSET CREATOR will allow creators to make things for the game’s market, just like characters.
            </p>
            <div className="flex items-center mb-8"
                data-aos="fade-up" // Fade-up for icon and text
                data-aos-delay="400">
              <img src="/img/about/2.png" alt="Earn" className="w-6 h-6 inline mr-2" />
              <span className="uppercase tracking-tight font-bold text-white text-base mr-1">| Earn Great Rewards </span>
              <span className="text-[#dbfb48] text-base font-bold">(Friend)</span>
            </div>
            <div>
              <img src="/img/shape/2.png" alt="underline" className="w-40" />
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 xl:w-7/12 flex justify-center relative">
            <img
              src="/img/about/9.png"
              alt="character visual"
              className="max-w-xl w-full rounded-xl border-4 border-[#1a2231] shadow-2xl object-cover"
              style={{ boxShadow: '0 8px 36px 0 #14192480' }}
              data-aos="zoom-in" // Zoom-in animation for image
              data-aos-delay="500"
            />
            <img
              src="/img/about/10.png"
              alt="floating element"
              className="absolute top-0 left-0 w-16 animate-bounce"
              data-aos="fade-left" // Fade-left animation for the floating element
              data-aos-delay="600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAreaThree;
