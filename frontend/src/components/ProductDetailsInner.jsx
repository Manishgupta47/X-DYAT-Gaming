import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const ProductDetailsInner = () => {
  const { id } = useParams(); // ProductId from URL
  const [product, setProduct] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeColor, setActiveColor] = useState("");
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Fetch product details
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  const handleColorClick = (color) => {
    setActiveColor(color);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleAddToCart = async () => {
    if (!product) return;

    const token = localStorage.getItem("token"); // JWT from login
    if (token) {
      try {
        await axios.post(
          "http://localhost:5000/api/cart/add",
          { productId: product.ProductId, quantity: 1, color: activeColor },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        alert(`${product.name} added to cart!`);
        navigate("/cart"); // ✅ redirect to /cart after success
      } catch (err) {
        console.error("Cart add error:", err);
        alert("Failed to add to cart.");
      }
    } else {
      console.log("Added to cart (local only):", product);
      alert(`${product.name} added to cart!`);
      navigate("/cart"); // ✅ redirect even without backend
    }
  };
  
  if (!product) {
    return <div className="text-white p-6">Loading...</div>;
  }

  // Exclude current product from related
  const relatedProducts =
    product.relatedProducts?.filter(
      (relatedProduct) => relatedProduct.ProductId !== product.ProductId
    ) || [];

  return (
    <>
      {/* Product-details area */}
      <div
        className="product-details-area py-16 bg-[#0b1120] text-white"
        data-aos="fade-up"
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap -mx-6">
            {/* Product Image Slider */}
            <div className="lg:w-1/2 px-6 mb-12 lg:mb-0">
              <div className="product-details-wrap">
                <div className="mb-8 rounded-lg overflow-hidden bg-[#131927] border border-[#222c38] p-6">
                  <img
                    src={`http://localhost:5000${product.image}`}
                    alt={product.name}
                    className="w-full h-200 object-contain mx-auto"
                    style={{ maxHeight: "300px" }}
                  />
                </div>

                {/* Thumbnail Slider */}
                <div className="product-small-slider-wrap mt-4">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    onSwiper={setThumbsSwiper}
                    className="cursor-pointer"
                  >
                    {product.thumbnailImages?.length > 0 ? (
                      product.thumbnailImages.map((img, index) => (
                        <SwiperSlide key={index}>
                          <div className="border border-[#222c38] rounded-lg p-2 hover:border-yellow-400 transition-all duration-200 bg-[#131927] group">
                            <img
                              src={`http://localhost:5000${img}`}
                              alt={`Thumbnail ${index}`}
                              className="w-full h-20 object-contain rounded-md group-hover:scale-105 transition-transform duration-200"
                            />
                          </div>
                        </SwiperSlide>
                      ))
                    ) : (
                      <div>No thumbnails available</div>
                    )}
                  </Swiper>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="lg:w-1/2 px-6 flex flex-col justify-center">
              <div className="product-details">
                <h2 className="uppercase font-bold mb-4 text-4xl tracking-wide">
                  {product.name}
                </h2>

                <div className="price mb-6 flex items-center">
                  <span className="text-yellow-400 text-3xl font-bold mr-4">
                    €{product.price}
                  </span>
                </div>

                <div className="flex items-center mb-6 text-yellow-400 text-lg">
                  {"★".repeat(product.rating)}
                  <span className="ml-3 text-gray-300 font-semibold text-sm">
                    100% Quality
                  </span>
                </div>

                <p className="mb-8 text-gray-300 leading-relaxed text-base border-l-4 border-yellow-400 pl-4 py-2">
                  {product.longDescription}
                </p>

                {/* Color Selection */}
                <div className="color-plate mb-8">
                  <span className="block text-gray-300 font-semibold mb-3 text-sm">
                    COLOR:
                  </span>
                  <div className="flex space-x-3">
                    {product.additionalInformation?.colors?.map(
                      (color, idx) => (
                        <span
                          key={idx}
                          className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
                            activeColor === color
                              ? "border-yellow-400"
                              : "border-gray-600"
                          }`}
                          style={{ backgroundColor: color.toLowerCase() }}
                          onClick={() => handleColorClick(color)}
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div className="mb-8">
                  <button
                    onClick={handleAddToCart}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>

                {/* Meta */}
                <div className="product-meta border-t border-[#222c38] pt-6">
                  <div className="info-list-product text-gray-300 text-sm mb-2">
                    <span className="font-semibold mr-2">SKU:</span>
                    <span>{product.sku}</span>
                  </div>
                  <div className="info-list-product text-gray-300 text-sm mb-2">
                    <span className="font-semibold mr-2">CATEGORY:</span>
                    <span className="text-yellow-400 hover:underline">
                      {product.category}
                    </span>
                  </div>
                  <div className="info-list-product text-gray-300 text-sm">
                    <span className="font-semibold mr-2">TAGS:</span>
                    {product.tags?.length > 0 ? (
                      product.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-yellow-400 hover:underline mr-2"
                        >
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span>No tags available</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product-details tab start */}
      <div
        className="product-details-tab-area py-16 bg-[#0b1120] text-white"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap -mx-6">
            <div className="w-full px-6">
              <div className="product-details-tabs-wrap border-b border-[#222c38] pb-6 mb-8">
                <ul className="product-details-tabs nav flex space-x-8">
                  <li>
                    <button
                      className={`uppercase font-bold text-lg pb-2 border-b-2 ${
                        activeTab === "description"
                          ? "text-yellow-400 border-yellow-400"
                          : "text-gray-400 border-transparent hover:text-yellow-400"
                      }`}
                      onClick={() => handleTabChange("description")}
                    >
                      DESCRIPTION
                    </button>
                  </li>
                  <li>
                    <button
                      className={`uppercase font-bold text-lg pb-2 border-b-2 ${
                        activeTab === "information"
                          ? "text-yellow-400 border-yellow-400"
                          : "text-gray-400 border-transparent hover:text-yellow-400"
                      }`}
                      onClick={() => handleTabChange("information")}
                    >
                      ADDITIONAL INFORMATION
                    </button>
                  </li>
                  <li>
                    <button
                      className={`uppercase font-bold text-lg pb-2 border-b-2 ${
                        activeTab === "reviews"
                          ? "text-yellow-400 border-yellow-400"
                          : "text-gray-400 border-transparent hover:text-yellow-400"
                      }`}
                      onClick={() => handleTabChange("reviews")}
                    >
                      REVIEWS (0)
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-6">
              <div className="tab-content product-tab-content-wrap">
                {activeTab === "description" && (
                  <div>
                    <p className="text-gray-300 text-base leading-relaxed">
                      {product.longDescription}
                    </p>
                  </div>
                )}

                {activeTab === "information" && (
                  <div>
                    <table className="w-full border-collapse text-gray-300 text-base">
                      <tbody>
                        <tr className="border-b border-[#222c38]">
                          <td className="py-4 font-semibold text-yellow-400 w-1/4">
                            Weight
                          </td>
                          <td className="py-4">
                            {product.additionalInformation?.weight || "-"}
                          </td>
                        </tr>
                        <tr className="border-b border-[#222c38]">
                          <td className="py-4 font-semibold text-yellow-400">
                            Dimensions
                          </td>
                          <td className="py-4">
                            {product.additionalInformation?.dimensions || "-"}
                          </td>
                        </tr>
                        <tr className="border-b border-[#222c38]">
                          <td className="py-4 font-semibold text-yellow-400">
                            Size
                          </td>
                          <td className="py-4">
                            {product.additionalInformation?.size || "-"}
                          </td>
                        </tr>
                        <tr className="border-b border-[#222c38]">
                          <td className="py-4 font-semibold text-yellow-400">
                            Color
                          </td>
                          <td className="py-4">
                            {product.additionalInformation?.colors?.join(", ") ||
                              "-"}
                          </td>
                        </tr>
                        <tr className="border-b border-[#222c38]">
                          <td className="py-4 font-semibold text-yellow-400">
                            Composition
                          </td>
                          <td className="py-4">
                            {product.additionalInformation?.composition || "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="py-4 font-semibold text-yellow-400">
                            Size & Fit
                          </td>
                          <td className="py-4">
                            {product.additionalInformation?.sizeFit || "-"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div className="text-center py-12">
                    <p className="text-gray-400 text-lg">
                      There are no reviews yet.
                    </p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg mt-6 transition">
                      Be the first to review "{product.name}"
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div
        className="product-area py-16 bg-[#0b1120] text-white"
        data-aos="fade-up"
        data-aos-duration="1800"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="section-title text-center mb-14">
            <h2 className="font-extrabold text-4xl">
              RELATED <span className="text-yellow-400">PRODUCTS</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.length > 0 ? (
              relatedProducts.slice(0, 3).map((relatedProduct, idx) => (
                <div
                  key={idx}
                  className="single-product-inner bg-[#131927] rounded-xl border border-[#222c38] p-6 text-center hover:border-yellow-400/30 transition-all group"
                >
                  <div className="thumb mb-4">
                    <Link to={`/product-details/${relatedProduct.ProductId}`}>
                      <img
                        src={`http://localhost:5000${relatedProduct.image}`}
                        alt={relatedProduct.name}
                        className="mx-auto w-[120px] h-[150px] object-cover"
                      />
                    </Link>
                  </div>
                  <div className="details">
                    <h4 className="text-lg font-semibold mb-2 text-white group-hover:text-yellow-400 transition">
                      {relatedProduct.name}
                    </h4>
                    <div className="ratting text-yellow-400 mb-3 text-sm">
                      {"★".repeat(relatedProduct.rating)}
                    </div>
                    <h6 className="font-bold text-yellow-400 text-lg">
                      €{relatedProduct.price}
                    </h6>
                  </div>
                </div>
              ))
            ) : (
              <div>No related products available</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsInner;
