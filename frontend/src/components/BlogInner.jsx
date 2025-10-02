import React from "react";
import { Link } from "react-router-dom";

const BlogInner = () => {
  return (
    <div className="py-20 bg-black text-gray-300">
      {/* Add Font Awesome CDN in public/index.html or use react-icons package instead */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
      />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full lg:w-8/12">
            <div
              className="blog-details-page-content"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {/* Blog Post */}
              <div className="bg-[#0b1120] rounded-xl shadow-lg overflow-hidden mb-8 border border-gray-800">
                <div className="thumb mb-6">
                  <img
                    className="w-full h-96 object-cover rounded-t-xl"
                    src="/img/blog/3.png"
                    alt="blog"
                    loading="lazy"
                  />
                </div>
                <div className="details px-6 pb-8">
                  <div className="cat pt-2">
                    <Link
                      to="#"
                      className="inline-block px-4 py-1 bg-purple-900 text-purple-400 rounded-full text-sm font-semibold mb-4 hover:bg-purple-700 transition-colors"
                    >
                      Victory
                    </Link>
                  </div>
                  <ul className="blog-meta flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <li className="flex items-center gap-2">
                      <i className="far fa-user"></i> By Admin
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="far fa-folder-open"></i> Category
                    </li>
                  </ul>
                  <h2 className="title text-3xl font-extrabold text-white mb-4 leading-tight">
                    <Link
                      to="/blog-details"
                      className="hover:text-purple-400 transition-colors"
                    >
                      FIRST 4 MAPS ARE READY!
                    </Link>
                  </h2>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Do you think your skin should look and feel refreshed matte? Nourish your outer skin texture and inner beauty with our essentials including hits like the best online games...
                  </p>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    We think your skin should look and feel refreshed matte? Nourish your outer skin texture and inner beauty with our essentials including hits like the best online games...
                  </p>
                  <blockquote className="text-center bg-purple-900/50 p-8 rounded-lg border-l-4 border-purple-600 mb-6">
                    <p className="text-xl italic text-purple-300">
                      "In a space saturated by rushed, low-quality video games, Victory Point designed by a top-notch gaming studio filled"
                    </p>
                  </blockquote>
                  <h4 className="title text-xl font-bold text-white mb-4">
                    <Link
                      to="/blog-details"
                      className="hover:text-purple-400 transition-colors"
                    >
                      play high-quality browser games
                    </Link>
                  </h4>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...
                  </p>
                  <div className="row grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="thumb">
                      <img
                        src="/img/blog/7.png"
                        alt="blog"
                        className="w-full h-64 object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                    <div className="thumb">
                      <img
                        src="/img/blog/8.png"
                        alt="blog"
                        className="w-full h-64 object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...
                  </p>
                  <div className="tag-and-share flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-6 border-t border-gray-800">
                    <div className="tags">
                      <strong className="text-gray-300 mr-2">Tag :</strong>
                      <Link
                        to="#"
                        className="text-purple-400 hover:text-purple-600 transition-colors mr-1"
                      >
                        Crazy Game,
                      </Link>
                      <Link
                        to="#"
                        className="text-purple-400 hover:text-purple-600 transition-colors"
                      >
                        Post Type
                      </Link>
                    </div>
                    <div className="blog-share">
                      <strong className="text-gray-300 mr-2">Share :</strong>
                      <ul className="inline-flex gap-2">
                        <li>
                          <Link
                            to="#"
                            className="w-10 h-10 flex items-center justify-center bg-gray-900 text-gray-400 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                          >
                            <i className="fab fa-twitter text-sm"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="w-10 h-10 flex items-center justify-center bg-gray-900 text-gray-400 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                          >
                            <i className="fab fa-linkedin-in text-sm"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="w-10 h-10 flex items-center justify-center bg-gray-900 text-gray-400 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                          >
                            <i className="fab fa-instagram text-sm"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="blog-author flex flex-col md:flex-row items-start gap-6 bg-[#0b1120] p-6 rounded-xl shadow-lg mb-8 border border-gray-800">
                <div className="thumb">
                  <img
                    src="/img/blog/author.png"
                    alt="author"
                    className="w-24 h-24 rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="details">
                  <h4 className="name text-xl font-bold text-white mb-2">Arika Mark</h4>
                  <p className="text-gray-400 mb-4">
                    We think your skin should look and feel refreshed matte. Nourish your outer skin texture with our essential products.
                  </p>
                  <div className="social flex gap-2">
                    <Link
                      to="#"
                      className="w-10 h-10 flex items-center justify-center bg-gray-900 text-gray-400 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                    >
                      <i className="fab fa-twitter text-sm"></i>
                    </Link>
                    <Link
                      to="#"
                      className="w-10 h-10 flex items-center justify-center bg-gray-900 text-gray-400 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                    >
                      <i className="fab fa-linkedin-in text-sm"></i>
                    </Link>
                    <Link
                      to="#"
                      className="w-10 h-10 flex items-center justify-center bg-gray-900 text-gray-400 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                    >
                      <i className="fab fa-instagram text-sm"></i>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Comments */}
              <div className="blog-comment bg-[#0b1120] p-6 rounded-xl shadow-lg mb-8 border border-gray-800">
                <h4 className="text-2xl font-bold text-white mb-2">Leave a Comment</h4>
                <p className="text-gray-400 mb-6">Your E-mail address will not be published</p>
                <ul className="comment-list space-y-6">
                  <li className="comment">
                    <div className="comment-body">
                      <footer className="comment-meta flex items-center gap-4 mb-3">
                        <div className="comment-author vcard flex items-center gap-3">
                          <img
                            className="avatar w-12 h-12 rounded-full object-cover"
                            alt="author"
                            src="/img/blog/author.png"
                            loading="lazy"
                          />
                          <div>
                            <Link
                              to="#"
                              rel="external nofollow ugc"
                              className="text-white font-semibold hover:text-purple-400 transition-colors"
                            >
                              Mike Dooley
                            </Link>
                            <span className="block text-sm text-gray-500">25.08.2024.</span>
                          </div>
                        </div>
                      </footer>
                      <div className="comment-content mt-2">
                        <p className="text-gray-400">
                          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old...
                        </p>
                      </div>
                      <div className="reply mt-3">
                        <Link
                          rel="nofollow"
                          className="comment-reply-link text-purple-400 hover:text-purple-600 transition-colors flex items-center gap-1"
                          to="#"
                        >
                          Reply <i className="fa fa-reply"></i>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="comment">
                    <div className="comment-body">
                      <footer className="comment-meta flex items-center gap-4 mb-3">
                        <div className="comment-author vcard flex items-center gap-3">
                          <img
                            className="avatar w-12 h-12 rounded-full object-cover"
                            alt="author"
                            src="/img/blog/author2.png"
                            loading="lazy"
                          />
                          <div>
                            <Link
                              to="#"
                              rel="external nofollow ugc"
                              className="text-white font-semibold hover:text-purple-400 transition-colors"
                            >
                              John Κώστας Doe Τάδε
                            </Link>
                            <span className="block text-sm text-gray-500">25.08.2024.</span>
                          </div>
                        </div>
                      </footer>
                      <div className="comment-content mt-2">
                        <p className="text-gray-400">
                          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...
                        </p>
                      </div>
                      <div className="reply mt-3">
                        <Link
                          rel="nofollow"
                          className="comment-reply-link text-purple-400 hover:text-purple-600 transition-colors flex items-center gap-1"
                          to="#"
                        >
                          Reply <i className="fa fa-reply"></i>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Comment Form */}
              <form className="blog-comment-form bg-[#0b1120] p-6 rounded-xl shadow-lg border border-gray-800">
                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-white">Leave a Reply</h4>
                </div>
                <div className="space-y-4">
                  <div className="single-input-inner">
                    <textarea
                      placeholder="Message"
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="single-input-inner">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
                    </div>
                    <div className="single-input-inner">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="single-input-inner">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-400">
                      Save my name, email, and website in this browser for the next time I comment.
                    </span>
                  </div>
                  <div className="mt-6">
                    <button className="w-full bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition uppercase">
                      Post Comment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-4/12">
            <div
              className="td-sidebar space-y-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {/* Author Widget */}
              <div className="widget widget_author bg-[#0b1120] p-6 rounded-xl shadow-lg border border-gray-800">
                <div className="thumb mb-4">
                  <img
                    src="/img/widget/author.png"
                    alt="author"
                    className="w-full h-64 object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="details">
                  <h4 className="text-xl font-bold text-white mb-3">ABOUT AUTHOR</h4>
                  <p className="text-gray-400 mb-4">
                    We think your skin should look and feel refreshed matte. Nourish your outer skin texture with our essential products.
                  </p>
                  <img
                    src="/img/widget/signature.png"
                    alt="signature"
                    className="w-32"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Category Widget */}
              <div className="widget widget_catagory bg-[#0b1120] p-6 rounded-xl shadow-lg border border-gray-800">
                <h4 className="widget-title text-xl font-bold text-white mb-4">Category</h4>
                <ul className="catagory-items space-y-3">
                  {[
                    { name: "Business", count: 3 },
                    { name: "Finance", count: 7 },
                    { name: "Web Design", count: 2 },
                    { name: "Counseling", count: 3 },
                    { name: "IT Service", count: 5 }
                  ].map((item, index) => (
                    <li key={index}>
                      <Link
                        to="/blog"
                        className="flex justify-between items-center text-gray-400 hover:text-purple-400 transition-colors py-2 border-b border-gray-800"
                      >
                        <span className="flex items-center gap-2">
                          <i className="fas fa-caret-right text-purple-600"></i>
                          {item.name}
                        </span>
                        <span className="bg-gray-900 text-gray-400 text-xs px-2 py-1 rounded-full">
                          {item.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts Widget */}
              <div className="widget widget-recent-post bg-[#0b1120] p-6 rounded-xl shadow-lg border border-gray-800">
                <h4 className="widget-title text-xl font-bold text-white mb-4">Recent News</h4>
                <ul className="space-y-4">
                  {[
                    {
                      image: "/img/widget/1.png",
                      title: "THE FIRST WEB3 GAME",
                      date: "15 October"
                    },
                    {
                      image: "/img/widget/2.png",
                      title: "Startup Ideas for Digital Design",
                      date: "15 October"
                    },
                    {
                      image: "/img/widget/3.png",
                      title: "ACROSS MOBILE or PC game!",
                      date: "15 October"
                    }
                  ].map((post, index) => (
                    <li key={index}>
                      <div className="media flex items-start gap-3">
                        <div className="media-left flex-shrink-0">
                          <img
                            src={post.image}
                            alt="blog"
                            className="w-16 h-16 object-cover rounded-lg"
                            loading="lazy"
                          />
                        </div>
                        <div className="media-body">
                          <h6 className="title text-sm font-semibold text-white mb-1">
                            <Link
                              to="/blog-details"
                              className="hover:text-purple-400 transition-colors"
                            >
                              {post.title}
                            </Link>
                          </h6>
                          <div className="post-info flex items-center gap-1 text-xs text-gray-400">
                            <i className="far fa-calendar-alt"></i>
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags Widget */}
              <div className="widget widget_tag_cloud bg-[#0b1120] p-6 rounded-xl shadow-lg border border-gray-800">
                <h4 className="widget-title text-xl font-bold text-white mb-4">Tags</h4>
                <div className="tagcloud flex flex-wrap gap-2">
                  {["Crazy Games", "Post Type", "Who Stickman Hook", "Playhop"].map((tag, index) => (
                    <Link
                      key={index}
                      to="#"
                      className="px-3 py-1 bg-gray-900 text-gray-400 text-sm rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogInner; 