import React from "react";
import styled from "styled-components";
import MainContent from "../../components/flex/main/LandingpageContent";
import Hero from "../../components/hero/Hero";
import Navigation from "../../components/nav/Navbar";
import SearchResult from "../../components/search-results/SearchResult";

const WrapLandingPage = styled.div`
  position: relative;
`;

const LandingPage = () => {
  return (
    <WrapLandingPage>
      <Navigation />
      <Hero />
      <SearchResult />
    </WrapLandingPage>
  );
};

export default LandingPage;
