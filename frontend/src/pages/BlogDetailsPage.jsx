import React from "react";
import Header from "../components/Header";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import BlogInner from "../components/BlogInner";

const BlogDetailsPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <Header />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='latest' theme='News' inner='Blog Details' />

      {/* BlogInner */}
      <BlogInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default BlogDetailsPage;
