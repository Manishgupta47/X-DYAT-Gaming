import React from "react";
import Header from "../components/Header";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import ExploreProductInner from "../components/ExploreProductInner";

const ExploreProductPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <Header />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Explore' theme='Product' inner='Explore Product' />

      {/* ExploreProductInner */}
      <ExploreProductInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default ExploreProductPage;
