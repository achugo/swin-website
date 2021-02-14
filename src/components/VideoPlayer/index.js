import React from "react";
import video1 from "../../video_assets/dummy.mp4";
import poster from "../../img-assets/video_background.svg";
import VideoBackground from "../StyledComponents/VideoBackground";
import "./styles.css";
import play from "../../img-assets/play.png";
import styled from "styled-components";

const Center = styled.div`
  display: flex;
  height: 45vh;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100px;
  }
`;

const VideoPlayer = ({ video = video1, videoPoster = poster }) => {
  return (
    <VideoBackground video={video1} videoPoster={videoPoster}>
      <h4 className="watch text-white">
        We take the
        <br /> baggage off <br />
        you
      </h4>
      <Center>
        <img src={play} alt="play button" />
        {/* <i className="fa fa-play-circle-o play" aria-hidden="true"></i> */}
      </Center>
    </VideoBackground>
  );
};
export default VideoPlayer;
