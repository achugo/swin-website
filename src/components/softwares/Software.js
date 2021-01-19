import React from "react";
import VideoCarousel from "../carousel/Carousel";
import SubNav from "../navbar/SubNav";
import DashboardResult from "../search-results/DashboardResults";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  top: 38px;
`;

const Software = () => {
  return (
    <main>
      <SubNav />
      <Wrapper>
        <VideoCarousel />
        <div className="main__container">
          <DashboardResult />
        </div>
      </Wrapper>
    </main>
  );
};

export default Software;
