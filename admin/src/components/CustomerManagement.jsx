import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Static customer data
  const staticCustomers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      orderCount: 5,
      totalSpent: 12500,
      status: "active",
      joinDate: "2023-01-15",
      lastOrder: "2023-08-10",
      phone: "+1 555-0101",
      location: "New York, USA"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      orderCount: 12,
      totalSpent: 34200,
      status: "active",
      joinDate: "2022-11-03",
      lastOrder: "2023-08-15",
      phone: "+1 555-0102",
      location: "Los Angeles, USA"
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert.j@example.com",
      orderCount: 3,
      totalSpent: 8700,
      status: "inactive",
      joinDate: "2023-03-22",
      lastOrder: "2023-06-18",
      phone: "+1 555-0103",
      location: "Chicago, USA"
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.d@example.com",
      orderCount: 8,
      totalSpent: 21000,
      status: "active",
      joinDate: "2022-09-10",
      lastOrder: "2023-08-12",
      phone: "+1 555-0104",
      location: "Miami, USA"
    },
    {
      id: 5,
      name: "Michael Wilson",
      email: "michael.w@example.com",
      orderCount: 15,
      totalSpent: 45300,
      status: "active",
      joinDate: "2022-05-17",
      lastOrder: "2023-08-14",
      phone: "+1 555-0105",
      location: "Seattle, USA"
    },
    {
      id: 6,
      name: "Sarah Brown",
      email: "sarah.b@example.com",
      orderCount: 2,
      totalSpent: 5400,
      status: "inactive",
      joinDate: "2023-04-05",
      lastOrder: "2023-05-20",
      phone: "+1 555-0106",
      location: "Boston, USA"
    },
    {
      id: 7,
      name: "David Miller",
      email: "david.m@example.com",
      orderCount: 7,
      totalSpent: 18900,
      status: "active",
      joinDate: "2023-02-28",
      lastOrder: "2023-08-13",
      phone: "+1 555-0107",
      location: "Austin, USA"
    },
    {
      id: 8,
      name: "Lisa Taylor",
      email: "lisa.t@example.com",
      orderCount: 10,
      totalSpent: 27600,
      status: "active",
      joinDate: "2022-08-12",
      lastOrder: "2023-08-11",
      phone: "+1 555-0108",
      location: "Denver, USA"
    },
    {
      id: 9,
      name: "Alex Chen",
      email: "alex.chen@example.com",
      orderCount: 6,
      totalSpent: 16800,
      status: "active",
      joinDate: "2023-01-30",
      lastOrder: "2023-08-16",
      phone: "+1 555-0109",
      location: "San Francisco, USA"
    },
    {
      id: 10,
      name: "Maria Garcia",
      email: "maria.g@example.com",
      orderCount: 4,
      totalSpent: 11200,
      status: "active",
      joinDate: "2023-03-15",
      lastOrder: "2023-08-09",
      phone: "+1 555-0110",
      location: "Phoenix, USA"
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(() => {
          setCustomers(staticCustomers);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching customers:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter customers based on search term
  const filteredCustomers = customers.filter(customer => {
    return customer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
           customer.location.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Customer statistics - Only total customers
  const totalCustomers = customers.length;
  const activeCustomers = customers.filter(c => c.status === 'active').length;

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500 mb-4"></div>
        <p className="text-gray-300">Loading customers...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl text-white font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Customer Management
          </h1>
          <p className="text-gray-300 mt-2">Manage your customer database</p>
        </div>
        
    
      </div>

      {/* Simple Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 border border-blue-400 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Total Customers</p>
              <p className="text-3xl font-bold text-white mt-1">{totalCustomers}</p>
            </div>
            <div className="p-3 bg-white/20 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 border border-green-400 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium">Active Customers</p>
              <p className="text-3xl font-bold text-white mt-1">{activeCustomers}</p>
              <p className="text-emerald-200 text-xs mt-1 font-medium">{Math.round((activeCustomers / totalCustomers) * 100)}% of total</p>
            </div>
            <div className="p-3 bg-white/20 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 border border-orange-400 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm font-medium">Inactive Customers</p>
              <p className="text-3xl font-bold text-white mt-1">{totalCustomers - activeCustomers}</p>
              <p className="text-red-200 text-xs mt-1 font-medium">Need re-engagement</p>
            </div>
            <div className="p-3 bg-white/20 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

     
      {/* Customers Table - Simplified */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-purple-700">
                <th className="py-4 px-6 text-left text-sm font-semibold text-blue-100 uppercase tracking-wider">Customer</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-blue-100 uppercase tracking-wider">Contact</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-blue-100 uppercase tracking-wider">Orders</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-blue-100 uppercase tracking-wider">Total Spent</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-blue-100 uppercase tracking-wider">Status</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-blue-100 uppercase tracking-wider">Last Activity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-slate-750/50 transition-colors duration-200">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 flex-shrink-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {customer.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-100">{customer.name}</div>
                        <div className="text-sm text-gray-300">Joined: {new Date(customer.joinDate).toLocaleDateString()}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      <div className="text-gray-100">{customer.email}</div>
                      <div className="text-sm text-gray-300">{customer.phone}</div>
                      <div className="text-xs text-gray-400">{customer.location}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-center">
                      <span className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                        {customer.orderCount} orders
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-lg font-semibold text-gray-100">₹{customer.totalSpent.toLocaleString()}</div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      customer.status === 'active' 
                        ? 'bg-green-500/20 text-green-300' 
                        : 'bg-red-500/20 text-red-300'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm text-gray-200">{new Date(customer.lastOrder).toLocaleDateString()}</div>
                    <div className="text-xs text-gray-400">Last purchase</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredCustomers.length === 0 && (
            <div className="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">No customers found</h3>
              <p className="text-gray-400">Try adjusting your search terms.</p>
            </div>
          )}
        </div>
      </div>

      {/* Simple Summary */}
      <div className="mt-6 text-center">
        <p className="text-gray-300 font-medium">
          Total {totalCustomers} customers in database • {activeCustomers} active • {totalCustomers - activeCustomers} inactive
        </p>
      </div>
    </div>
  );
};

export default CustomerManagement;