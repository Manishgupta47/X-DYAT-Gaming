import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ShopInner = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data); // initialize with full list
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Apply filters when minPrice, maxPrice, or categories change
  useEffect(() => {
    let filtered = products.filter(
      (product) =>
        product.price >= minPrice &&
        product.price <= maxPrice &&
        (selectedCategories.length === 0 ||
          selectedCategories.includes(product.category))
    );
    setFilteredProducts(filtered);
  }, [minPrice, maxPrice, selectedCategories, products]);

  const handleMinChange = (e) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxChange = (e) => {
    setMaxPrice(Number(e.target.value));
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const categories = [
    { name: "Monkey Jet", count: 3 },
    { name: "Black Coin", count: 8 },
    { name: "Legendary", count: 6 },
  ];

  const recentNews = [
    { title: "Baseball Cap", price: "€50.00", img: "1" },
    { title: "Baseball Cap", price: "€50.00", img: "2" },
    { title: "Baseball Cap", price: "€50.00", img: "3" },
  ];

  const instaImages = ["5", "6", "7", "8"];

  return (
    <div className="bg-[#0b1120] min-h-screen py-16 text-white">
      <div className="container mx-auto max-w-8xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-9">
          {/* Sidebar */}
          <aside
            className="w-full lg:w-1/4 flex flex-col space-y-6 pt-2"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {/* Price Filter */}
            <div
              className="bg-[#131927] p-5 rounded-xl border border-[#222c38]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-base font-semibold uppercase border-b border-[#222c38] pb-3 mb-4">
                Price Filter
              </h3>
              <form>
                <div className="mb-5">
                  <label className="block text-xs text-gray-300 mb-1">
                    Min Price: {minPrice}
                  </label>
                  <input
                    type="number"
                    value={minPrice}
                    onChange={handleMinChange}
                    className="w-full p-1 rounded bg-[#0b1120] border border-[#222c38] text-white text-sm"
                  />

                  <label className="block text-xs text-gray-300 mt-3 mb-1">
                    Max Price: {maxPrice}
                  </label>
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={handleMaxChange}
                    className="w-full p-1 rounded bg-[#0b1120] border border-[#222c38] text-white text-sm"
                  />
                </div>
              </form>
            </div>

            {/* Categories */}
            <div
              className="bg-[#131927] p-5 rounded-xl border border-[#222c38]"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-base font-semibold uppercase border-b border-[#222c38] pb-3 mb-2">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map(({ name, count }) => (
                  <li key={name}>
                    <label className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(name)}
                          onChange={() => toggleCategory(name)}
                          className="accent-yellow-400 w-3 h-3"
                        />
                        <span className="group-hover:text-yellow-400 transition text-sm">
                          {name}
                        </span>
                      </div>
                      <span className="text-gray-400 text-xs">({count})</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent News */}
            <div
              className="bg-[#131927] p-5 rounded-xl border border-[#222c38]"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h3 className="text-base font-semibold uppercase border-b border-[#222c38] pb-3 mb-4">
                Recent News
              </h3>
              <ul className="space-y-4">
                {recentNews.map(({ title, price, img }, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <img
                      src={`/img/widget/${img}.png`}
                      alt={title}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div>
                      <Link
                        to="/blog-details"
                        className="text-white font-semibold hover:text-yellow-400 block text-sm"
                      >
                        {title}
                      </Link>
                      <p className="text-gray-300 text-xs">{price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instagram */}
            <div
              className="bg-[#131927] p-5 rounded-xl border border-[#222c38]"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h3 className="text-base font-semibold uppercase border-b border-[#222c38] pb-3 mb-4">
                Instagram
              </h3>
              <div className="grid grid-cols-2 gap-2">
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
          </aside>

          {/* Product Section */}
          <main
            className="w-full lg:w-3/4 mb-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {/* Toolbar */}
            <div className="flex flex-wrap justify-between items-center border-b border-[#222c38] mb-6 pb-3">
              <p className="text-gray-300 text-xs md:text-sm">
                <span className="text-yellow-400 font-semibold">
                  Showing {filteredProducts.length}
                </span>{" "}
                of {products.length} Results
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-gray-300 text-xs hidden sm:block">
                  Sort by:
                </span>
                <select className="bg-[#131927] text-gray-300 py-1.5 px-2 rounded focus:outline-none border border-[#222c38] text-xs">
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Products */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <Link
                  key={product.ProductId}
                  to={`/product-details/${product.ProductId}`} // MongoDB _id
                  className="bg-[#131927] rounded-lg p-5 border border-[#222c38] hover:shadow-md hover:border-yellow-400/20 transition-all duration-300 group block"
                  data-aos="fade-up"
                >
                  <div className="overflow-hidden rounded-md mb-4 flex justify-center">
                    <img
                      src={`http://localhost:5000${product.image}`}
                      alt={product.name}
                      className="transform group-hover:scale-105 transition duration-300 w-[170px] h-[160px] object-cover"
                    />
                  </div>
                  <h5 className="text-white text-center font-medium text-base">
                    {product.name}
                  </h5>
                  <div className="flex justify-center text-yellow-400 mt-2 text-sm">
                    {"★".repeat(product.rating)}
                  </div>
                  <p className="text-yellow-400 text-center font-semibold mt-2 text-base">
                    €{product.price}
                  </p>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ShopInner;
