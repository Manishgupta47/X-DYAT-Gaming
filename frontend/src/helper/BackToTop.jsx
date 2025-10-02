// components/BackToTop.jsx
import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {visible && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-lime-400 text-black shadow-lg hover:bg-lime-300 transition"
        >
          <FiArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default BackToTop;
