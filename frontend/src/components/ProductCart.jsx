import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const CartCount = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="flex items-center border border-[#222c38] rounded-lg overflow-hidden bg-[#131927]">
      <button
        className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-[#222c38] transition"
        onClick={onDecrement}
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
        onClick={onIncrement}
      >
        +
      </button>
    </div>
  );
};

const ProductCart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart from backend on mount
  useEffect(() => {
    AOS.init({ duration: 1000 });
    axios
      .get("http://localhost:5000/api/cart")
      .then((res) => {
        setCartItems(res.data?.items || []);
      })
      .catch((err) => console.error("Error fetching cart:", err));
  }, []);

  // Increment quantity
  const handleIncrement = async (productId, color) => {
    try {
      await axios.post("http://localhost:5000/api/cart/add", { productId, quantity: 1, color });
      const res = await axios.get("http://localhost:5000/api/cart");
      setCartItems(res.data.items);
    } catch (err) {
      console.error("Error incrementing item:", err);
    }
  };

  // Decrement quantity
  const handleDecrement = async (productId, color) => {
    const item = cartItems.find(
      (it) => it.productId === productId && it.color === color
    );
    if (item && item.quantity > 1) {
      try {
        await axios.post("http://localhost:5000/api/cart/add", {
          productId,
          quantity: -1,
          color,
        });
        const res = await axios.get("http://localhost:5000/api/cart");
        setCartItems(res.data.items);
      } catch (err) {
        console.error("Error decrementing item:", err);
      }
    }
  };

  // Remove item
  const handleRemove = async (productId, color) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/remove/${productId}`, { data: { color } });
      const res = await axios.get("http://localhost:5000/api/cart");
      setCartItems(res.data.items);
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  return (
    <div className="bg-[#0b1120] min-h-screen py-16 text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div
            className="w-full lg:w-2/3"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="bg-[#131927] rounded-xl border border-[#222c38] p-6">
              <h2 className="text-2xl font-bold uppercase mb-6">
                Shopping Cart
              </h2>
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <div
                    key={`${item.productId}-${item.color}`}
                    className={`flex items-center py-6 ${
                      index !== cartItems.length - 1
                        ? "border-b border-[#222c38]"
                        : ""
                    }`}
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    {/* Checkbox + Image */}
                    <div className="flex items-center space-x-4 mr-6">
                      <input
                        type="checkbox"
                        className="w-5 h-5 accent-yellow-400 bg-[#222c38] border-[#222c38] rounded"
                      />
                      <div className="w-20 h-20 bg-[#222c38] rounded-lg p-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-semibold">{item.name}</h4>
                        <button
                          className="text-gray-400 hover:text-yellow-400 transition"
                          onClick={() =>
                            handleRemove(item.productId, item.color)
                          }
                        >
                          ✕
                        </button>
                      </div>

                      <div className="flex items-center space-x-4 mb-4">
                        <select
                          className="bg-[#222c38] border border-[#333c48] text-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-yellow-400"
                          value={item.color || ""}
                          disabled
                        >
                          <option>{item.color || "Default"}</option>
                        </select>
                        <CartCount
                          count={item.quantity}
                          onIncrement={() =>
                            handleIncrement(item.productId, item.color)
                          }
                          onDecrement={() =>
                            handleDecrement(item.productId, item.color)
                          }
                        />
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-yellow-400 font-semibold text-lg">
                          ${item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>No items in cart</div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div
            className="w-full lg:w-1/3"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="bg-[#131927] rounded-xl border border-[#222c38] p-6 mb-6">
              <h4 className="text-xl font-bold uppercase mb-6">
                Order Summary
              </h4>
              {/* TODO: Add order summary logic */}
            </div>
            <Link
              to="/checkout"
              className="w-full bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition text-center block"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
