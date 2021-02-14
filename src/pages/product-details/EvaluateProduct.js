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
import DynamicSoftwareOptions from "../../components/SoftwareOptions/DynamicOptions";
import { appFont } from "../../appTheme/appFont";
import { LoaderSpinner } from "../auth/register/form/LoginForm";
import evaluate_url from "../../img-assets/eval.png";
import Modal from "react-responsive-modal";
import Evaluation from "../../components/modals/Evaluation";

const Wrapper = styled.div`
  position: relative;

  .floating_icon {
    position: fixed;
    right: 10vw;
    bottom: 12vh;
    cursor: pointer;
    img {
      max-width: 120px;
    }
    span {
      display: block;
      font-size: 20px;
      font-family: ${appFont.MEDIUM};
      margin: 0px auto;
      text-align: center;
    }
  }
`;

const MiniNav = styled.div`
  padding: 0em 1rem;

  span {
    margin: 0px 2em;
    position: relative;
    bottom: 14px;
    padding: 1em;
    font-family: ${appFont.LIGHTPOPPING};

    &:hover {
      background: transparent linear-gradient(96deg, #00bbd5 0%, #35eee3 100%)
        0% 0% no-repeat padding-box;
      color: white;
      cursor: pointer;
    }
  }
`;

const Center = styled.div`
  display: flex;
  height: 20vh;
  align-items: center;
  justify-content: center;
`;

const EvaluateProduct = (props) => {
  const onOpenModal = () => setOpen(true);
  const [open, setOpen] = useState(false);
  const onCloseModal = () => setOpen(false);
  const [product_data, setProductData] = useState("");
  const [loading, setLoading] = useState(false);
  const match = useRouteMatch();

  useEffect(() => {
    get_product_data();
  }, []);

  console.log("proddata", product_data);

  const get_product_data = async () => {
    setLoading(true);
    const status = await api.get(`products/${match.params.id}`);
    if (status.status) {
      setProductData(status.data);
      setLoading(false);
    } else {
      setLoading(false);
      if (status) {
        toast.error(status.message);
      }
    }
  };
  return (
    <Main>
      <Modal open={open} onClose={onCloseModal} center>
        <Evaluation triggerClose={onCloseModal} />
      </Modal>
      <Wrapper>
        <ToastContainer />
        {loading && (
          <Center>
            <LoaderSpinner />
          </Center>
        )}
        {!loading && (
          <>
            <MiniNav>
              {product_data &&
                product_data.file_categories.map((item) => (
                  <span
                    onClick={() =>
                      props.history.push(
                        `/dashboard/product/${match.params.id}/${item.category}`
                      )
                    }
                  >
                    {item.category}
                  </span>
                ))}
            </MiniNav>
            <MainDashboardContainer>
              <AboutSoftware data={product_data} />
              <Gutter>
                <h3>Videos</h3>
                <DynamicVideo data={product_data.assets} />
              </Gutter>
              <Gutter>
                <h3>Images</h3>
                <ImageCarousel data={product_data.assets} />
              </Gutter>
              <Gutter>
                <h3>Digital Collateral</h3>
                <DigitalCollateral
                  collateral={product_data.file_categories}
                  id={match.params.id}
                />
              </Gutter>
              <Gutter>
                <DynamicSoftwareOptions
                  options_={product_data.specifications}
                />
              </Gutter>
            </MainDashboardContainer>
          </>
        )}

        <div className="floating_icon" onClick={onOpenModal}>
          <img src={evaluate_url} alt="chat icon" />
          <span>Evaluate</span>
        </div>
      </Wrapper>
    </Main>
  );
};

export default EvaluateProduct;
