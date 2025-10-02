import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";

// Registering necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalSales: [],
    totalOrders: [],
    totalProducts: 0,
    topProducts: [],
    revenue: 0
  });
  
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState("monthly");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/dashboard`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        console.log("Fetched Dashboard Data:", response.data);
        setDashboardData(response.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        // Enhanced sample data with different time ranges
        setDashboardData({
          totalSales: [
            // Monthly data (last 6 months)
            { date: "Jan", sales: 12000, monthly: 12000, daily: 400, yearly: 144000 },
            { date: "Feb", sales: 19000, monthly: 19000, daily: 680, yearly: 228000 },
            { date: "Mar", sales: 15000, monthly: 15000, daily: 500, yearly: 180000 },
            { date: "Apr", sales: 22000, monthly: 22000, daily: 730, yearly: 264000 },
            { date: "May", sales: 18000, monthly: 18000, daily: 600, yearly: 216000 },
            { date: "Jun", sales: 25000, monthly: 25000, daily: 830, yearly: 300000 },
            // Daily data (last 7 days)
            { date: "Mon", sales: 3500, daily: 3500, monthly: 105000, yearly: 1260000 },
            { date: "Tue", sales: 4200, daily: 4200, monthly: 126000, yearly: 1512000 },
            { date: "Wed", sales: 3800, daily: 3800, monthly: 114000, yearly: 1368000 },
            { date: "Thu", sales: 5100, daily: 5100, monthly: 153000, yearly: 1836000 },
            { date: "Fri", sales: 4800, daily: 4800, monthly: 144000, yearly: 1728000 },
            { date: "Sat", sales: 6200, daily: 6200, monthly: 186000, yearly: 2232000 },
            { date: "Sun", sales: 4500, daily: 4500, monthly: 135000, yearly: 1620000 }
          ],
          totalOrders: [
            // Monthly data (last 6 months)
            { date: "Jan", orders: 45, monthly: 45, daily: 15, yearly: 540 },
            { date: "Feb", orders: 62, monthly: 62, daily: 22, yearly: 744 },
            { date: "Mar", orders: 58, monthly: 58, daily: 19, yearly: 696 },
            { date: "Apr", orders: 78, monthly: 78, daily: 26, yearly: 936 },
            { date: "May", orders: 65, monthly: 65, daily: 22, yearly: 780 },
            { date: "Jun", orders: 92, monthly: 92, daily: 31, yearly: 1104 },
            // Daily data (last 7 days)
            { date: "Mon", orders: 8, daily: 8, monthly: 240, yearly: 2880 },
            { date: "Tue", orders: 12, daily: 12, monthly: 360, yearly: 4320 },
            { date: "Wed", orders: 10, daily: 10, monthly: 300, yearly: 3600 },
            { date: "Thu", orders: 15, daily: 15, monthly: 450, yearly: 5400 },
            { date: "Fri", orders: 14, daily: 14, monthly: 420, yearly: 5040 },
            { date: "Sat", orders: 18, daily: 18, monthly: 540, yearly: 6480 },
            { date: "Sun", orders: 11, daily: 11, monthly: 330, yearly: 3960 }
          ],
          totalProducts: 156,
          topProducts: [
            { name: "Gaming Mouse", sales: 42 },
            { name: "Mechanical Keyboard", sales: 38 },
            { name: "Wireless Headset", sales: 35 },
            { name: "RGB Mousepad", sales: 28 }
          ],
          revenue: 185000
        });
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Filter and process data based on time range
  const getFilteredData = (data, dataType = 'sales') => {
    if (timeRange === "daily") {
      // Last 7 days data
      const dailyData = data.filter(item => item.daily !== undefined);
      return dailyData.slice(-7).map(item => ({
        date: item.date,
        [dataType]: item.daily || item[dataType]
      }));
    } else if (timeRange === "monthly") {
      // Last 6 months data
      const monthlyData = data.filter(item => item.monthly !== undefined);
      return monthlyData.slice(0, 6).map(item => ({
        date: item.date,
        [dataType]: item.monthly || item[dataType]
      }));
    } else {
      // Yearly data
      return [
        { date: "2020", [dataType]: 125000 },
        { date: "2021", [dataType]: 185000 },
        { date: "2022", [dataType]: 240000 },
        { date: "2023", [dataType]: 310000 }
      ];
    }
  };

  // Process data for charts
  const filteredSalesData = getFilteredData(dashboardData.totalSales, 'sales');
  const filteredOrdersData = getFilteredData(dashboardData.totalOrders, 'orders');

  const salesData = {
    labels: filteredSalesData.map(item => item.date),
    datasets: [
      {
        label: timeRange === "daily" ? "Daily Sales (₹)" : timeRange === "monthly" ? "Monthly Sales (₹)" : "Yearly Sales (₹)",
        data: filteredSalesData.map(item => item.sales),
        borderColor: "rgb(34, 197, 94)",
        backgroundColor: "rgba(34, 197, 94, 0.1)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "rgb(34, 197, 94)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      },
    ],
  };

  const ordersData = {
    labels: filteredOrdersData.map(item => item.date),
    datasets: [
      {
        label: timeRange === "daily" ? "Daily Orders" : timeRange === "monthly" ? "Monthly Orders" : "Yearly Orders",
        data: filteredOrdersData.map(item => item.orders),
        backgroundColor: "rgba(59, 130, 246, 0.8)",
        borderColor: "rgb(59, 130, 246)",
        borderWidth: 1,
        borderRadius: 6,
      },
    ],
  };

  const topProductsData = {
    labels: dashboardData.topProducts.map(product => product.name),
    datasets: [
      {
        label: "Units Sold",
        data: dashboardData.topProducts.map(product => product.sales),
        backgroundColor: [
          "rgba(59, 130, 246, 0.8)",
          "rgba(139, 92, 246, 0.8)",
          "rgba(34, 197, 94, 0.8)",
          "rgba(245, 158, 11, 0.8)",
        ],
        borderColor: [
          "rgb(59, 130, 246)",
          "rgb(139, 92, 246)",
          "rgb(34, 197, 94)",
          "rgb(245, 158, 11)",
        ],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = (title, isCurrency = false) => ({
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "rgba(255, 255, 255, 0.8)",
          font: {
            size: 12
          }
        }
      },
      title: {
        display: true,
        text: title,
        color: "rgba(255, 255, 255, 0.9)",
        font: {
          size: 16,
          weight: "bold"
        }
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "rgba(255, 255, 255, 0.9)",
        bodyColor: "rgba(255, 255, 255, 0.8)",
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (isCurrency) {
              label += "₹" + context.parsed.y.toLocaleString();
            } else {
              label += context.parsed.y.toLocaleString();
            }
            return label;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.1)"
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
          callback: function(value) {
            return isCurrency ? '₹' + value.toLocaleString() : value.toLocaleString();
          }
        }
      },
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)"
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.7)"
        }
      }
    },
    maintainAspectRatio: false,
  });

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mb-4"></div>
        <p className="text-gray-400">Loading dashboard...</p>
      </div>
    );
  }

  // Calculate totals based on current time range
  const currentSalesTotal = filteredSalesData.reduce((acc, curr) => acc + curr.sales, 0);
  const currentOrdersTotal = filteredOrdersData.reduce((acc, curr) => acc + curr.orders, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-gray-400 mt-2">Welcome to your admin dashboard</p>
        </div>
        
        <div className="flex space-x-2 bg-gray-800 p-1 rounded-xl">
          {["daily", "monthly", "yearly"].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                timeRange === range
                  ? "bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Revenue Card */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">
                {timeRange === "daily" ? "Today's Revenue" : 
                 timeRange === "monthly" ? "Monthly Revenue" : "Yearly Revenue"}
              </p>
              <p className="text-2xl font-bold text-white mt-1">₹{currentSalesTotal.toLocaleString()}</p>
              <p className="text-green-400 text-xs mt-1">
                {timeRange === "daily" ? "Today's earnings" : 
                 timeRange === "monthly" ? "This month's earnings" : "This year's earnings"}
              </p>
            </div>
            <div className="p-3 bg-green-500/10 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Orders Card */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">
                {timeRange === "daily" ? "Today's Orders" : 
                 timeRange === "monthly" ? "Monthly Orders" : "Yearly Orders"}
              </p>
              <p className="text-2xl font-bold text-white mt-1">{currentOrdersTotal.toLocaleString()}</p>
              <p className="text-blue-400 text-xs mt-1">
                {timeRange === "daily" ? "Orders today" : 
                 timeRange === "monthly" ? "Orders this month" : "Orders this year"}
              </p>
            </div>
            <div className="p-3 bg-blue-500/10 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Products Card */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Products</p>
              <p className="text-2xl font-bold text-white mt-1">{dashboardData.totalProducts}</p>
              <p className="text-purple-400 text-xs mt-1">Active in catalog</p>
            </div>
            <div className="p-3 bg-purple-500/10 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Sales Trend Chart */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 shadow-lg">
          <div className="h-80">
            <Line data={salesData} options={chartOptions(
              timeRange === "daily" ? "Daily Sales Trend" : 
              timeRange === "monthly" ? "Monthly Sales Trend" : "Yearly Sales Trend", 
              true
            )} />
          </div>
        </div>

        {/* Orders Chart */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 shadow-lg">
          <div className="h-80">
            <Bar data={ordersData} options={chartOptions(
              timeRange === "daily" ? "Daily Orders Overview" : 
              timeRange === "monthly" ? "Monthly Orders Overview" : "Yearly Orders Overview"
            )} />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-white">Top Selling Products</h3>
          <div className="h-64">
            <Doughnut 
              data={topProductsData} 
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      color: "rgba(255, 255, 255, 0.8)",
                      font: {
                        size: 11
                      }
                    }
                  },
                },
                maintainAspectRatio: false,
                cutout: '60%',
              }} 
            />
          </div>
          <div className="mt-4 space-y-2">
            {dashboardData.topProducts.slice(0, 3).map((product, index) => (
              <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-700/50 rounded-lg">
                <span className="text-sm text-gray-300">{product.name}</span>
                <span className="text-sm font-semibold text-green-400">{product.sales} units</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-white">Recent Orders</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
              <div>
                <p className="font-medium text-white">Gaming Mouse Pro</p>
                <p className="text-sm text-gray-400">Order #ORD-001</p>
              </div>
              <div className="text-right">
                <p className="text-green-400 font-semibold">₹2,499</p>
                <p className="text-xs text-gray-400">Completed</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
              <div>
                <p className="font-medium text-white">Mechanical Keyboard</p>
                <p className="text-sm text-gray-400">Order #ORD-002</p>
              </div>
              <div className="text-right">
                <p className="text-amber-400 font-semibold">₹4,299</p>
                <p className="text-xs text-gray-400">Processing</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
              <div>
                <p className="font-medium text-white">Wireless Headset</p>
                <p className="text-sm text-gray-400">Order #ORD-003</p>
              </div>
              <div className="text-right">
                <p className="text-green-400 font-semibold">₹6,999</p>
                <p className="text-xs text-gray-400">Completed</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
              <div>
                <p className="font-medium text-white">RGB Mousepad</p>
                <p className="text-sm text-gray-400">Order #ORD-004</p>
              </div>
              <div className="text-right">
                <p className="text-blue-400 font-semibold">₹1,299</p>
                <p className="text-xs text-gray-400">Shipped</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;