import React, { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const ExploreProductInner = () => {
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(90);

  const handleMinChange = (e) => {
    setMinPrice(Math.min(Number(e.target.value), maxPrice - 1));
  };

  const handleMaxChange = (e) => {
    setMaxPrice(Math.max(Number(e.target.value), minPrice + 1));
  };

  const categories = [
    { name: "Monkey Jet", count: 3 },
    { name: "Black Coin", count: 8 },
    { name: "Legendary", count: 6 },
  ];

  const recentNews = [
    { title: "Monkey Jet", price: "3.05 ETH", img: "1" },
    { title: "Black Coin", price: "3.05 ETH", img: "2" },
    { title: "Legendary", price: "3.05 ETH", img: "3" },
  ];

  const instaImages = ["5", "6", "7", "8"];

  const products = [
    { id: 1, img: "5", price: "25 SOL", bid: "3.005 ETH" },
    { id: 2, img: "6", price: "25 SOL", bid: "3.005 ETH" },
    { id: 3, img: "7", price: "25 SOL", bid: "3.005 ETH" },
    { id: 4, img: "8", price: "25 SOL", bid: "3.005 ETH" },
    { id: 5, img: "9", price: "25 SOL", bid: "3.005 ETH" },
    { id: 6, img: "10", price: "25 SOL", bid: "3.005 ETH" },
  ];

  return (
    <div className="bg-[#0b1120] min-h-screen py-16 text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full lg:w-1/4 flex flex-col space-y-8" data-aos="fade-right" data-aos-duration="1000">
            
            {/* Price Filter */}
            <div className="bg-[#131927] p-6 rounded-xl border border-[#222c38]" data-aos="fade-up" data-aos-duration="1200">
              <h4 className="text-lg font-semibold uppercase border-b border-[#222c38] pb-3 mb-5">
                Filter Title
              </h4>
              <form>
                <div className="mb-6">
                  <div className="relative h-1 bg-gray-600 rounded-md mb-8">
                    <div 
                      className="absolute h-1 bg-yellow-400 rounded-md"
                      style={{ 
                        left: `${minPrice}%`, 
                        right: `${100 - maxPrice}%` 
                      }}
                    ></div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={minPrice}
                      onChange={handleMinChange}
                      className="absolute w-full h-1 opacity-0 cursor-pointer z-10"
                    />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={maxPrice}
                      onChange={handleMaxChange}
                      className="absolute w-full h-1 opacity-0 cursor-pointer z-10"
                    />
                    <div 
                      className="absolute w-4 h-4 bg-yellow-400 rounded-full -top-1.5 -ml-2"
                      style={{ left: `${minPrice}%` }}
                    ></div>
                    <div 
                      className="absolute w-4 h-4 bg-yellow-400 rounded-full -top-1.5 -ml-2"
                      style={{ left: `${maxPrice}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    className="bg-yellow-400 text-black py-2 px-6 rounded font-semibold hover:bg-yellow-500 transition text-sm"
                  >
                    FILTER
                  </button>
                  <span className="text-sm text-gray-300">
                    Price :{minPrice} - {maxPrice}
                  </span>
                </div>
              </form>
            </div>

            {/* Categories */}
            <div className="bg-[#131927] p-6 rounded-xl border border-[#222c38]" data-aos="fade-up" data-aos-duration="1400">
              <h4 className="text-lg font-semibold uppercase border-b border-[#222c38] pb-3 mb-5">
                Filter Title
              </h4>
              <ul className="space-y-3">
                {categories.map(({ name, count }) => (
                  <li key={name} className="flex items-center justify-between text-gray-300 hover:text-yellow-400 transition">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                      <span>{name}</span>
                    </div>
                    <span className="text-sm text-gray-400">({count})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent News */}
            <div className="bg-[#131927] p-6 rounded-xl border border-[#222c38]" data-aos="fade-up" data-aos-duration="1600">
              <h4 className="text-lg font-semibold uppercase border-b border-[#222c38] pb-3 mb-5">
                Recent News
              </h4>
              <ul className="space-y-5">
                {recentNews.map(({ title, price, img }, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <img
                      src={`/img/widget/${img}.png`}
                      alt={title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <Link
                        to="/blog-details"
                        className="text-white font-semibold hover:text-yellow-400 block"
                      >
                        {title}
                      </Link>
                      <p className="text-gray-300">{price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instagram */}
            <div className="bg-[#131927] p-6 rounded-xl border border-[#222c38]" data-aos="fade-up" data-aos-duration="1800">
              <h4 className="text-lg font-semibold uppercase border-b border-[#222c38] pb-3 mb-5">
                Recent News
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {instaImages.map((img) => (
                  <img
                    key={img}
                    src={`/img/top-auction/${img}.png`}
                    alt={`Instagram ${img}`}
                    className="rounded-lg cursor-pointer hover:scale-105 transition-transform"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4" data-aos="fade-left" data-aos-duration="2000">
            
            {/* Toolbar */}
            <div className="flex flex-wrap justify-between items-center border-b border-[#222c38] mb-8 pb-4">
              <p className="text-gray-300 text-sm">
                <span className="text-yellow-400 font-semibold">Showing 1 - 9</span> of 16 Results
              </p>
              <div className="flex items-center space-x-3">
                <span className="text-gray-300 text-sm hidden sm:block">Sort by:</span>
                <select className="bg-[#131927] text-gray-300 py-2 px-3 rounded focus:outline-none border border-[#222c38] text-sm">
                  <option>Recent added</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-[#131927] rounded-xl p-5 border border-[#222c38] hover:shadow-lg hover:border-yellow-400/30 transition-all" data-aos="fade-up" data-aos-duration="2200">
                  

                  {/* Product Image */}
                  <div className="thumb mb-4 flex justify-center">
                    <img
                      src={`/img/top-auction/${product.img}.png`}
                      alt={`Product ${product.id}`}
                      className="w-full h-48 object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="details">
                    
                    {/* Creator Info and Price */}
                    <div className="flex justify-between items-center border-b border-[#222c38] pb-4 mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-400">
                          <img
                            src="/img/creator-2/u-1.png"
                            alt="Creator"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h5 className="text-white font-semibold">Legendary</h5>
                          <span className="text-gray-400 text-sm">@Danil03</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-yellow-400 font-semibold block">{product.price}</span>
                        <div className="text-yellow-400 text-sm">
                          {"☆".repeat(5)}
                        </div>
                      </div>
                    </div>

                    {/* Bid Section */}
                    <div className="flex justify-between items-center">
                      <div>
                        <h5 className="text-gray-400 text-sm mb-1">Highest bid</h5>
                        <Link to="#" className="text-yellow-400 font-semibold hover:underline">
                          ⚡ {product.bid}
                        </Link>
                      </div>
                      <button className="bg-yellow-400 text-black py-2 px-4 rounded font-semibold hover:bg-yellow-500 transition text-sm">
                        BID →
                      </button>
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

export default ExploreProductInner;
