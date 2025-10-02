import React from "react";
import Header from "../components/Header";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import TournamentDetailsInner from "../components/TournamentDetailsInner";

const TournamentDetailsPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <Header/>

      {/* BreadcrumbOne */}
      <BreadcrumbOne
        title='Tournament'
        theme='Details'
        inner='Tournament Details'
      />

      {/* TournamentDetailsInner */}
      <TournamentDetailsInner />

      {/* FooterOne */}
      <div className='tournament__footer mt--35'>
        <FooterOne />
      </div>
    </>
  );
};

export default TournamentDetailsPage;
