import React from "react";
import VideoCarousel from "../carousel/Carousel";
import DashboardResult from "../search-results/DashboardResults";

const Software = () => {
  return (
    <main>
      <div className="main__container">
        <VideoCarousel />
        <DashboardResult />
      </div>
    </main>
  );
};

export default Software;
