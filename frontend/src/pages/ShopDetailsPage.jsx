import React from "react";
import Header from "../components/Header";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import ProductDetailsInner from "../components/ProductDetailsInner";

const ShopDetailsPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <Header />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Shop' theme='Details' inner='Shop Details' />

      {/* ProductDetailsInner */}
      <ProductDetailsInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default ShopDetailsPage;
