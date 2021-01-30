import React from "react";
import VideoCarousel from "../carousel/Carousel";
import Main from "../main/Main";
import SubNav from "../navbar/SubNav";
import DashboardResult from "../search-results/DashboardResults";
import styled from "styled-components";
import VedeoCarousel from "../video-carousel/VideoCarousel";
import { Redirect } from "react-router-dom";

const Wrapper = styled.div`
  position: relative;
  top: 38px;
`;

const Software = () => {
  return (
    <>
      <Redirect to="/dashboard" />

      <Main>
        <VedeoCarousel />
        <DashboardResult />
      </Main>
    </>
  );
};

export default Software;
