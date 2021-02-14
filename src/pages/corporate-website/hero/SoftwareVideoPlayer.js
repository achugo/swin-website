import React from "react";
import video1 from "../../../video_assets/dummy.mp4";
import poster from "../../../img-assets/video_background.svg";
import indlogo from "../../../img-assets/indlogo.png";
import VideoBackground from "../../../components/StyledComponents/VideoBackground";
import styled from "styled-components";
import { appFont } from "../../../appTheme/appFont";

const Wrapper = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;

  h1 {
    font-family: ${appFont.MEDIUM};
    font-size: 2.5rem;
    span {
      color: #bff1ff;
    }
  }

  .play {
    display: flex;
    justify-content: center;
    color: white;
    font-size: 4rem;
    position: relative;
    top: 0vh;
    opacity: 0.7;
  }
`;

const Div = styled.div`
  position: absolute;
  bottom: 44%;
  right: 0vw;
  width: 100%;
`;

const Span = styled.span`
  color: white;
  font-family: ${appFont.REGULAR};
  font-size: 24px;
  position: relative;
  top: 30px;
  margin-top: 50px;
  margin-left: 20px;
`;

const Bottomspan = styled.div`
  color: white;
  font-family: ${appFont.REGULAR};
  position: absolute;
  bottom: 30px;
  margin-left: 20px;

  .content_side,
  .logo_side {
    display: inline-block;
  }

  h2 {
    font-family: ${appFont.MEDIUM};
    padding-left: 5px;
    margin-bottom: 3px !important;
  }
  span {
    font-family: ${appFont.LIGHTPOPPING};
    padding-left: 5px;
    font-size: 18px;
  }
`;

const SoftwareVideoPlayer = ({ video = video1, videoPoster = poster }) => {
  return (
    <Wrapper>
      <VideoBackground video={video1} videoPoster={videoPoster}>
        {/* <h1 className="watch text-white">
          The content you <br />
          need, for the <br />
          <span>Software</span> you seek you
        </h1> */}
        <Span>
          Top 1 in marketing
          <br />
        </Span>
        <Div>
          <i className="fa fa-play-circle-o play" aria-hidden="true"></i>
        </Div>
        <Bottomspan>
          <div className="logo_side">
            <img src={indlogo} alt="company logo" />
          </div>
          <div className="content_side">
            <h2>Ind Market</h2>
            <span>
              For Marketing analytics And consulting solutions in any Market{" "}
            </span>
          </div>
        </Bottomspan>
      </VideoBackground>
    </Wrapper>
  );
};
export default SoftwareVideoPlayer;
