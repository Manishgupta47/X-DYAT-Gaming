import React from "react";
import HeaderRegister from "../components/HeaderRegister";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import RegisterInner from "../components/RegisterInner";

const RegisterPage = () => {
  return (
    <>
      
       <HeaderRegister/>
      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Register' theme='' inner='Register' />

      {/* LoginInner */}
      <RegisterInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default RegisterPage;
