import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // <-- axios import
import AOS from "aos";
import "aos/dist/aos.css";

const LoginInner = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      // Save token in localStorage
      localStorage.setItem("token", res.data.token);

      // Redirect to /home
      navigate("/home");
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1d] to-[#131a2d] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row bg-[#0f1729] rounded-2xl shadow-2xl overflow-hidden border border-[#222c38]">
          {/* Left Column - Login Form */}
          <div
            className="w-full lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center"
            data-aos="fade-right"
          >
            <div className="mb-10" data-aos="fade-up" data-aos-delay="200">
              <h6 className="text-xs font-semibold text-[#d5ff3f] uppercase tracking-widest mb-4">
                START FOR FREE
              </h6>
              <h2 className="text-5xl font-bold text-white mb-4">
                LOG IN <span className="text-[#d5ff3f]">ACCOUNT</span>
              </h2>
              <p className="text-white text-lg">
                New Member?{" "}
                <Link
                  className="text-[#d5ff3f] hover:text-white font-medium transition-colors underline"
                  to="/register"
                >
                  Create Account
                </Link>
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative" data-aos="fade-up" data-aos-delay="300">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="w-full py-4 px-5 bg-[#131927] border-2 border-[#2a3648] text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d5ff3f] focus:border-[#d5ff3f] transition-all text-sm placeholder-gray-500 hover:border-[#3a4658]"
                  required
                />
              </div>

              <div className="relative" data-aos="fade-up" data-aos-delay="400">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full py-4 px-5 bg-[#131927] border-2 border-[#2a3648] text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d5ff3f] focus:border-[#d5ff3f] transition-all text-sm placeholder-gray-500 hover:border-[#3a4658]"
                  required
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                className="block mx-auto bg-yellow-400 text-black py-2 px-6 rounded font-semibold hover:bg-yellow-500 transition text-sm"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                LOG IN
              </button>

              <div
                className="text-center pt-2"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <button
                  className="text-md rounded text-white hover:text-[#d5ff3f] uppercase tracking-wider transition-colors"
                  type="button"
                >
                  forget your password
                </button>
              </div>
            </form>
          </div>

         {/* Right Column - Illustration + Social */} <div className="w-full lg:w-1/2 bg-gradient-to-b from-[#131927] to-[#0a0f1d] p-10 lg:p-14 flex flex-col justify-center border-l border-[#222c38]" data-aos="fade-left" > <div className="text-center mb-10" data-aos="zoom-in" data-aos-delay="200" > <img className="mx-auto w-90 h-auto rounded-2xl shadow-lg" src="/img/login.png" alt="login illustration" /> </div> {/* Social Buttons (same as before) */} </div> </div> </div> </div>
  );
};

export default LoginInner;
