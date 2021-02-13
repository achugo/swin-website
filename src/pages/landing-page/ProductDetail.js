import React from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import Navigation from "../../components/nav/Navbar";
import SearchResult from "../../components/search-results/SearchResult";
import SecondHero from "../corporate-website/hero/SecondHero";
import DetailNoAuth from "../product-details/DetailNoAuth";

const WrapLandingPage = styled.div`
  position: relative;

  .pad_detail {
    margin-top: 100px;
    padding-left: 10em;
  }
`;

const ProductDetail = () => {
  return (
    <WrapLandingPage>
      <Navigation />
      <div className="pad_detail">
        <DetailNoAuth />
      </div>
    </WrapLandingPage>
  );
};

export default ProductDetail;
