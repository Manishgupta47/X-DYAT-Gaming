import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogArea = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="blog-area py-16 bg-[#0f111a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Main Content Area */}
          <div className="w-full lg:w-8/12 lg:pr-8">
            {/* First Blog Post */}
            <div
              className="single-blog-inner bg-gray-800 rounded-lg overflow-hidden shadow-md mb-8 border border-gray-700"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="thumb">
                <img src="/img/blog/1.png" alt="blog post" className="w-full" />
              </div>
              <div className="details p-6">
                <div className="cat mb-4">
                  <Link
                    to="#"
                    className="text-xs font-semibold text-blue-400 bg-blue-900 px-3 py-1 rounded-full"
                  >
                    Victory
                  </Link>
                </div>
                <h2 className="title text-2xl font-bold mb-4">
                  <Link
                    to="/blog-details"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    THE FIRST WEB3 GAME like
                  </Link>
                </h2>
                <ul className="blog-meta flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                  <li>
                    <i className="far fa-user mr-1" /> By Admin
                  </li>
                  <li>
                    <i className="far fa-calendar-alt mr-1" /> March 10, 2024
                  </li>
                  <li>
                    <i className="far fa-comments mr-1" /> Category
                  </li>
                </ul>
                <p className="text-gray-300 mb-4">
                  We think your skin should look and refhed matted Nourish your
                  outecon secture'ar inner deauty with our essential infused
                  include hits like have the best online games.
                </p>
                <Link
                  className="read-more-text mt-3 inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors"
                  to="/blog-details"
                >
                  Read More <i className="fas fa-angle-double-right ml-2" />
                </Link>
              </div>
            </div>

            {/* Second Blog Post */}
            <div
              className="single-blog-inner bg-gray-800 rounded-lg overflow-hidden shadow-md mb-8 border border-gray-700"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="thumb">
                <img src="/img/blog/2.png" alt="blog post" className="w-full" />
              </div>
              <div className="details p-6">
                <div className="cat mb-4">
                  <Link
                    to="#"
                    className="text-xs font-semibold text-blue-400 bg-blue-900 px-3 py-1 rounded-full"
                  >
                    Victory
                  </Link>
                </div>
                <ul className="blog-meta flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                  <li>
                    <i className="far fa-user mr-1" /> By Admin
                  </li>
                  <li>
                    <i className="far fa-folder-open mr-1" /> Category
                  </li>
                </ul>
                <h2 className="title text-2xl font-bold mb-4">
                  <Link
                    to="/blog-details"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    Successful Agricultural Guide to Running Beginner
                  </Link>
                </h2>
                <p className="text-gray-300 mb-4">
                  Aliquam eros justo, posuere loborti viverra lao ullamcorper
                  posuere viverra .Aliquam eros justo, posuere Aliquam eros
                  justo, posuere loborti viverra laoreet matti ullamcorper
                </p>
                <Link
                  className="btn btn-base mt-3 inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  to="/service-details"
                >
                  Read More <i className="fa fa-arrow-right ml-2" />
                </Link>
              </div>
            </div>

            {/* Third Blog Post */}
            <div
              className="single-blog-inner bg-gray-800 rounded-lg overflow-hidden shadow-md mb-8 border border-gray-700"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="thumb">
                <img src="/img/blog/3.png" alt="blog post" className="w-full" />
              </div>
              <div className="details p-6">
                <div className="cat mb-4">
                  <Link
                    to="#"
                    className="text-xs font-semibold text-blue-400 bg-blue-900 px-3 py-1 rounded-full"
                  >
                    Victory
                  </Link>
                </div>
                <ul className="blog-meta flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                  <li>
                    <i className="far fa-user mr-1" /> By Admin
                  </li>
                  <li>
                    <i className="far fa-folder-open mr-1" /> Category
                  </li>
                </ul>
                <h2 className="title text-2xl font-bold mb-4">
                  <Link
                    to="/blog-details"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    A Beginner's Guide to Running a Successful Agricultural
                  </Link>
                </h2>
                <p className="text-gray-300 mb-4">
                  Aliquam eros justo, posuere loborti viverra lao ullamcorper
                  posuere viverra .Aliquam eros justo, posuere Aliquam eros
                  justo, posuere loborti viverra laoreet matti ullamcorper
                </p>
                <Link
                  className="btn btn-base mt-3 inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  to="/service-details"
                >
                  Read More <i className="fa fa-arrow-right ml-2" />
                </Link>
              </div>
            </div>

            {/* Pagination */}
            <div
              className="pagination flex justify-center items-center space-x-2 mt-8"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <Link className="prev page-numbers w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors" to="#">
                <i className="fa fa-angle-left" />
              </Link>
              <Link className="page-numbers w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors" to="#">
                1
              </Link>
              <span className="page-numbers current w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white border border-blue-600">
                2
              </span>
              <Link className="page-numbers w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors" to="#">
                3
              </Link>
              <Link className="next page-numbers w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors" to="#">
                <i className="fa fa-angle-right" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div
            className="w-full lg:w-4/12 mt-8 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div className="td-sidebar space-y-8">
              {/* Author Widget */}
              <div className="widget widget_author bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
                <div className="thumb mb-4">
                  <img
                    src="/img/widget/author.png"
                    alt="author"
                    className="rounded-full mx-auto w-24 h-24 object-cover"
                  />
                </div>
                <div className="details text-center">
                  <h4 className="text-lg font-bold mb-2 text-white">
                    ABOUT AUTHOR
                  </h4>
                  <p className="mb-4 text-gray-400">
                    We think your skn should looresk referyd matter Nourish
                    yours outecwo resnsectr our essential products
                  </p>
                  <img
                    src="/img/widget/signature.png"
                    alt="signature"
                    className="mx-auto"
                  />
                </div>
              </div>

              {/* Category Widget */}
              <div className="widget widget_catagory bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
                <h4 className="widget-title text-xl font-bold mb-4 pb-2 border-b border-gray-700 text-white">
                  Category
                </h4>
                <ul className="catagory-items space-y-3">
                  <li>
                    <Link
                      to="/blog"
                      className="flex justify-between items-center text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <span>
                        <i className="fas fa-caret-right mr-2 text-blue-400" />{" "}
                        Business
                      </span>
                      <span className="bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-300">
                        3
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="flex justify-between items-center text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <span>
                        <i className="fas fa-caret-right mr-2 text-blue-400" />{" "}
                        Finance
                      </span>
                      <span className="bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-300">
                        7
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="flex justify-between items-center text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <span>
                        <i className="fas fa-caret-right mr-2 text-blue-400" />{" "}
                        Web Design
                      </span>
                      <span className="bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-300">
                        2
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="flex justify-between items-center text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <span>
                        <i className="fas fa-caret-right mr-2 text-blue-400" />{" "}
                        Counsiling
                      </span>
                      <span className="bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-300">
                        3
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="flex justify-between items-center text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <span>
                        <i className="fas fa-caret-right mr-2 text-blue-400" />{" "}
                        IT Service
                      </span>
                      <span className="bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-300">
                        5
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Recent Posts Widget */}
              <div
                className="widget widget-recent-post bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <h4 className="widget-title text-xl font-bold mb-4 pb-2 border-b border-gray-700 text-white">
                  Recent News
                </h4>
                <ul className="space-y-4">
                  <li>
                    <div className="media flex items-start space-x-3">
                      <div className="media-left flex-shrink-0">
                        <img
                          src="/img/widget/1.png"
                          alt="blog"
                          className="w-16 h-16 object-cover rounded"
                        />
                      </div>
                      <div className="media-body">
                        <h6 className="title font-medium text-white hover:text-blue-400 transition-colors">
                          <Link to="/blog-details">THE FIRST WEB3 GAME</Link>
                        </h6>
                        <div className="post-info text-sm text-gray-400 mt-1">
                          <i className="far fa-calendar-alt mr-1" />
                          <span>15 October</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media flex items-start space-x-3">
                      <div className="media-left flex-shrink-0">
                        <img
                          src="/img/widget/2.png"
                          alt="blog"
                          className="w-16 h-16 object-cover rounded"
                        />
                      </div>
                      <div className="media-body">
                        <h6 className="title font-medium text-white hover:text-blue-400 transition-colors">
                          <Link to="/blog-details">
                            Startup Ideas for Digital Design
                          </Link>
                        </h6>
                        <div className="post-info text-sm text-gray-400 mt-1">
                          <i className="far fa-calendar-alt mr-1" />
                          <span>15 October</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media flex items-start space-x-3">
                      <div className="media-left flex-shrink-0">
                        <img
                          src="/img/widget/3.png"
                          alt="blog"
                          className="w-16 h-16 object-cover rounded"
                        />
                      </div>
                      <div className="media-body">
                        <h6 className="title font-medium text-white hover:text-blue-400 transition-colors">
                          <Link to="/blog-details">ACROSS MOBILE or PC game!</Link>
                        </h6>
                        <div className="post-info text-sm text-gray-400 mt-1">
                          <i className="far fa-calendar-alt mr-1" />
                          <span>15 October</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Tags Widget */}
              <div
                className="widget widget_tag_cloud bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <h4 className="widget-title text-xl font-bold mb-4 pb-2 border-b border-gray-700 text-white">
                  Tags
                </h4>
                <div className="tagcloud flex flex-wrap gap-2">
                  <Link
                    to="#"
                    className="text-sm text-gray-300 bg-gray-700 hover:bg-blue-600 hover:text-white px-3 py-1 rounded-full transition-colors"
                  >
                    Crazy Games
                  </Link>
                  <Link
                    to="#"
                    className="text-sm text-gray-300 bg-gray-700 hover:bg-blue-600 hover:text-white px-3 py-1 rounded-full transition-colors"
                  >
                    Post Type
                  </Link>
                  <Link
                    to="#"
                    className="text-sm text-gray-300 bg-gray-700 hover:bg-blue-600 hover:text-white px-3 py-1 rounded-full transition-colors"
                  >
                    Who Stickman Hook
                  </Link>
                  <Link
                    to="#"
                    className="text-sm text-gray-300 bg-gray-700 hover:bg-blue-600 hover:text-white px-3 py-1 rounded-full transition-colors"
                  >
                    Playhop
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArea;
