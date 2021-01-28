import React from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import { appColors } from "../../appTheme/appTheme";
import FlexItem from "../flex/FlexItem";
import FlexWrap from "../flex/FlexWrap";
import RateTabs from "../tabs/RateTab";
import bg_image from "../../img-assets/hero-bg.png";
import HomeSearch from "../search/HomeSearch";

const Herowrapper = styled.div`
  padding: 5vh 10vw;
  min-height: 35vh;
  height: 45vh;
  background-image: url(${bg_image});
  background-repeat: no-repeat;
  background-size: cover;
  background: transparent
    linear-gradient(252deg, #74e0ff 0%, #334a90 44%, #071950 100%) 0% 0%
    no-repeat padding-box;
`;

const Hero = () => {
  return (
    <Herowrapper>
      <FlexWrap>
        <FlexItem flex={1}>
          <HomeSearch />
        </FlexItem>
      </FlexWrap>
    </Herowrapper>
  );
};

export default Hero;
