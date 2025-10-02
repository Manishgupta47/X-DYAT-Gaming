import React from "react";
import Header from "../components/Header";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import TeamAreaInner from "../components/TeamAreaInner";

const CreatorsPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <Header />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Top' theme='Creators' inner='Top Creators' />

      {/* TeamAreaInner */}
      <TeamAreaInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default CreatorsPage;
