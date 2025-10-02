import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductView = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    search: "",
    status: ""
  });
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    longDescription: "",
    category: "",
    brand: "",
    model: "",
    stockQuantity: "",
    status: "active",
    sku: "",
    tags: "",
    warranty: "",
    image: ""
  });

  // API base URL (from environment or fallback)
  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  const categories = ["Electronics", "Audio", "Peripherals", "Display", "Furniture", "Components", "Accessories"];
  const brands = ["Apple", "Samsung", "Sony", "Bose", "DyteGaming", "Razer", "Logitech", "SteelSeries", "Corsair", "HyperX"];

  // Fetch products with filters & pagination
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${API_BASE_URL}/api/allProduct`, {
          params: {
            page,
            category: filters.category,
            brand: filters.brand,
            status: filters.status,
            search: filters.search
          }
        });

        setProducts(response.data.products || []);
        setTotalPages(response.data.totalPages || 1);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products", error);
        alert("Error fetching products. Please try again.");
        setProducts([]);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [filters, page, API_BASE_URL]);

  // Client side filtering fallback
  const filteredProducts = products.filter(product => {
    const matchesSearch = !filters.search ||
      product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      (product.sku && product.sku.toLowerCase().includes(filters.search.toLowerCase())) ||
      (product.tags && product.tags.some(tag => tag.toLowerCase().includes(filters.search.toLowerCase())));

    const matchesCategory = !filters.category || product.category === filters.category;
    const matchesBrand = !filters.brand || product.brand === filters.brand;
    const matchesStatus = !filters.status || product.status === filters.status;

    return matchesSearch && matchesCategory && matchesBrand && matchesStatus;
  });

  // Delete product
  const handleDelete = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product? This action cannot be undone.")) {
      try {
        await axios.delete(`${API_BASE_URL}/api/delete/${productId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setProducts(products.filter((product) => product._id !== productId));
        alert("Product deleted successfully!");
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Error deleting product. Please try again.");
      }
    }
  };

  // Edit product - load existing data into form
  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name || "",
      price: product.price || "",
      description: product.description || "",
      longDescription: product.longDescription || "",
      category: product.category || "",
      brand: product.brand || "",
      model: product.model || "",
      stockQuantity: product.stockQuantity || "",
      status: product.status || "active",
      sku: product.sku || "",
      tags: product.tags ? product.tags.join(", ") : "",
      warranty: product.warranty || "",
      image: product.image || ""
    });
    setShowEditForm(true);
  };

  // Form input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Submit updated product
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const productData = {
        ...formData,
        price: Number(formData.price),
        stockQuantity: Number(formData.stockQuantity),
        tags: formData.tags.split(",").map(tag => tag.trim()).filter(tag => tag)
      };

      const response = await axios.put(
        `${API_BASE_URL}/api/update/${editingProduct._id}`,
        productData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      setProducts(products.map(p =>
        p._id === editingProduct._id ? response.data.product : p
      ));

      alert("Product updated successfully!");
      handleCancelEdit();
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Error updating product. Please try again.");
    }
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingProduct(null);
    setShowEditForm(false);
    setFormData({
      name: "",
      price: "",
      description: "",
      longDescription: "",
      category: "",
      brand: "",
      model: "",
      stockQuantity: "",
      status: "active",
      sku: "",
      tags: "",
      warranty: "",
      image: ""
    });
  };

  // Handle image preview
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Stock status and color helpers
  const getStockStatus = (quantity) => {
    if (quantity > 20) return "In Stock";
    if (quantity > 5) return "Low Stock";
    if (quantity > 0) return "Very Low";
    return "Out of Stock";
  };

  const getStockStatusColor = (quantity) => {
    if (quantity > 20) return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
    if (quantity > 5) return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
    if (quantity > 0) return "bg-orange-500/20 text-orange-400 border border-orange-500/30";
    return "bg-rose-500/20 text-rose-400 border border-rose-500/30";
  };

  const getStatusColor = (status) => {
    return status === 'active'
      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
      : 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
  };

  // Format dates nicely
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500 mb-4"></div>
        <p className="text-gray-400 text-lg">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 sm:p-6">
      {/* Edit Form Modal */}
      {showEditForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900/95 backdrop-blur-lg rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto border border-gray-700/50 shadow-2xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">
                  Edit Product
                </h3>
                <button
                  onClick={handleCancelEdit}
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-colors duration-300"
                >
                  <i className="fas fa-times text-gray-400 text-lg"></i>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold text-white mb-3">Product Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-white mb-3">Price (₹)</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-white mb-3">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      required
                    >
                      <option value="" className="bg-gray-800">Select Category</option>
                      {categories.map(category => (
                        <option key={category} value={category} className="bg-gray-800">{category}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-white mb-3">Brand</label>
                    <select
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      required
                    >
                      <option value="" className="bg-gray-800">Select Brand</option>
                      {brands.map(brand => (
                        <option key={brand} value={brand} className="bg-gray-800">{brand}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-white mb-3">Model</label>
                    <input
                      type="text"
                      name="model"
                      value={formData.model}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-white mb-3">SKU</label>
                    <input
                      type="text"
                      name="sku"
                      value={formData.sku}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-white mb-3">Stock Quantity</label>
                    <input
                      type="number"
                      name="stockQuantity"
                      value={formData.stockQuantity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-white mb-3">Status</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="active" className="bg-gray-800">Active</option>
                      <option value="inactive" className="bg-gray-800">Inactive</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-lg font-semibold text-white mb-3">Short Description</label>
                    <input
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-lg font-semibold text-white mb-3">Long Description</label>
                    <textarea
                      name="longDescription"
                      value={formData.longDescription}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-lg font-semibold text-white mb-3">Tags (comma separated)</label>
                    <input
                      type="text"
                      name="tags"
                      value={formData.tags}
                      onChange={handleInputChange}
                      placeholder="wireless, gaming, premium"
                      className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-lg font-semibold text-white mb-3">Warranty Information</label>
                    <input
                      type="text"
                      name="warranty"
                      value={formData.warranty}
                      onChange={handleInputChange}
                      placeholder="1 year limited warranty"
                      className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-lg font-semibold text-white mb-3">Image URL</label>
                    <input
                      type="url"
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-6 border-t border-gray-700/50">
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="px-6 py-3 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-all duration-300 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg font-semibold"
                  >
                    Update Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Product Catalog
            </h1>
            <p className="text-gray-300 text-lg">Manage your product inventory</p>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { 
              label: "Total Products", 
              value: products.length, 
              icon: "📦", 
              bgColor: "bg-cyan-500/10"
            },
            { 
              label: "Active Products", 
              value: products.filter(p => p.status === 'active').length, 
              icon: "✅", 
              bgColor: "bg-emerald-500/10"
            },
            { 
              label: "Out of Stock", 
              value: products.filter(p => p.stockQuantity === 0).length, 
              icon: "⚠️", 
              bgColor: "bg-rose-500/10"
            },
            { 
              label: "Total Value", 
              value: `₹${products.reduce((sum, product) => sum + (product.price * (product.stockQuantity || 0)), 0).toLocaleString()}`,
              icon: "💰", 
              bgColor: "bg-violet-500/10"
            }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-900/95 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-2xl sm:text-3xl font-bold text-white mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 ${stat.bgColor} rounded-xl`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters Section */}
        <div className="bg-gray-900/95 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-gray-700/50 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full mr-3"></div>
            Filters & Search
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block text-lg font-semibold text-white mb-3">Search Products</label>
              <div className="relative">
                <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Search by name, SKU, or tags..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-lg font-semibold text-white mb-3">Category</label>
              <select
                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 appearance-none"
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              >
                <option value="" className="bg-gray-800">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800">{category}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-lg font-semibold text-white mb-3">Brand</label>
              <select
                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 appearance-none"
                value={filters.brand}
                onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
              >
                <option value="" className="bg-gray-800">All Brands</option>
                {brands.map(brand => (
                  <option key={brand} value={brand} className="bg-gray-800">{brand}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-lg font-semibold text-white mb-3">Status</label>
              <select
                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 appearance-none"
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
              >
                <option value="" className="bg-gray-800">All Status</option>
                <option value="active" className="bg-gray-800">Active</option>
                <option value="inactive" className="bg-gray-800">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-gray-900/95 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-800/80">
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Product</th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Details</th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Inventory</th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Status</th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700/50">
                {filteredProducts.map((product) => (
                  <tr key={product._id} className="hover:bg-gray-800/50 transition-colors duration-200">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-20 w-20 object-cover rounded-xl border-2 border-gray-600 cursor-pointer hover:border-cyan-400 transition-colors shadow-lg"
                            onClick={() => handleImageClick(product.image)}
                          />
                          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                            {product.rating || 0}★
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-xl font-semibold text-white truncate">{product.name}</h3>
                          <p className="text-base text-gray-400 truncate">{product.brand} • {product.model}</p>
                          <p className="text-sm text-gray-500 mt-1">ID: {product.ProductId || product._id}</p>
                          <p className="text-sm text-gray-500">SKU: {product.sku || "N/A"}</p>
                        </div>
                      </div>
                    </td>
                    
                    <td className="py-4 px-6">
                      <div className="space-y-3">
                        <div className="text-xl font-bold text-white">₹{product.price?.toLocaleString() || "0"}</div>
                        <div className="text-base text-gray-400 capitalize">{product.category || "Uncategorized"}</div>
                        <div className="text-sm text-gray-300 line-clamp-2">{product.description || "No description available"}</div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {product.tags && product.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-600">
                              {tag}
                            </span>
                          ))}
                          {product.tags && product.tags.length > 3 && (
                            <span className="px-3 py-1 bg-gray-800 text-gray-400 text-sm rounded-full border border-gray-600">
                              +{product.tags.length - 3}
                            </span>
                          )}
                        </div>
                        {product.additionalInformation?.colors && (
                          <div className="flex gap-2 mt-2 items-center">
                            <span className="text-sm text-gray-400">Colors:</span>
                            <div className="flex gap-1">
                              {product.additionalInformation.colors.slice(0, 4).map((color, index) => (
                                <div
                                  key={index}
                                  className="w-6 h-6 rounded-full border border-gray-600"
                                  style={{ 
                                    backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' : 
                                      color.toLowerCase() === 'black' ? '#000000' : 
                                      color.toLowerCase() === 'red' ? '#ef4444' :
                                      color.toLowerCase() === 'gray' ? '#6b7280' : '#6b7280'
                                  }}
                                  title={color}
                                />
                              ))}
                              {product.additionalInformation.colors.length > 4 && (
                                <div className="w-6 h-6 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center text-xs text-gray-400">
                                  +{product.additionalInformation.colors.length - 4}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                    
                    <td className="py-4 px-6">
                      <div className="space-y-3">
                        <div className={`px-4 py-2 rounded-full text-base font-semibold text-center ${getStockStatusColor(product.stockQuantity || 0)}`}>
                          {getStockStatus(product.stockQuantity || 0)}
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-white">{product.stockQuantity || 0}</div>
                          <div className="text-sm text-gray-400">units in stock</div>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3">
                          <div 
                            className={`h-3 rounded-full ${
                              (product.stockQuantity || 0) > 20 ? 'bg-emerald-500' : 
                              (product.stockQuantity || 0) > 5 ? 'bg-amber-500' : 
                              (product.stockQuantity || 0) > 0 ? 'bg-orange-500' : 'bg-rose-500'
                            }`}
                            style={{ width: `${Math.min(((product.stockQuantity || 0) / 50) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    
                    <td className="py-4 px-6">
                      <div className="space-y-3">
                        <span className={`px-4 py-2 rounded-full text-base font-semibold ${getStatusColor(product.status)}`}>
                          {(product.status || "active").toUpperCase()}
                        </span>
                        <div className="text-sm text-gray-400">
                          Added: {formatDate(product.createdAt)}
                        </div>
                        <div className="text-sm text-gray-500">
                          Updated: {formatDate(product.updatedAt)}
                        </div>
                        {product.warranty && (
                          <div className="text-sm text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-lg border border-cyan-500/20">
                            {product.warranty}
                          </div>
                        )}
                      </div>
                    </td>
                    
                    <td className="py-4 px-6">
                      <div className="flex flex-col space-y-3">
                        <button
                          onClick={() => handleEdit(product)}
                          className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg font-semibold flex items-center justify-center"
                        >
                          <i className="fas fa-edit mr-2"></i>
                          Edit Product
                        </button>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="px-4 py-3 bg-gradient-to-r from-rose-500 to-red-600 text-white rounded-lg hover:from-rose-600 hover:to-red-700 transition-all duration-300 shadow-lg font-semibold flex items-center justify-center"
                        >
                          <i className="fas fa-trash mr-2"></i>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-800 rounded-2xl flex items-center justify-center">
                  <i className="fas fa-box-open text-4xl text-gray-500"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your search filters.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredProducts.length > 0 && (
            <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 border-t border-gray-700/50 gap-4">
              <button 
                onClick={() => setPage(page - 1)} 
                disabled={page <= 1}
                className="px-6 py-3 bg-gray-800 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-all duration-300 font-semibold flex items-center"
              >
                <i className="fas fa-chevron-left mr-2"></i>
                Previous
              </button>
              <span className="text-gray-300 text-sm sm:text-base">
                Page {page} of {totalPages} • Showing {filteredProducts.length} products
              </span>
              <button 
                onClick={() => setPage(page + 1)} 
                disabled={page >= totalPages}
                className="px-6 py-3 bg-gray-800 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-all duration-300 font-semibold flex items-center"
              >
                Next
                <i className="fas fa-chevron-right ml-2"></i>
              </button>
            </div>
          )}
        </div>

        {/* Image Preview Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900/95 backdrop-blur-lg rounded-2xl max-w-4xl max-h-full overflow-auto border border-gray-700/50 shadow-2xl">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-white">Product Image Preview</h3>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="p-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-colors duration-300"
                  >
                    <i className="fas fa-times text-gray-400 text-lg"></i>
                  </button>
                </div>
                <img
                  src={selectedImage}
                  alt="Full Size Preview"
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
