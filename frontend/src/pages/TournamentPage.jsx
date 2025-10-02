import React from "react";
import Header from "../components/Header";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import TournamentInner from "../components/TournamentInner";
import VideoOne from "../components/VideoOne";
import TeamAreaInnerTwo from "../components/TeamAreaInnerTwo";

const TournamentPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <Header/>

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Tournament' theme='' inner='Tournament' />

      {/* TournamentInner */}
      <TournamentInner />

      {/* VideoOne */}
      <VideoOne />

      {/* TeamAreaInnerTwo */}
      <TeamAreaInnerTwo />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default TournamentPage;
