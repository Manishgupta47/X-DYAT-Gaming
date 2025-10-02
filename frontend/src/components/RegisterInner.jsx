import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const RegisterInner = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("https://x-dyat-gaming.onrender.com/register", {
        name,
        email,
        password,
      });

      if (response.data.message === "User registered successfully") {
        alert("Registration successful!");
        navigate("/home"); // ✅ redirect after success
      }
    } catch (err) {
      console.error("Register error:", err);
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1d] to-[#131a2d] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row bg-[#0f1729] rounded-2xl shadow-2xl overflow-hidden border border-[#222c38]">
          {/* Left Column - Register Form */}
          <div
            className="w-full lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center"
            data-aos="fade-right"
          >
            <div className="mb-10" data-aos="fade-up" data-aos-delay="200">
              <h6 className="text-xs font-semibold text-[#d5ff3f] uppercase tracking-widest mb-4">
                START FOR FREE
              </h6>
              <h2 className="text-5xl font-bold text-white mb-4">
                CREATE <span className="text-[#d5ff3f]">ACCOUNT</span>
              </h2>
              <p className="text-white text-lg">
                Already have an account?{" "}
                <Link
                  className="text-[#d5ff3f] hover:text-white font-medium transition-colors underline"
                  to="/"
                >
                  Log in
                </Link>
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative" data-aos="fade-up" data-aos-delay="300">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full py-4 px-5 bg-[#131927] border-2 border-[#2a3648] text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d5ff3f] focus:border-[#d5ff3f] transition-all text-sm placeholder-gray-500 hover:border-[#3a4658]"
                  required
                />
              </div>

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

              <div className="relative" data-aos="fade-up" data-aos-delay="600">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className="w-full py-4 px-5 bg-[#131927] border-2 border-[#2a3648] text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d5ff3f] focus:border-[#d5ff3f] transition-all text-sm placeholder-gray-500 hover:border-[#3a4658]"
                  required
                />
              </div>

              <button
                type="submit"
                className="block mx-auto bg-yellow-400 text-black py-2 px-6 rounded font-semibold hover:bg-yellow-500 transition text-sm"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                REGISTER
              </button>
            </form>
          </div>

          {/* Right Column - Social Login */}
          <div
            className="w-full lg:w-1/2 bg-gradient-to-b from-[#131927] to-[#0a0f1d] p-10 lg:p-14 flex flex-col justify-center border-l border-[#222c38]"
            data-aos="fade-left"
          >
            <div className="text-center mb-10" data-aos="zoom-in" data-aos-delay="200">
              <img
                className="mx-auto w-90 h-auto rounded-2xl shadow-lg"
                src="/img/login.png"
                alt="login illustration"
              />
            </div>
            {/* Social login buttons */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterInner;
