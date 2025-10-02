import React, { useState } from "react";
import axios from "axios";

const ProductAdd = ({ onProductAdded }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    image: "",
    price: "",
    rating: 5,
    description: "",
    longDescription: "",
    tags: [],
    category: "",
    sku: "",
    additionalInformation: {
      weight: "",
      dimensions: "",
      size: ""
    },
    colors: [],
    composition: "",
    sizeFit: "",
    brand: "",
    model: "",
    stockQuantity: "",
    warranty: "",
    status: "active"
  });

  const [currentTag, setCurrentTag] = useState("");
  const [currentColor, setCurrentColor] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Color system with hex codes - Fixed colors
  const colorsOptions = [
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Red", hex: "#DC2626" },
    { name: "Blue", hex: "#2563EB" },
    { name: "Green", hex: "#16A34A" },
    { name: "Silver", hex: "#94A3B8" },
    { name: "Space Gray", hex: "#4B5563" },
    { name: "Pink", hex: "#EC4899" },
    { name: "Gold", hex: "#F59E0B" },
    { name: "Purple", hex: "#7C3AED" },
    { name: "Orange", hex: "#EA580C" },
    { name: "Yellow", hex: "#EAB308" },
    { name: "Brown", hex: "#92400E" },
    { name: "Navy Blue", hex: "#1E3A8A" },
    { name: "Teal", hex: "#0F766E" },
    { name: "Maroon", hex: "#991B1B" },
    { name: "Olive", hex: "#3F6212" },
    { name: "Lime", hex: "#65A30D" },
    { name: "Aqua", hex: "#06B6D4" },
    { name: "Magenta", hex: "#DB2777" }
  ];

  const categories = ["Electronics", "Audio", "Peripherals", "Display", "Furniture", "Components", "Accessories"];
  const brands = ["Apple", "Samsung", "Sony", "Bose", "DyteGaming", "Razer", "Logitech", "SteelSeries", "Corsair", "HyperX"];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // **REMOVED SIZE VALIDATION HERE**
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct({
          ...newProduct,
          image: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    if (name.startsWith("additionalInformation.")) {
      const field = name.split(".")[1];
      setNewProduct({
        ...newProduct,
        additionalInformation: {
          ...newProduct.additionalInformation,
          [field]: value
        }
      });
    } else {
      setNewProduct({
        ...newProduct,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!newProduct.name.trim()) newErrors.name = "Product name is required";
    if (!newProduct.sku.trim()) newErrors.sku = "SKU is required";
    if (!newProduct.price || parseFloat(newProduct.price) <= 0) newErrors.price = "Valid price is required";
    if (!newProduct.category) newErrors.category = "Category is required";
    if (!newProduct.brand) newErrors.brand = "Brand is required";
    if (!newProduct.description.trim()) newErrors.description = "Description is required";
    if (!newProduct.stockQuantity || parseInt(newProduct.stockQuantity) < 0) newErrors.stockQuantity = "Valid stock quantity is required";

    const skuRegex = /^[A-Z0-9-]+$/;
    if (newProduct.sku.trim() && !skuRegex.test(newProduct.sku.trim().toUpperCase())) {
      newErrors.sku = "SKU can only contain letters, numbers, and hyphens";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addTag = () => {
    if (currentTag.trim() && !newProduct.tags.includes(currentTag.trim())) {
      setNewProduct({
        ...newProduct,
        tags: [...newProduct.tags, currentTag.trim()]
      });
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setNewProduct({
      ...newProduct,
      tags: newProduct.tags.filter(tag => tag !== tagToRemove)
    });
  };

  const addColor = () => {
    if (currentColor) {
      const selectedColor = colorsOptions.find(color => color.name === currentColor);
      if (selectedColor && !newProduct.colors.some(color => color.name === selectedColor.name)) {
        setNewProduct({
          ...newProduct,
          colors: [...newProduct.colors, selectedColor]
        });
        setCurrentColor("");
      }
    }
  };

  const removeColor = (colorToRemove) => {
    setNewProduct({
      ...newProduct,
      colors: newProduct.colors.filter(color => color.name !== colorToRemove)
    });
  };

  const handleTagKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      const firstError = Object.keys(errors)[0];
      if (firstError) {
        const element = document.querySelector(`[name="${firstError}"]`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.focus();
        }
      }
      return;
    }

    setIsSubmitting(true);

    const productData = {
      name: newProduct.name.trim(),
      image: newProduct.image || "/img/default-product.png",
      price: parseFloat(newProduct.price),
      rating: parseInt(newProduct.rating),
      description: newProduct.description.trim(),
      longDescription: newProduct.longDescription.trim(),
      tags: newProduct.tags,
      category: newProduct.category,
      sku: newProduct.sku.trim().toUpperCase(),
      additionalInformation: {
        weight: newProduct.additionalInformation.weight,
        dimensions: newProduct.additionalInformation.dimensions,
        size: newProduct.additionalInformation.size
      },
      colors: newProduct.colors,
      composition: newProduct.composition,
      sizeFit: newProduct.sizeFit,
      brand: newProduct.brand,
      model: newProduct.model,
      stockQuantity: parseInt(newProduct.stockQuantity) || 0,
      warranty: newProduct.warranty,
      status: newProduct.status
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/create`,
        productData,
        { 
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          } 
        }
      );

      if (response.data.success) {
        if (onProductAdded) {
          onProductAdded(response.data.product, false);
        }

        alert('Product added successfully!');
        resetForm();
      } else {
        throw new Error(response.data.message || 'Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert(`Error adding product: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setNewProduct({
      name: "",
      image: "",
      price: "",
      rating: 5,
      description: "",
      longDescription: "",
      tags: [],
      category: "",
      sku: "",
      additionalInformation: {
        weight: "",
        dimensions: "",
        size: ""
      },
      colors: [],
      composition: "",
      sizeFit: "",
      brand: "",
      model: "",
      stockQuantity: "",
      warranty: "",
      status: "active"
    });
    setCurrentTag("");
    setCurrentColor("");
    setErrors({});
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to reset the form? All data will be lost.")) {
      resetForm();
    }
  };

  const getContrastColor = (hexcolor) => {
    if (!hexcolor) return '#000000';
    hexcolor = hexcolor.replace("#", "");
    const r = parseInt(hexcolor.substr(0, 2), 16);
    const g = parseInt(hexcolor.substr(2, 2), 16);
    const b = parseInt(hexcolor.substr(4, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? '#000000' : '#FFFFFF';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Add New Product
              </h2>
              <p className="text-gray-300 text-lg">
                Add a new product to your inventory
              </p>
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-[2px] rounded-xl">
              <div className="bg-gray-900 px-4 py-2 rounded-lg">
                <span className="text-white font-semibold">Product Management</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="bg-gray-900/95 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-gray-700/50 shadow-2xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Basic Information Section */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-gray-700/50 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full mr-3"></div>
                Basic Information
              </h3>
            </div>
            
            <div>
              <label className="block text-lg font-semibold text-white mb-3">Product Name *</label>
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-800 border-2 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 ${
                  errors.name ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
                }`}
                placeholder="e.g., AirPods Pro"
              />
              {errors.name && <p className="text-red-400 text-sm mt-2 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                {errors.name}
              </p>}
            </div>
            
            <div>
              <label className="block text-lg font-semibold text-white mb-3">SKU *</label>
              <input
                type="text"
                name="sku"
                value={newProduct.sku}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-800 border-2 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 ${
                  errors.sku ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
                }`}
                placeholder="e.g., APP-2023"
              />
              {errors.sku && <p className="text-red-400 text-sm mt-2 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                {errors.sku}
              </p>}
            </div>

            <div>
              <label className="block text-lg font-semibold text-white mb-3">Price (₹) *</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">₹</span>
                <input
                  type="number"
                  name="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 bg-gray-800 border-2 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 ${
                    errors.price ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
                  }`}
                  min="0"
                  step="0.01"
                  placeholder="24999"
                />
              </div>
              {errors.price && <p className="text-red-400 text-sm mt-2 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                {errors.price}
              </p>}
            </div>

            <div>
              <label className="block text-lg font-semibold text-white mb-3">Rating *</label>
              <div className="relative">
                <select
                  name="rating"
                  value={newProduct.rating}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 appearance-none"
                >
                  {[1, 2, 3, 4, 5].map(rating => (
                    <option key={rating} value={rating} className="bg-gray-800">
                      {rating} Star{rating > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-white mb-3">Category *</label>
              <div className="relative">
                <select
                  name="category"
                  value={newProduct.category}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-800 border-2 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 appearance-none ${
                    errors.category ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <option value="" className="bg-gray-800">Select Category</option>
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800">{category}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
              {errors.category && <p className="text-red-400 text-sm mt-2 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                {errors.category}
              </p>}
            </div>

            <div>
              <label className="block text-lg font-semibold text-white mb-3">Brand *</label>
              <div className="relative">
                <select
                  name="brand"
                  value={newProduct.brand}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-800 border-2 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 appearance-none ${
                    errors.brand ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <option value="" className="bg-gray-800">Select Brand</option>
                  {brands.map(brand => (
                    <option key={brand} value={brand} className="bg-gray-800">{brand}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
              {errors.brand && <p className="text-red-400 text-sm mt-2 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                {errors.brand}
              </p>}
            </div>

            <div>
              <label className="block text-lg font-semibold text-white mb-3">Model</label>
              <input
                type="text"
                name="model"
                value={newProduct.model}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-gray-600"
                placeholder="e.g., 3rd Generation"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-white mb-3">Stock Quantity *</label>
              <input
                type="number"
                name="stockQuantity"
                value={newProduct.stockQuantity}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-800 border-2 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 ${
                  errors.stockQuantity ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
                }`}
                min="0"
                placeholder="100"
              />
              {errors.stockQuantity && <p className="text-red-400 text-sm mt-2 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                {errors.stockQuantity}
              </p>}
            </div>

            {/* Description Section */}
            <div className="md:col-span-2 mt-8">
              <h3 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-gray-700/50 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full mr-3"></div>
                Product Description
              </h3>
            </div>

            <div className="md:col-span-2">
              <label className="block text-lg font-semibold text-white mb-3">Short Description *</label>
              <textarea
                name="description"
                value={newProduct.description}
                onChange={handleInputChange}
                rows="3"
                className={`w-full px-4 py-3 bg-gray-800 border-2 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none ${
                  errors.description ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
                }`}
                placeholder="Wireless noise cancelling earbuds with premium sound quality..."
              />
              {errors.description && <p className="text-red-400 text-sm mt-2 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                {errors.description}
              </p>}
            </div>

            <div className="md:col-span-2">
              <label className="block text-lg font-semibold text-white mb-3">Long Description</label>
              <textarea
                name="longDescription"
                value={newProduct.longDescription}
                onChange={handleInputChange}
                rows="5"
                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none hover:border-gray-600"
                placeholder="The AirPods Pro feature Active Noise Cancellation, Transparency mode, and a customizable fit for all-day comfort..."
              />
            </div>

            {/* Tags Section */}
            <div className="md:col-span-2">
              <label className="block text-lg font-semibold text-white mb-3">Product Tags</label>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <input
                  type="text"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={handleTagKeyPress}
                  placeholder="Type a tag and press Enter"
                  className="flex-1 px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-gray-600"
                />
                <button
                  type="button"
                  onClick={addTag}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg font-semibold flex items-center"
                >
                  <i className="fas fa-plus mr-2"></i>
                  Add Tag
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {newProduct.tags.map((tag, index) => (
                  <span key={index} className="bg-gradient-to-r from-blue-500 to-cyan-600 px-4 py-2 rounded-full text-white flex items-center gap-2 shadow-lg font-medium">
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="text-white hover:text-gray-200 text-lg font-bold transition-colors hover:scale-110"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="md:col-span-2 mt-8">
              <h3 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-gray-700/50 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full mr-3"></div>
                Additional Information
              </h3>
            </div>

            <div>
              <label className="block text-lg font-semibold text-white mb-3">Weight</label>
              <input
                type="text"
                name="additionalInformation.weight"
                value={newProduct.additionalInformation.weight}
                onChange={handleInputChange}
                placeholder="e.g., 0.45kg"
                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-gray-600"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-white mb-3">Dimensions</label>
              <input
                type="text"
                name="additionalInformation.dimensions"
                value={newProduct.additionalInformation.dimensions}
                onChange={handleInputChange}
                placeholder="e.g., 5.4 x 5.4 x 2.1 cm"
                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-gray-600"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-white mb-3">Size</label>
              <input
                type="text"
                name="additionalInformation.size"
                value={newProduct.additionalInformation.size}
                onChange={handleInputChange}
                placeholder="e.g., One Size"
                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-gray-600"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-white mb-3">Composition</label>
              <input
                type="text"
                name="composition"
                value={newProduct.composition}
                onChange={handleInputChange}
                placeholder="e.g., Plastic, Aluminum, Silicon"
                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-gray-600"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-white mb-3">Size & Fit</label>
              <input
                type="text"
                name="sizeFit"
                value={newProduct.sizeFit}
                onChange={handleInputChange}
                placeholder="e.g., Universal fit with multiple ear tips"
                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-gray-600"
              />
            </div>

            {/* Colors Section */}
            <div className="md:col-span-2">
              <label className="block text-lg font-semibold text-white mb-3">Available Colors</label>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <select
                  value={currentColor}
                  onChange={(e) => setCurrentColor(e.target.value)}
                  className="flex-1 px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 appearance-none"
                >
                  <option value="" className="bg-gray-800">Select a color</option>
                  {colorsOptions.map(color => (
                    <option key={color.name} value={color.name} className="bg-gray-800">
                      {color.name}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={addColor}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg font-semibold flex items-center"
                >
                  <i className="fas fa-palette mr-2"></i>
                  Add Color
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {newProduct.colors.map((color, index) => (
                  <div key={index} className="relative group">
                    <div
                      className="px-4 py-2 rounded-xl shadow-lg border-2 border-gray-700 group-hover:border-cyan-400 transition-all duration-300 flex items-center gap-3 min-w-[120px]"
                      style={{ backgroundColor: color.hex }}
                    >
                      <span 
                        className="font-semibold text-sm"
                        style={{ color: getContrastColor(color.hex) }}
                      >
                        {color.name}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeColor(color.name)}
                        className="text-sm font-bold opacity-70 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110"
                        style={{ color: getContrastColor(color.hex) }}
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Warranty & Status Section */}
            <div>
              <label className="block text-lg font-semibold text-white mb-3">Warranty</label>
              <input
                type="text"
                name="warranty"
                value={newProduct.warranty}
                onChange={handleInputChange}
                placeholder="e.g., 1 year limited warranty"
                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-gray-600"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-white mb-3">Status</label>
              <div className="relative">
                <select
                  name="status"
                  value={newProduct.status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 appearance-none hover:border-gray-600"
                >
                  <option value="active" className="bg-gray-800">Active</option>
                  <option value="inactive" className="bg-gray-800">Inactive</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
            </div>

            {/* Image Upload Section */}
            <div className="md:col-span-2 mt-8">
              <h3 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-gray-700/50 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full mr-3"></div>
                Product Image
              </h3>
              
              <div className="border-3 border-dashed border-gray-700 rounded-2xl p-8 text-center hover:border-cyan-400 transition-all duration-300 bg-gray-800/50">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer block">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <i className="fas fa-cloud-upload-alt text-2xl text-white"></i>
                  </div>
                  <p className="text-white text-lg font-semibold mb-2">Click to upload product image</p>
                  {/* REMOVED FILE SIZE INSTRUCTIONS BELOW */}
                  {/* <p className="text-gray-400 text-sm">PNG, JPG, JPEG up to 10MB</p> */}
                  <p className="text-gray-400 text-sm">PNG, JPG, JPEG formats supported</p>
                </label>
              </div>
              
              {newProduct.image && (
                <div className="mt-6">
                  <p className="text-white font-semibold mb-3">Image Preview:</p>
                  <div className="relative inline-block">
                    <img 
                      src={newProduct.image} 
                      alt="Product preview" 
                      className="h-32 w-32 object-cover rounded-2xl border-2 border-gray-700 shadow-xl"
                    />
                    <button
                      type="button"
                      onClick={() => setNewProduct({...newProduct, image: ""})}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors shadow-lg"
                    >
                      <i className="fas fa-times text-sm"></i>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Form Buttons */}
            <div className="md:col-span-2 flex flex-col sm:flex-row justify-end gap-4 pt-8 mt-8 border-t border-gray-700/50">
              <button
                type="button"
                onClick={handleCancel}
                className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-xl hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg font-semibold flex items-center justify-center"
              >
                <i className="fas fa-redo mr-2"></i>
                Reset Form
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg font-semibold flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Adding Product...
                  </>
                ) : (
                  <>
                    <i className="fas fa-check-circle mr-2"></i>
                    Add Product
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
