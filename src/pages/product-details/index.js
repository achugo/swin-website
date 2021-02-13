import React, { useEffect, useState } from "react";
import Main from "../../components/main/Main";
import DigitalCollateral from "../../components/digital_colletral";
import styled from "styled-components";
import ImageCarousel from "../../components/ImageCarousel";
import AboutSoftware from "../../components/AboutSoftware";
import MainDashboardContainer from "../../components/StyledComponents/MainDashBoardContainer";
import Gutter from "../../components/StyledComponents/Gutter";
import { useRouteMatch, withRouter } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import api from "../../api/api";
import DynamicVideo from "../../components/video-carousel/DynamicVideoCarousel";
import DynamicSoftwareOptions from "../../components/SoftwareOptions/DynamicOptions";
import { appFont } from "../../appTheme/appFont";
import { LoaderSpinner } from "../auth/register/form/LoginForm";

const MiniNav = styled.div`
  padding: 0em 1rem;

  span {
    margin: 0px 1em;
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

const SoftwareDetailsScreen = (props) => {
  const [product_data, setProductData] = useState("");
  const match = useRouteMatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    get_product_data();
  }, []);

  useEffect(() => {
    get_product_data();
  }, [match.params.id]);

  console.log("proddata", product_data);

  const get_product_data = async () => {
    setLoading(true);
    const status = await api.get(`products/${match.params.id}`);
    if (status.status) {
      setLoading(false);
      setProductData(status.data);
    } else {
      setLoading(false);
      if (status) {
        toast.error(status.message);
      }
    }
  };

  return (
    <Main>
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
              <DynamicSoftwareOptions options_={product_data.specifications} />
            </Gutter>
          </MainDashboardContainer>
        </>
      )}
    </Main>
  );
};

export default withRouter(SoftwareDetailsScreen);
