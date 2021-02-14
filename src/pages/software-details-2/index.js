import React, { useState } from "react";
import Main from "../../components/main/Main";
import DigitalCollateral from "../../components/digital_colletral";
import { Grid, Container } from "semantic-ui-react";
import testingImg from "../../img-assets/website (1).svg";
import styled from "styled-components";
import bg_image from "../../img-assets/slick-bg.png";
import video2 from "../../video_assets/dummy.mp4";
import ImageCarousel from "../../components/ImageCarousel";
import VideoPlayer from "../../components/VideoPlayer";
import SoftwareOptions from "../../components/SoftwareOptions";
import ReviewMainContainer from "../../components/ReviewMainContainer";
import AboutSoftware from "../../components/AboutSoftware";
import MainDashboardContainer from "../../components/StyledComponents/MainDashBoardContainer";
import Gutter from "../../components/StyledComponents/Gutter";

const SoftwareDetailsScreen = () => {
  return (
    <Main>
      <MainDashboardContainer>
        <AboutSoftware />
        <Gutter>
          <h3>Videos</h3>
          <VideoPlayer />
        </Gutter>
        <Gutter>
          <h3>Images</h3>
          <ImageCarousel />
        </Gutter>
        <Gutter>
          <h3>Digital Collateral</h3>
          <DigitalCollateral />
        </Gutter>
        <Gutter>
          <SoftwareOptions />
        </Gutter>
      </MainDashboardContainer>
    </Main>
  );
};

export default SoftwareDetailsScreen;
