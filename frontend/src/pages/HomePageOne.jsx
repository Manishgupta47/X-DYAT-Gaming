import React from "react";
import Header from "../components/Header";
import BannerOne from "../components/BannerOne";
import FeatureAreaOne from "../components/FeatureAreaOne";
import AboutAreaOne from "../components/AboutAreaOne";
import TopAuctionAreaOne from "../components/TopAuctionAreaOne";
import BlockChainGalleryAreaOne from "../components/BlockChainGalleryAreaOne";
import CreatorAreaOne from "../components/CreatorAreaOne";
import TestimonialAreaOne from "../components/TestimonialAreaOne";
import PartnerAreaOne from "../components/PartnerAreaOne";
import FooterOne from "../components/FooterOne";
import TopSellerAreaOne from "../components/TopSellerAreaOne";
import Animation from "../helper/Animation";

const HomePageOne = () => {
  return (
    <>
      <Header />

      <Animation><BannerOne /></Animation>
      <Animation><FeatureAreaOne /></Animation>
      <Animation><TopSellerAreaOne /></Animation>
      <Animation><AboutAreaOne /></Animation>
      <Animation><TopAuctionAreaOne /></Animation>
      <Animation><BlockChainGalleryAreaOne /></Animation>
      <Animation><CreatorAreaOne /></Animation>
      <Animation><TestimonialAreaOne /></Animation>
      <Animation><PartnerAreaOne /></Animation>

      <FooterOne />
    </>
  );
};

export default HomePageOne;
