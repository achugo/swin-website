import React from "react";
import poster from "../../img-assets/video_background.svg";
import VideoBackground from "../StyledComponents/VideoBackground";
import "./styles.css";

const SingleVideo = ({ url, videoPoster = poster }) => {
  return (
    <VideoBackground video={url} videoPoster={videoPoster}>
      {/* <h4 className="watch text-white">
        We take the
        <br /> baggage off <br />
        you
      </h4> */}
      <div>
        <i className="fa fa-play-circle-o play" aria-hidden="true"></i>
      </div>
    </VideoBackground>
  );
};
export default SingleVideo;
