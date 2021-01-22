import React from "react";
import VideoCarousel from "../carousel/Carousel";
import Main from "../main/Main";
import SubNav from "../navbar/SubNav";
import DashboardResult from "../search-results/DashboardResults";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  top: 38px;
`;

const Software = () => {
  return (
    <Main>
      <VideoCarousel />
      <DashboardResult />
    </Main>
  );
};

export default Software;
