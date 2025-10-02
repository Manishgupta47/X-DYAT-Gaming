import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Simple animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/4 right-20 w-6 h-6 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-green-500 rounded-full opacity-20 animate-bounce delay-700"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-yellow-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-5"></div>

     
        <div className="flex items-center pt-4">
          <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
            <span className="text-white font-bold text-lg">DG</span>
          </div>
          <span className="text-2xl font-bold text-white">
            DYTE GAMING <span className="text-blue-400">ADMIN</span>
          </span>
        </div>


      {/* Hero Section */}
      <div className="relative z-10 flex flex-col justify-center items-center text-white text-center min-h-[60vh] px-6">
        <div className="mb-8 transform transition-transform duration-500 hover:scale-105">
          <div className="inline-block p-3 bg-gray-800 rounded-lg mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Gaming <span className="text-blue-400">Admin</span> Dashboard
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light max-w-3xl px-4 text-gray-300">
            Manage your gaming platform with powerful tools and analytics. Monitor users, products, tournaments, and performance metrics.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
            to="/login"
            className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center shadow-lg"
          >
            <span>Log In</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          
       
        </div>
      </div>

     

    

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 md:px-8 border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold">DG</span>
              </div>
              <span className="text-xl font-bold text-white">
                DYTE GAMING
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Professional gaming platform administration tools.
            </p>
          </div>
          
          {[
            { title: "Admin", links: ["Dashboard", "Analytics", "Settings", "Logs"] },
            { title: "Management", links: ["Users", "Products", "Orders", "Tournaments"] },
            { title: "Support", links: ["Documentation", "Help Center", "Contact", "Status"] },
          ].map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Dyte Gaming Admin. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.03)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")
        }
      `}</style>
    </div>
  );
};

export default HomePage;  