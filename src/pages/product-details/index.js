import React, { useEffect, useState } from "react";
import Main from "../../components/main/Main";
import DigitalCollateral from "../../components/digital_colletral";
import { Grid, Container } from "semantic-ui-react";
import testingImg from "../../img-assets/website (1).svg";
import styled from "styled-components";
import bg_image from "../../img-assets/slick-bg.png";
import video2 from "../../video_assets/iPaySuite_payroll_solution.mp4";
import ImageCarousel from "../../components/ImageCarousel";
import VideoPlayer from "../../components/VideoPlayer";
import SoftwareOptions from "../../components/SoftwareOptions";
import ReviewMainContainer from "../../components/ReviewMainContainer";
import AboutSoftware from "../../components/AboutSoftware";
import MainDashboardContainer from "../../components/StyledComponents/MainDashBoardContainer";
import Gutter from "../../components/StyledComponents/Gutter";
import { useRouteMatch } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import api from "../../api/api";
import DynamicVideo from "../../components/video-carousel/DynamicVideoCarousel";

const SoftwareDetailsScreen = (props) => {
  const [product_data, setProductData] = useState("");
  const match = useRouteMatch();

  useEffect(() => {
    get_product_data();
  }, []);

  console.log("proddata", product_data);

  const get_product_data = async () => {
    const status = await api.get(`products/${match.params.id}`);
    if (status.status) {
      setProductData(status.data);
    } else {
      if (status) {
        toast.error(status.message);
      }
    }
  };
  return (
    <Main>
      <ToastContainer />
      <MainDashboardContainer>
        <AboutSoftware data={product_data} />
        <Gutter>
          <h3>Videos</h3>
          <DynamicVideo data={product_data.assets} />
        </Gutter>
        <Gutter>
          <h3>Images</h3>
          <ImageCarousel />
        </Gutter>
        <Gutter>
          <h3>Digital Collateral</h3>
          <DigitalCollateral />
        </Gutter>
        <Gutter>
          <SoftwareOptions />
        </Gutter>
        <Gutter>
          <ReviewMainContainer />
        </Gutter>
      </MainDashboardContainer>
    </Main>
  );
};

export default SoftwareDetailsScreen;
