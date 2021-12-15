import React from "react";
import styled from "styled-components";
import HeroVideoPlayer from "./HeroVideoPlayer";

const HeroWrapper = styled.div`
  margin-top: 110px;
`;

const HeroVideo = ({ video }) => {
  return (
    <HeroWrapper>
      <HeroVideoPlayer videoPoster={video} />
    </HeroWrapper>
  );
};

export default HeroVideo;
