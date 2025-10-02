import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "../components/Dashboard";
import OrderTracking from "../components/OrderTracking";
import ProductAdd from "../components/ProductAdd";
import ProductView from "../components/ProductView";
import CustomerManagement from "../components/CustomerManagement";

const AdminPanel = () => {
  const [adminName, setAdminName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(""); 
  const [activeSection, setActiveSection] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);  
  const [isProductsExpanded, setIsProductsExpanded] = useState(false);

  useEffect(() => {
    const fetchAdminInfo = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/admin-info`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });

        setAdminName(response.data.name);
        const generatedAvatarUrl = response.data.email
          ? `https://i.pravatar.cc/100?u=${response.data.email}`
          : 'https://i.pravatar.cc/100?u=default_avatar';
        setAvatarUrl(generatedAvatarUrl);
      } catch (err) {
        console.error("Error fetching admin info:", err);
      }
    };

    fetchAdminInfo();
  }, []);

  // Automatically expand products section when on product-related pages
  useEffect(() => {
    if (activeSection === "productAdd" || activeSection === "productView") {
      setIsProductsExpanded(true);
    }
  }, [activeSection]);

  const handleProductsClick = () => {
    setIsProductsExpanded(!isProductsExpanded);
    if (activeSection !== "productAdd" && activeSection !== "productView") {
      setActiveSection("productView");
    }
  };

  const handleProductSubsectionClick = (section) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <Dashboard />;
      case "orderTracking":
        return <OrderTracking />;
      case "productAdd":
        return <ProductAdd />;
      case "productView":
        return <ProductView />;
      case "CustomerManagement":
        return <CustomerManagement />;
      default:
        return null;
    }
  };

  // Navigation items configuration
  const navItems = [
    { id: "overview", icon: "fas fa-chart-pie", label: "Dashboard" },
    { id: "orderTracking", icon: "fas fa-shipping-fast", label: "Orders" },
    { id: "CustomerManagement", icon: "fas fa-users", label: "Customers" },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar Backdrop for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Modern Sidebar */}
      <div
        className={`bg-white shadow-2xl z-50 py-6 px-4 flex flex-col fixed top-0 left-0 h-full transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "w-64 translate-x-0" : "w-20 -translate-x-full md:translate-x-0"
        }`}
        style={{
          background: 'linear-gradient(180deg, #1a202c 0%, #2d3748 100%)'
        }}
      >
        {/* Header Section */}
        <div className="flex items-center mb-8 px-2">
          <div className="relative">
            <img
              src={avatarUrl}
              alt="Admin Avatar"
              className="h-12 w-12 rounded-full border-2 border-blue-400 shadow-lg"
            />
            <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className={`ml-3 transition-all duration-300 ${isSidebarOpen ? "opacity-100 block" : "opacity-0 hidden"}`}>
            <h1 className="text-white font-semibold text-2xl truncate max-w-[140px]">
              {adminName}
            </h1>
            <p className="text-gray-400 text-md">Administrator</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 flex-1">
          {/* Dashboard */}
          <button
            onClick={() => setActiveSection("overview")}
            className={`group flex items-center py-3 px-4 rounded-xl transition-all duration-200 hover:bg-blue-500 hover:bg-opacity-20 hover:scale-105 ${
              activeSection === "overview" 
                ? "bg-blue-500 bg-opacity-30 text-blue-400 border-r-2 border-blue-400" 
                : "text-gray-300"
            }`}
          >
            <i className="fas fa-chart-pie text-lg w-6"></i>
            <span className={`ml-3 font-medium transition-all duration-300 ${isSidebarOpen ? "opacity-100 block" : "opacity-0 hidden"}`}>
              Dashboard
            </span>
            {activeSection === "overview" && (
              <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full"></div>
            )}
          </button>

          {/* Products Section */}
          <div className="relative">
            <button
              onClick={handleProductsClick}
              className={`group flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-200 hover:bg-blue-500 hover:bg-opacity-20 hover:scale-105 w-full ${
                (activeSection === "productAdd" || activeSection === "productView") 
                  ? "bg-blue-500 bg-opacity-30 text-blue-400 border-r-2 border-blue-400" 
                  : "text-gray-300"
              }`}
            >
              <div className="flex items-center">
                <i className="fas fa-cube text-lg w-6"></i>
                <span className={`ml-3 font-medium transition-all duration-300 ${isSidebarOpen ? "opacity-100 block" : "opacity-0 hidden"}`}>
                  Products
                </span>
              </div>
              {isSidebarOpen && (
                <i 
                  className={`fas fa-chevron-down transition-transform duration-300 text-xs ${
                    isProductsExpanded ? 'rotate-180' : ''
                  }`}
                ></i>
              )}
            </button>

            {/* Product Submenu */}
            {isProductsExpanded && isSidebarOpen && (
              <div className="ml-6 mt-2 space-y-1 animate-fadeIn">
                <button
                  onClick={() => setActiveSection("productView")}
                  className={`flex items-center py-2 px-3 rounded-lg w-full text-left transition-all duration-200 hover:bg-blue-500 hover:bg-opacity-10 ${
                    activeSection === "productView" 
                      ? "text-blue-400 bg-blue-500 bg-opacity-20" 
                      : "text-gray-400"
                  }`}
                >
                  <div className={`w-1 h-1 rounded-full mr-3 ${
                    activeSection === "productView" ? "bg-blue-400" : "bg-gray-500"
                  }`}></div>
                  <span className="text-sm">View Products</span>
                </button>
                <button
                  onClick={() => setActiveSection("productAdd")}
                  className={`flex items-center py-2 px-3 rounded-lg w-full text-left transition-all duration-200 hover:bg-blue-500 hover:bg-opacity-10 ${
                    activeSection === "productAdd" 
                      ? "text-blue-400 bg-blue-500 bg-opacity-20" 
                      : "text-gray-400"
                  }`}
                >
                  <div className={`w-1 h-1 rounded-full mr-3 ${
                    activeSection === "productAdd" ? "bg-blue-400" : "bg-gray-500"
                  }`}></div>
                  <span className="text-sm">Add Product</span>
                </button>
              </div>
            )}
          </div>

          {/* Orders */}
          <button
            onClick={() => setActiveSection("orderTracking")}
            className={`group flex items-center py-3 px-4 rounded-xl transition-all duration-200 hover:bg-blue-500 hover:bg-opacity-20 hover:scale-105 ${
              activeSection === "orderTracking" 
                ? "bg-blue-500 bg-opacity-30 text-blue-400 border-r-2 border-blue-400" 
                : "text-gray-300"
            }`}
          >
            <i className="fas fa-shipping-fast text-lg w-6"></i>
            <span className={`ml-3 font-medium transition-all duration-300 ${isSidebarOpen ? "opacity-100 block" : "opacity-0 hidden"}`}>
              Order Tracking
            </span>
            {activeSection === "orderTracking" && (
              <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full"></div>
            )}
          </button>

          {/* Customers */}
          <button
            onClick={() => setActiveSection("CustomerManagement")}
            className={`group flex items-center py-3 px-4 rounded-xl transition-all duration-200 hover:bg-blue-500 hover:bg-opacity-20 hover:scale-105 ${
              activeSection === "CustomerManagement" 
                ? "bg-blue-500 bg-opacity-30 text-blue-400 border-r-2 border-blue-400" 
                : "text-gray-300"
            }`}
          >
            <i className="fas fa-users text-lg w-6"></i>
            <span className={`ml-3 font-medium transition-all duration-300 ${isSidebarOpen ? "opacity-100 block" : "opacity-0 hidden"}`}>
              Customers
            </span>
            {activeSection === "CustomerManagement" && (
              <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full"></div>
            )}
          </button>
        </nav>

        {/* Logout Button */}
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="mt-4 group flex items-center py-3 px-4 rounded-xl text-gray-300 hover:bg-red-500 hover:bg-opacity-20 hover:text-red-400 transition-all duration-200"
        >
          <i className="fas fa-sign-out-alt text-lg w-6 transform group-hover:translate-x-1 transition-transform"></i>
          <span className={`ml-3 font-medium transition-all duration-300 ${isSidebarOpen ? "opacity-100 block" : "opacity-0 hidden"}`}>
            Logout
          </span>
        </button>

        {/* Sidebar Toggle Indicator */}
        <div className="mt-4 pt-4 border-t border-gray-600">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="hidden md:flex items-center justify-center w-full py-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <i className={`fas fa-chevron-${isSidebarOpen ? 'left' : 'right'} transition-transform duration-300`}></i>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={`flex-1 transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "md:ml-64" : "md:ml-20"
      } w-full`}>
       
     
 {/* Main Content */}
        <main className="p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              {renderSection()}
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AdminPanel;