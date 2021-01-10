import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const VideoCarousel = () => {
  return (
    <AwesomeSlider
      media={[
        {
          source: "https://www.w3schools.com/tags/movie.mp4",
          caption: "I want to see what you got.",
        },
        {
          source: "https://www.w3schools.com/tags/movie.mp4",
          caption: "I want to see what you got.",
        },
        {
          source: "https://www.w3schools.com/tags/movie.mp4",
          caption: "I want to see what you got.",
        },
      ]}
    />
  );
};

export default VideoCarousel;
