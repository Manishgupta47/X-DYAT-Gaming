import React from "react";
import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat py-16 text-white"
      style={{
        backgroundImage: 'url("/img/footer/bg-2.png")', // Background image URL
      }}
    >
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <Link to="/" className="footer-logo">
  <img
    src="/img/logo.png" // Replace with actual logo path
    alt="logo"
    className="h-10 w-auto" // Reduced the height of the logo
  />
</Link>


        {/* Contact Info */}
<p className="text-gray-200 text-lg">
  +0 123 456 7890 -{" "}
  <span className="font-medium text-white">info@yourmail.com</span>
</p>

{/* Navigation Links */}
<ul className="flex flex-wrap justify-center gap-6 text-lg font-medium text-gray-300">
  <li>
    <Link
      to="/"
      className="hover:text-white transition-colors duration-300"
    >
      Home
    </Link>
  </li>
  <li>
    <Link
      to="/about"
      className="hover:text-white transition-colors duration-300"
    >
      About Us
    </Link>
  </li>
  <li>
    <Link
      to="/tournament"
      className="hover:text-white transition-colors duration-300"
    >
      Tournament
    </Link>
  </li>
  <li>
    <Link
      to="/news"
      className="hover:text-white transition-colors duration-300"
    >
      News
    </Link>
  </li>
  <li>
    <Link
      to="/pages"
      className="hover:text-white transition-colors duration-300"
    >
      Pages
    </Link>
  </li>
  <li>
    <Link
      to="/contact"
      className="hover:text-white transition-colors duration-300"
    >
      Contact
    </Link>
  </li>
</ul>


          {/* Divider Line */}
          <img
  src="/img/footer/line.png" // Divider line image
  alt="divider"
  className="w-120 h-1 mx-auto opacity-80" // Increased width and height
/>

        </div>

       {/* Copyright */}
<p className="mt-8 text-gray-300 text-sm text-center">
  ©2024 – by{" "}
  <span className="font-semibold text-yellow-400">XDYAT</span> © All Rights
  Reserved
</p>

      </div>
    </footer>
  );
};

export default FooterTwo;
