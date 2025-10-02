import React, { useEffect, useState } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

// Mocked Data
const roadmapData = [
  {
    icon: "/img/roadmap/1.svg", // Plane icon
    title: "Token Burning",
    entries: [
      "Land Creation & Building",
      "Android Mobile",
      "iOS Open Beta",
      "Land Creation & Building",
    ],
  },
  {
    icon: "/img/roadmap/2.svg", // NFT box icon
    title: "NFT Holders",
    entries: [
      "Land Creation & Building",
      "Android Mobile",
      "iOS Open Beta",
      "Land Creation & Building",
    ],
  },
];

const detailTabs = {
  roadmap: {
    headline: <>Earn Great Rewards Derwin gukets the unexpected endorsement deal, an old flame.</>,
    label: (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="18.25" height="18.25">
          <circle cx="8.75" cy="8.75" r="8" stroke="#262e38" strokeWidth="1.5" fill="#ebff38" />
        </svg>
        <span className="ml-2">Great Rewards Derwin ( Friend )</span>
      </>
    ),
  },
  store: {
    headline: <>Victory store Awards! Derwin gets the unexpected endorsement deal, an old flame.</>,
    label: (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="18.25" height="18.25">
          <circle cx="8.75" cy="8.75" r="8" stroke="#262e38" strokeWidth="1.5" fill="#ebff38" />
        </svg>
        <span className="ml-2">Victory Rewards Derwin ( Friend )</span>
      </>
    ),
  },
};

const RoadmapOne = () => {
  const [activeTab, setActiveTab] = useState("roadmap");

  // Initialize AOS animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS animations
  }, []);

  return (
    <div
      className="w-full min-h-screen py-16 px-4 bg-[#10141f] relative"
      style={{ backgroundImage: 'url("/img/creator/bg2.png")' }}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-between">
        {/* Left Section with Tabs */}
        <div className="w-full lg:w-[28%] xl:w-[24%] mb-10">
          <div>
            <h6 className="text-[#ebff38] text-base font-bold flex items-center mb-1">
              Wish-Keeper
              <span className="ml-2">
                <img src="/img/icon/shalep-1.png" alt="Wish Icon" className="inline-block w-15 h-2.5 align-middle" />
              </span>
            </h6>
            <h2 className="text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
              ROADMAP<br />
              VICTORY<br />
              ISLAND
            </h2>
            <div className="flex border-b border-gray-600 mb-3">
              <button
                className={`font-semibold ${activeTab === "roadmap" ? "text-white border-b-4 border-[#ebff38]" : "text-gray-400"} pb-2 mr-6 flex items-center uppercase tracking-wide transition-all`}
                type="button"
                onClick={() => setActiveTab("roadmap")}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                ROADMAP
                <img src="/img/icon/6.png" alt="Roadmap" className="inline-block ml-2 w-4 h-4" />
              </button>
              <button
                className={`font-semibold ${activeTab === "store" ? "text-white border-b-4 border-[#ebff38]" : "text-gray-400"} pb-2 flex items-center uppercase tracking-wide transition-all`}
                type="button"
                onClick={() => setActiveTab("store")}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                VICTORY STORE
                <img src="/img/icon/7.png" alt="Victory Store" className="inline-block ml-2 w-4 h-4" />
              </button>
            </div>
            {/* Detail Panel for Tabs */}
            <div data-aos="fade-up" data-aos-delay="300">
              <p className="text-gray-300 mb-2">
                {activeTab === "roadmap" ? detailTabs.roadmap.headline : detailTabs.store.headline}
              </p>
              <p className="flex items-center text-[#ebff38] font-medium">
                {activeTab === "roadmap" ? detailTabs.roadmap.label : detailTabs.store.label}
              </p>
            </div>
          </div>
        </div>

        {/* Roadmap/NFT Cards */}
        {roadmapData.map((item, idx) => (
          <div
            key={item.title}
            className="w-full md:w-[48%] lg:w-[34%] mb-8"
            data-aos="fade-up"
            data-aos-delay={`${idx * 200}`}
          >
            <div
              className="py-8 px-6 relative flex flex-col items-center min-h-[410px] overflow-hidden"
              data-aos="zoom-in"
            >
              {/* Card background image */}
              <div
                className="absolute top-0 left-0 w-full h-full opacity-40 z-0"
                style={{
                  background: `url("/img/roadmap/bg.png") center center / cover no-repeat`,
                }}
              />
              {/* Icon */}
              <img
                src={item.icon}
                alt={item.title}
                className="w-18 h-18 mb-4 relative z-10"
              />

              {/* Title */}
              <h3 className="text-3xl font-bold text-white mb-3 text-center leading-tight relative z-10">
                {item.title.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? "block" : undefined}>{word}</span>
                ))}
              </h3>
              <ul className="space-y-2 w-full max-w-xs mx-auto mb-4 relative z-10">
                {item.entries.map((entry, ei) => (
                  <li key={ei} className="flex items-center text-[#ebff38] font-medium">
                    <span className="inline-block w-3 h-3 bg-[#ebff38] rounded-full mr-2"></span>
                    <span className="text-gray-200">{entry}</span>
                  </li>
                ))}
              </ul>
              <div className="w-full flex justify-center my-6 relative z-10">
                <svg
                  width="278"
                  height="3"
                  viewBox="0 0 278 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M139.000,-0.002 C215.767,-0.002 278.000,0.670 278.000,1.498 C278.000,2.327 215.767,2.999 139.000,2.999 C62.232,2.999 -0.000,2.327 -0.000,1.498 C-0.000,0.670 62.232,-0.002 139.000,-0.002 Z"
                    fill="#0a0909"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white text-center relative z-10">
                Season 1
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Arrow Button */}
      <button className="fixed bottom-6 right-6 w-12 h-12 rounded-lg bg-[#ebff38] flex items-center justify-center shadow-xl hover:scale-105 transition">
        <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
          <path d="M12 8v8m0 0 4-4m-4 4-4-4" stroke="#10141f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default RoadmapOne;
