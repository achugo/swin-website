import React, {useState} from 'react';
import Main from '../../components/main/Main'
import DigitalCollateral from "../../components/digital_colletral";
import {Grid, Container} from 'semantic-ui-react'
import testingImg from '../../img-assets/website (1).svg'
import styled from "styled-components";
import bg_image from "../../img-assets/slick-bg.png";
import video2 from '../../video_assets/iPaySuite_payroll_solution.mp4'
import ImageCarousel from "../../components/ImageCarousel";
import VideoPlayer from "../../components/VideoPlayer";
import SoftwareOptions from "../../components/SoftwareOptions"
import ReviewMainContainer from "../../components/ReviewMainContainer";
import AboutSoftware from "../../components/AboutSoftware";

const MainDashboardContainer = styled.div`
 background-color: white;
 padding: 1.5rem;
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Gutter = styled.div`
margin: 40px 0
`;

const SoftwareDetailsScreen = () => {
    return (
        <Main>
            <MainDashboardContainer>
                <AboutSoftware/>
                <Gutter>
                    <h3>Videos</h3>
                    <VideoPlayer/>
                </Gutter>
                <Gutter>
                    <h3>Images</h3>
                    <ImageCarousel/>
                </Gutter>
                <Gutter>
                    <h3>Digital Collateral</h3>
                    <DigitalCollateral/>
                </Gutter>
                <Gutter>
                    <SoftwareOptions/>
                </Gutter>
                <Gutter>
                    <ReviewMainContainer/>
                </Gutter>
            </MainDashboardContainer>
        </Main>
    )
};

export default SoftwareDetailsScreen