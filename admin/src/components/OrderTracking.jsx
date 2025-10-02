import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  BarElement,
  Title 
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

// Register required chart elements
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const OrderTracking = () => {
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Static data mock for the sake of demonstration
    const staticOrders = [
      { _id: '1', orderId: 'ORD001', customerName: 'John Doe', shippingStatus: 'Pending', orderDate: '2023-08-01', totalAmount: 1500, items: 'Wireless Earbuds', paymentMethod: 'Credit Card' },
      { _id: '2', orderId: 'ORD002', customerName: 'Jane Smith', shippingStatus: 'Shipped', orderDate: '2023-08-02', totalAmount: 2500, items: 'Smart TV 4K', paymentMethod: 'PayPal' },
      { _id: '3', orderId: 'ORD003', customerName: 'Sam Wilson', shippingStatus: 'Delivered', orderDate: '2023-08-05', totalAmount: 1200, items: 'Laptop', paymentMethod: 'Credit Card' },
      { _id: '4', orderId: 'ORD004', customerName: 'Anna Lee', shippingStatus: 'Pending', orderDate: '2023-08-07', totalAmount: 1800, items: 'Smartwatch', paymentMethod: 'Debit Card' },
      { _id: '5', orderId: 'ORD005', customerName: 'Chris Evans', shippingStatus: 'Shipped', orderDate: '2023-08-10', totalAmount: 2200, items: 'Headphones', paymentMethod: 'PayPal' },
      { _id: '6', orderId: 'ORD006', customerName: 'Emma Watson', shippingStatus: 'Processing', orderDate: '2023-08-12', totalAmount: 3200, items: 'Gaming Console', paymentMethod: 'Credit Card' },
      { _id: '7', orderId: 'ORD007', customerName: 'Robert Downey', shippingStatus: 'Delivered', orderDate: '2023-08-15', totalAmount: 4200, items: 'Smartphone', paymentMethod: 'PayPal' },
      { _id: '8', orderId: 'ORD008', customerName: 'Scarlett Johansson', shippingStatus: 'Cancelled', orderDate: '2023-08-18', totalAmount: 2800, items: 'Tablet', paymentMethod: 'Credit Card' },
    ];

    setOrders(staticOrders);
    setLoading(false);
  }, []);

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle status filter change
  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  // Handle status change for orders
  const handleStatusChange = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order._id === orderId ? { ...order, shippingStatus: newStatus } : order
    ));
  };

  // Filter orders based on search query and status filter
  const filteredOrders = orders.filter((order) => {
    const matchesSearch = 
      order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || order.shippingStatus === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Prepare chart data for Order Status
  const orderStatusData = {
    labels: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
    datasets: [
      {
        data: [
          orders.filter((order) => order.shippingStatus === 'Pending').length,
          orders.filter((order) => order.shippingStatus === 'Processing').length,
          orders.filter((order) => order.shippingStatus === 'Shipped').length,
          orders.filter((order) => order.shippingStatus === 'Delivered').length,
          orders.filter((order) => order.shippingStatus === 'Cancelled').length,
        ],
        backgroundColor: [
          'rgba(255, 159, 64, 0.7)', // Pending - orange
          'rgba(54, 162, 235, 0.7)',  // Processing - blue
          'rgba(75, 192, 192, 0.7)',  // Shipped - teal
          'rgba(75, 192, 75, 0.7)',   // Delivered - green
          'rgba(255, 99, 132, 0.7)',  // Cancelled - red
        ],
        borderColor: [
          'rgb(255, 159, 64)',
          'rgb(54, 162, 235)',
          'rgb(75, 192, 192)',
          'rgb(75, 192, 75)',
          'rgb(255, 99, 132)',
        ],
        borderWidth: 1,
        hoverOffset: 12,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: {
            size: 12
          }
        }
      },
    },
    maintainAspectRatio: false,
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending': return 'bg-yellow-500';
      case 'Processing': return 'bg-blue-500';
      case 'Shipped': return 'bg-teal-500';
      case 'Delivered': return 'bg-green-500';
      case 'Cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-2">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Order Tracking</h2>
        <p className="text-gray-400">Manage and track all customer orders</p>
      </div>

      {/* Filters and Search */}
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-gray-700 shadow-lg mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search by Order ID or Customer Name"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-48">
            <select
              value={statusFilter}
              onChange={handleStatusFilterChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-gray-700 shadow-lg">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-500 bg-opacity-20 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-300">Total Orders</h3>
              <p className="text-2xl font-bold">{orders.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-gray-700 shadow-lg">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-500 bg-opacity-20 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-300">Delivered</h3>
              <p className="text-2xl font-bold">{orders.filter(order => order.shippingStatus === 'Delivered').length}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-gray-700 shadow-lg">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-yellow-500 bg-opacity-20 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-300">Pending</h3>
              <p className="text-2xl font-bold">{orders.filter(order => order.shippingStatus === 'Pending').length}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-gray-700 shadow-lg">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-red-500 bg-opacity-20 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-300">Cancelled</h3>
              <p className="text-2xl font-bold">{orders.filter(order => order.shippingStatus === 'Cancelled').length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Order Status Chart */}
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-gray-700 shadow-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">Order Status Distribution</h3>
        <div className="h-64">
          <Doughnut data={orderStatusData} options={chartOptions} />
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-gray-700 shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Order List</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Order ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Customer</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Items</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Payment</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredOrders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-700/50">
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="font-medium">{order.orderId}</span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{order.customerName}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{new Date(order.orderDate).toLocaleDateString()}</td>
                  <td className="px-4 py-3 whitespace-nowrap">₹{order.totalAmount.toLocaleString()}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{order.items}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{order.paymentMethod}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(order.shippingStatus)}`}>
                      {order.shippingStatus}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <select
                      value={order.shippingStatus}
                      onChange={(e) => handleStatusChange(order._id, e.target.value)}
                      className="p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;