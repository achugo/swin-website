import React from "react";
import VideoCarousel from "../carousel/Carousel";
import Main from "../main/Main";
import DashboardResult from "../search-results/DashboardResults";

const Software = () => {
    return (
        <Main>
            <VideoCarousel />
            <DashboardResult />
        </Main>
    );
};

export default Software