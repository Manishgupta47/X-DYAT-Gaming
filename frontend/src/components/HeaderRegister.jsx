import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderOne = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      label: "Login",
      path: "/",
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
        <ul className="hidden lg:flex items-center space-x-4 font-bold">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full transition-all duration-300 text-sm font-semibold ${
                    isActive
                      ? "bg-[#caff33] text-black shadow-lg"
                      : "bg-gradient-to-r from-[#1f2937] to-[#111827] text-white border border-gray-700 hover:border-[#caff33] hover:text-[#caff33]"
                  }`
                }
                end
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default HeaderOne;
