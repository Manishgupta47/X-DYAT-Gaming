import React from "react";
import { Link } from "react-router-dom";

const BlogAreaOne = () => {
  const blogs = [
    {
      img: "/img/blog/1.png",
      date: "March 19, 2024",
      title: "Industry Best of Support Venues Dubai",
    },
    {
      img: "/img/blog/2.png",
      date: "March 19, 2024",
      title: "Game Pass Available Now Exclusive Reward",
    },
    {
      img: "/img/blog/3.png",
      date: "March 19, 2024",
      title: "Industry Best of Support Venues Dubai",
    },
  ];

  return (
    <div className="bg-gray-900 py-28">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h6
            className="text-yellow-400 text-sm uppercase mb-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our Latest Blog
          </h6>
          <h2
            className="text-white text-3xl md:text-4xl font-bold mb-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Our Digital Blog
          </h2>
          <img
            className="mx-auto mt-3"
            src="/img/icon/shalep-1.png"
            alt="decorative"
            data-aos="fade-up"
            data-aos-delay="400"
          />
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div className="overflow-hidden">
                <img
                  src={blog.img}
                  alt={`blog-${index}`}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <span className="text-gray-400 text-sm flex items-center justify-center mb-2">
                  <i className="fa fa-calendar-alt mr-2" />
                  {blog.date}
                </span>
                <h4 className="text-white text-lg font-semibold mb-4">
                  <Link to="/blog-details" className="hover:text-yellow-400 transition-colors">
                    {blog.title}
                  </Link>
                </h4>
                <hr className="border-gray-700 mb-4" />
                <Link
                  to="/blog-details"
                  className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
                >
                  Read More
                  <img src="/img/blog/arrow.png" alt="arrow" className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogAreaOne;
