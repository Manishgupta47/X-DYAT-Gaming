import React from "react";
import Header from "../components/Header";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import ShopInner from "../components/ShopInner";

const ShopPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <Header />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Shop' theme='' inner='Shop' />

      {/* ShopInner */}
      <ShopInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default ShopPage;
