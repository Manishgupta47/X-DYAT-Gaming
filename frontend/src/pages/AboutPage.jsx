import React from "react";
import Header from "../components/Header";
import BreadcrumbOne from "../components/BreadcrumbOne";
import AboutAreaThree from "../components/AboutAreaThree";
import RoadmapOne from "../components/RoadmapOne";
import TestimonialAreaTwo from "../components/TestimonialAreaTwo";
import FooterOne from "../components/FooterOne";

const AboutPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <Header />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='about' theme='us' inner='About us' />

      {/* AboutInnerOne */}
      <AboutAreaThree />

      {/* RoadmapInner */}
      <RoadmapOne />

      {/* TestimonialAreaTwo */}
      <TestimonialAreaTwo />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default AboutPage;
