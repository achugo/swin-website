import React from "react";
import video1 from "../../../video_assets/dummy.mp4";

import VideoBackground from "../../../components/StyledComponents/VideoBackground";
import styled from "styled-components";
import play from "../../../img-assets/play.png";
import { appFont } from "../../../appTheme/appFont";
import { appColors } from "../../../appTheme/appTheme";

const Wrapper = styled.div`
  padding: 4em 10vw;
  position: relative;
`;

const Span = styled.span`
  color: ${appColors.DARKHEADER};
  font-family: ${appFont.LIGHTPOPPING};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Center = styled.div`
  display: flex;
  height: 45vh;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100px;
  }
`;

const HeroVideoPlayer = ({ video = video1, videoPoster }) => {
  return (
    <VideoBackground video={video1} videoPoster={videoPoster}>
      <Wrapper>
        <Center></Center>
      </Wrapper>
    </VideoBackground>
  );
};
export default HeroVideoPlayer;
