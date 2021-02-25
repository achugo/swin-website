import React from "react";
import poster from "../../img-assets/pipepro_poster.png";
import play from "../../img-assets/play.png";
import VideoBackground from "../StyledComponents/VideoBackground";
import "./styles.css";
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

const SingleVideo = ({ url, videoPoster = poster }) => {
  return (
    <VideoBackground video={url} videoPoster={videoPoster}>
      {/* <h4 className="watch text-white">
        We take the
        <br /> baggage off <br />
        you
      </h4> */}
      <Center>
        {/* <img src={play} alt="play button" /> */}
        {/* <i className="fa fa-play-circle-o play" aria-hidden="true"></i> */}
      </Center>
    </VideoBackground>
  );
};
export default SingleVideo;
