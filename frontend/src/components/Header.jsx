import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { GiAlienBug } from "react-icons/gi";
import { LuChartNoAxesColumnIncreasing } from "react-icons/lu";
import { FiSearch, FiArrowRightCircle } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";

const HeaderOne = () => {
  const [scroll, setScroll] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    // ✅ Clear token or session (agar use kar rahe ho)
    localStorage.removeItem("token");
    sessionStorage.clear();

    // ✅ Redirect to "/"
    navigate("/");
  };

  const menuItems = [
    { label: "Home", path: "/home" },
    { label: "About Us", path: "/about" },
    { label: "Tournament", path: "/tournament" },
    {
      label: "Shop",
      path: "/shop",
      subMenu: [
        { label: "Shop", path: "/shop" },
        { label: "Explore Product", path: "/explore-product" }
       
      ],
    },
    {
      label: "Pages",
      path: "/blog",
      subMenu: [
        { label: "Blog", path: "/blog" },
        { label: "Creators", path: "/creators" },
        { label: "Service", path: "/service" },
        { label: "Help Center", path: "/help-center" },
        { label: "Contact Us", path: "/contact" },
      ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll ? "bg-[#0a0f1c] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/img/logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-1 uppercase font-bold text-white tracking-wide">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 flex items-center transition ${
                    isActive
                      ? "text-[#caff33]"
                      : "text-white hover:text-[#caff33]"
                  }`
                }
              >
                <span className="relative z-10 flex items-center">
                  {item.label}
                  {item.subMenu && (
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  )}
                </span>

                {/* Hover effect line */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#caff33] transition-all duration-300 group-hover:w-full"></span>
              </NavLink>

              {/* Dropdown Menu */}
              {item.subMenu && activeDropdown === index && (
                <ul className="absolute left-0 mt-2 w-56 bg-[#0a0f1c] border border-gray-800 rounded-lg shadow-xl py-3 z-50">
                  {item.subMenu.map((sub, i) => (
                    <li key={i}>
                      <NavLink
                        to={sub.path}
                        className={({ isActive }) =>
                          `block px-6 py-2 text-sm transition ${
                            isActive
                              ? "text-[#caff33]"
                              : "text-gray-300 hover:text-[#caff33] hover:bg-gray-800"
                          }`
                        }
                      >
                        {sub.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center space-x-6">
          {/* Search */}
          <button className="text-white hover:text-[#caff33] transition">
            <FiSearch size={20} />
          </button>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-white hover:text-[#caff33] transition"
          >
            <HiOutlineShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-[#caff33] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </Link>

          {/* Chart Menu */}
          <button className="text-white hover:text-[#caff33] transition">
            <LuChartNoAxesColumnIncreasing size={22} />
          </button>

          {/* Connect Button */}
          <Link
            to="#"
            className="hidden lg:flex items-center px-6 py-3 bg-[#caff33] text-black font-bold rounded-md hover:bg-[#b3e62a] transition uppercase tracking-wide"
          >
            Connect
            <FiArrowRightCircle className="ml-2" size={18} />
          </Link>

          {/* ✅ Logout Button */}
          <button
            onClick={handleLogout}
            className= "hidden lg:flex items-center px-6 py-3  border-gray-700 bg-gradient-to-r from-[#1f2937] to-[#111827] text-white border hover:border-[#caff33] hover:text-[#caff33] font-bold rounded-md  transition uppercase tracking-wide"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default HeaderOne;
