import React, { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const CartCount = () => {
  let [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center border border-[#222c38] rounded-lg overflow-hidden bg-[#131927]">
      <button
        className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-[#222c38] transition"
        onClick={handleDecrement}
      >
        -
      </button>
      <input
        type="number"
        min={1}
        max={100}
        value={count}
        readOnly
        className="w-12 h-10 text-center bg-transparent text-white border-x border-[#222c38] focus:outline-none"
      />
      <button
        className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-[#222c38] transition"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

const CheckoutCartInner = () => {
  const cartItems = [
    { id: 1, name: "Baseball Cap", price: "€50.00", image: "2.png" },
    { id: 2, name: "Baseball Cap", price: "€50.00", image: "4.png" }
  ];

  return (
    <div className="bg-[#0b1120] min-h-screen py-16 text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Checkout Form - Left Side */}
          <div className="w-full lg:w-1/2" data-aos="fade-right" data-aos-duration="1000">
            <div className="bg-[#131927] rounded-xl border border-[#222c38] p-6">
              
              {/* Express Checkout */}
              <h5 className="uppercase font-semibold mb-4 text-lg">express checkout</h5>
              <div className="flex gap-3 mb-6">
                <button className="flex-1 bg-[#222c38] border border-[#333c48] rounded-lg p-3 hover:border-yellow-400 transition">
                  <img src="/img/icon/14.png" alt="Google Pay" className="mx-auto h-6" />
                </button>
                <button className="flex-1 bg-[#222c38] border border-[#333c48] rounded-lg p-3 hover:border-yellow-400 transition">
                  <img src="/img/icon/15.png" alt="Apple Pay" className="mx-auto h-6" />
                </button>
                <button className="flex-1 bg-[#222c38] border border-[#333c48] rounded-lg p-3 hover:border-yellow-400 transition">
                  <img src="/img/icon/16.png" alt="PayPal" className="mx-auto h-6" />
                </button>
              </div>

              {/* Divider */}
              <div className="relative flex items-center mb-6">
                <div className="flex-grow border-t border-[#222c38]"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-sm">OR</span>
                <div className="flex-grow border-t border-[#222c38]"></div>
              </div>

              {/* Contact Information */}
              <div className="flex justify-between items-center mb-4">
                <h5 className="uppercase font-semibold text-lg">contact information</h5>
                <p className="text-gray-400 text-sm">
                  Have an account? <Link to="/login" className="text-yellow-400 hover:underline">LOG IN</Link>
                </p>
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <label className="block text-gray-400 text-sm mb-2">Email</label>
                <input
                  type="email"
                  placeholder="info.design@gmail.com"
                  className="w-full bg-[#222c38] border border-[#333c48] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
                />
              </div>

              {/* Shipping Address */}
              <h5 className="uppercase font-semibold mb-4 text-lg">shipping address</h5>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-[#222c38] border border-[#333c48] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 uppercase text-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-[#222c38] border border-[#333c48] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 uppercase text-sm"
                  />
                </div>
              </div>

              <div className="space-y-4 mb-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full bg-[#222c38] border border-[#333c48] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 uppercase text-sm"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full bg-[#222c38] border border-[#333c48] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 uppercase text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="City"
                  className="bg-[#222c38] border border-[#333c48] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 uppercase text-sm"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="bg-[#222c38] border border-[#333c48] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 uppercase text-sm"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="bg-[#222c38] border border-[#333c48] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 uppercase text-sm"
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="bg-[#222c38] border border-[#333c48] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 uppercase text-sm"
                />
              </div>

              {/* Shipping Method */}
              <h5 className="uppercase font-semibold mb-4 text-lg">shipping method</h5>
              
              <div className="space-y-4 mb-6">
                <label className="flex items-start space-x-3 p-4 border border-[#222c38] rounded-lg hover:border-yellow-400 transition cursor-pointer">
                  <input type="radio" name="shipping" className="mt-1 accent-yellow-400" />
                  <div>
                    <h6 className="font-semibold">Home delivery</h6>
                    <p className="text-gray-400 text-sm">Takes 3-5 Business Day</p>
                  </div>
                </label>
                
                <label className="flex items-start space-x-3 p-4 border border-[#222c38] rounded-lg hover:border-yellow-400 transition cursor-pointer">
                  <input type="radio" name="shipping" className="mt-1 accent-yellow-400" />
                  <div>
                    <h6 className="font-semibold">Express delivery</h6>
                    <p className="text-gray-400 text-sm">Takes 1-2 Business Day</p>
                  </div>
                </label>
              </div>

              <button className="w-full bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition uppercase">
                Continue to payment
              </button>
            </div>
          </div>

          {/* Order Summary - Right Side */}
          <div className="w-full lg:w-1/2" data-aos="fade-left" data-aos-duration="1000">
            <div className="bg-[#131927] rounded-xl border border-[#222c38] p-6">
              
              {/* Cart Items */}
              {cartItems.map((item, index) => (
                <div key={item.id} className={`flex items-center py-6 ${index !== cartItems.length - 1 ? 'border-b border-[#222c38]' : ''}`} data-aos="fade-up" data-aos-duration="1200">
                  

                  {/* Product Image */}
                  <div className="w-20 h-20 bg-[#222c38] rounded-lg p-2 mr-4">
                    <img
                      src={`/img/product/${item.image}`}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold">{item.name}</h4>
                      <button className="text-gray-400 hover:text-yellow-400 transition">
                        ✕
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-3">
                      <select className="bg-[#222c38] border border-[#333c48] text-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-yellow-400">
                        <option>White</option>
                        <option>Red</option>
                        <option>Black</option>
                      </select>
                      <CartCount />
                    </div>

                    <div className="flex justify-between items-center">
                      <button className="text-gray-400 hover:text-yellow-400 transition text-sm">
                        Move to favorites
                      </button>
                      <span className="text-yellow-400 font-semibold text-lg">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Discount Code */}
              <div className="flex gap-3 mt-6 mb-6" data-aos="fade-up" data-aos-duration="1400">
                <input
                  type="text"
                  placeholder="discount code"
                  className="flex-1 bg-[#222c38] border border-[#333c48] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 uppercase text-sm"
                />
                <button className="bg-yellow-400 text-black font-semibold px-6 rounded-lg hover:bg-yellow-500 transition uppercase">
                  Apply
                </button>
              </div>

              {/* Order Summary */}
              <div className="space-y-3 pt-4 border-t border-[#222c38]" data-aos="fade-up" data-aos-duration="1600">
                <div className="flex justify-between items-center text-gray-300">
                  <span>Subtotal</span>
                  <span>$150.00</span>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <span>Shipping cost</span>
                  <span className="text-green-400">Free</span>
                </div>
                <div className="flex justify-between items-center text-white font-semibold text-lg pt-3 border-t border-[#222c38]">
                  <span>Total</span>
                  <span className="text-yellow-400">$155.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCartInner;
