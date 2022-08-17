import React from "react";

import HeroSection from "../components/ui/HeroSection";
import LiveAuction from "../components/ui/LiveAuctions/LiveAuction";
import SellerSection from "../components/ui/SellerSection/SellerSection";
import TrendingSection from "../components/ui/TrendingSection/TrendingSection";
import CreateNFT from "../components/ui/CreateNFTs/CreateNFT";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
      <TrendingSection />
      <CreateNFT />
    </>
  );
};

export default Home;
