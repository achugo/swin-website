import React from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import { appColors } from "../../appTheme/appTheme";
import FlexItem from "../flex/FlexItem";
import FlexWrap from "../flex/FlexWrap";
import RateTabs from "../tabs/RateTab";
import bg_image from "../../img-assets/hero-bg.svg";
import HomeSearch from "../search/HomeSearch";

const Herowrapper = styled.div`
  padding: 5vh 10vw;
  min-height: 35vh;
  height: 40vh;
  background-image: url(${bg_image});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Caption = styled.h1`
  margin-top: 10vh;
  margin-bottom: 20px;
  position: relative;
  color: ${appColors.DARKHEADER};
  font-size: 4vw;
  line-height: 1.1;

  @media screen and (max-width: 768px) {
    font-size: 2.5em;
    padding-top: 5vh;
    text-align: center;
  }
  & span {
    color: ${appColors.SECONDARYBLUE};
  }
`;

const SubCaption = styled.h5`
  margin: 20px 0px;
  font-family: ${appFont.LIGHTPOPPING};
  color: ${appColors.DARKHEADER};
`;

const WatchDemo = styled.button`
  border: none;
  outline: none;

  color: ${appColors.SECONDARYBLUE};
  background: rgba(0, 117, 255, 0.1) 0% 0% no-repeat padding-box;
  border-radius: 28px;
  margin-right: 20px;
  padding: 1em 1.5em;
  border-radius: 28px;
  &::focus {
    outline: none;
    border: none;
  }
`;

const JoinConvo = styled.button`
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.1) 0% 0% no-repeat padding-box;
  border-radius: 28px;

  margin-right: 20px;
  color: ${appColors.WHITE};
  padding: 1em 1.5em;
  border-radius: 28px;

  &::focus {
    outline: none;
    border: none;
  }
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
