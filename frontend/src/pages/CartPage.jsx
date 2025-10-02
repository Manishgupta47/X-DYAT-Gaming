import React from "react";
import Header from "../components/Header";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import ProductCart from "../components/ProductCart";

const CartPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <Header />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Cart' theme='' inner='Cart' />

      {/* ProductCart */}
      <ProductCart />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default CartPage;
