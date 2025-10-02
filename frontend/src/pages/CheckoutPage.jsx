import React from "react";
import Header from "../components/Header";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import CheckoutCartInner from "../components/CheckoutCartInner";

const CheckoutPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <Header />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Checkout' theme='' inner='Checkout' />

      {/* CheckoutCartInner */}
      <CheckoutCartInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default CheckoutPage;
