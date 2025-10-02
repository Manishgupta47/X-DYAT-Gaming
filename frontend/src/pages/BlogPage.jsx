import React from "react";
import Header from "../components/Header";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import BlogArea from "../components/BlogArea";

const BlogPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <Header />
      {/* BreadcrumbOne */}
      <BreadcrumbOne title='latest' theme='News' inner='Blog' />

      {/* BlogArea */}
      <BlogArea />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default BlogPage;
