import React from "react";
import styled from "styled-components";
import { appFont } from "../../../appTheme/appFont";
import SoftwareCarousel from "./SoftwareCarousel";
import SoftwareVideoPlayer from "./SoftwareVideoPlayer";

const HeroWrapper = styled.div`
  margin-top: 110px;

  h1.video_cap {
    margin-top: 50px;
    text-align: center;
    color: black;
    font-family: ${appFont.LIGHTPOPPING};
  }
`;

const SecondHero = () => {
  return (
    <HeroWrapper>
      <h1 className="video_cap">
        The content you need, for the Software you seek
      </h1>
      <SoftwareCarousel />
    </HeroWrapper>
  );
};

export default SecondHero;
