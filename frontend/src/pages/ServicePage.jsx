import React from "react";
import Header from "../components/Header";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import PlatformOne from "../components/PlatformOne";
import VideoOne from "../components/VideoOne";
import CreatorOne from "../components/CreatorOne";
import TestimonialAreaOne from "../components/TestimonialAreaOne";

const ServicePage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <Header />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Our' theme='Service' inner='Service' />

      {/* PlatformOne */}
      <PlatformOne />

      {/* VideoOne */}
      <VideoOne />

      {/* CreatorOne */}
      <CreatorOne />

      {/* TestimonialAreaOne */}
      <TestimonialAreaOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default ServicePage;
