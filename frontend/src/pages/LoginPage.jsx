import React from "react";
import HeaderLogin from "../components/HeaderLogin";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import LoginInner from "../components/LoginInner";

const LoginPage = () => {
  return (
    <>
      
       <HeaderLogin/>
      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Login' theme='' inner='Login' />

      {/* LoginInner */}
      <LoginInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default LoginPage;
