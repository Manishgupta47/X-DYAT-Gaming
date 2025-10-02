import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HelpCenterInner = () => {
  const [activeAccordion, setActiveAccordion] = useState("collapseOne");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? "" : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        {/* Header with breadcrumb */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10"
          data-aos="fade-up"
        >
          <div>
            <nav className="flex mb-4" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link
                    to="/"
                    className="inline-flex items-center text-sm text-gray-400 hover:text-indigo-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mx-2 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm font-medium text-gray-400 md:ml-2">
                      Help Center
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
              Help Center
            </h1>
            <p className="mt-2 text-gray-400">
              Find answers to common questions and issues
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-1/3" data-aos="fade-right">
            {/* Search Widget */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-850 p-6 rounded-xl border border-gray-700 shadow-lg mb-6">
              <h4 className="text-lg font-bold text-white mb-3">
                SEARCH A <span className="text-indigo-400">QUESTION</span>
              </h4>
              <p className="mb-4 text-sm text-gray-400">
                Type your question or keyword
              </p>
              <form className="relative">
                <input
                  type="text"
                  placeholder="Keyword..."
                  className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm placeholder-gray-500"
                />
                <button
                  className="absolute right-2 top-2 bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition-colors"
                  type="submit"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>

            {/* Categories */}
            <div
              className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl border border-gray-700 shadow-md"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="p-4 border-b border-gray-700">
                <h3 className="text-md font-semibold text-white">
                  Categories
                </h3>
              </div>
              <div className="p-2">
                {[
                  "Payment & Wallet",
                  "NFT Marketplace",
                  "General Questions",
                  "Account & Security",
                ].map((item, index) => (
                  <Link
                    key={index}
                    to="#"
                    className="flex items-center py-3 px-3 text-gray-300 hover:bg-gray-700 hover:text-indigo-400 rounded-md transition-colors text-sm"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <span className="w-2 h-2 rounded-full bg-indigo-400 mr-3"></span>
                    {item}
                    <svg
                      className="w-3.5 h-3.5 ml-auto text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-2/3" data-aos="fade-left">
            {/* Accordion */}
            <div className="space-y-5">
              {[
                {
                  id: "collapseOne",
                  title: "What Is A Non Fin Bun Ticket",
                  content:
                    "NFT Reality Free item's accordion body: the Lorem Ipsum dolor sit amet, elit. Eligendi expedita molestias ab ut ea vitae eum ipsa velit does limit overflow.",
                },
                {
                  id: "collapseTwo",
                  title: "Where I check Bun Ticket",
                  content: (
                    <ol className="list-decimal pl-5 space-y-1 text-gray-400">
                      <li>Log in to your account</li>
                      <li>Click on your profile icon in the top right corner</li>
                      <li>Select 'My Collections' from the dropdown menu</li>
                      <li>
                        Find the ticket you're looking for in your collection
                      </li>
                    </ol>
                  ),
                },
                {
                  id: "collapseThree",
                  title: "Kind Of NFT Marketplace",
                  content: (
                    <ul className="list-disc pl-5 space-y-1 text-gray-400">
                      <li>On Of The Kind Of NFT Marketplace</li>
                      <li>Exclusive Payment Contract & Wallet</li>
                      <li>Voting Payment & Wallet</li>
                      <li>Kind Of NFT Marketplace</li>
                    </ul>
                  ),
                },
                {
                  id: "collapseFour",
                  title: "Exclusive Payment Contract & Wallet",
                  content:
                    "Our exclusive payment contract and wallet system provides a secure and seamless experience for NFT transactions with enhanced security features and multi-currency support.",
                },
              ].map((item, index) => (
                <div
                  key={item.id}
                  className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border border-gray-700 shadow-md overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <h2>
                    <button
                      className="flex justify-between items-center w-full p-5 text-left font-semibold text-white hover:bg-gray-700 transition-colors"
                      onClick={() => toggleAccordion(item.id)}
                    >
                      <span className="text-sm">{item.title}</span>
                      <svg
                        className={`w-5 h-5 transition-transform ${
                          activeAccordion === item.id
                            ? "transform rotate-180 text-indigo-400"
                            : "text-gray-400"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeAccordion === item.id ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="p-5 border-t border-gray-700 text-gray-400 text-sm">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterInner;
