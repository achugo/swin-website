import React, { useEffect, useState } from "react";
import { useRouteMatch, withRouter } from "react-router-dom";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import FlexItem from "../../components/flex/FlexItem";
import FlexWrap from "../../components/flex/FlexWrap";
import Main from "../../components/main/Main";
import { ReactComponent as Lock } from "../../img-assets/lock.svg";
import { ReactComponent as Video } from "../../img-assets/video-collateral.svg";
import { ReactComponent as Clock } from "../../img-assets/clock.svg";
import product_url from "../../img-assets/dummy-img.png";
import { appColors } from "../../appTheme/appTheme";
import { LoaderSpinner } from "../auth/register/form/LoginForm";
import { toast } from "react-toastify";
import api from "../../api/api";
import Modal from "react-responsive-modal";
import RequestAccess from "../../components/modals/RequestAccess";
import Evaluation from "../../components/modals/Evaluation";

const Wrapper = styled.div`
  text-align: center;
  padding: 2em 1em;

  .open {
    cursor: pointer !important;
  }
  .restricted {
    cursor: not-allowed !important;
  }
`;

const Heading = styled.h5`
  font-family: ${appFont.LIGHTPOPPING};
  margin-bottom: 1em;
  text-align: left;
`;

const Section = styled.section`
  margin: 2em 5em;
  padding-bottom: 1em;
`;

const Product = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 20px #0000001c;
  border-radius: 10px;
  margin: 2em 0;
  padding: 2em 1em;

  & div {
    text-align: left;
  }
`;

const IconWrapper = styled.div`
  height: 130px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    max-height: 25px;
  }
`;

const NotifyContent = styled.div`
  padding-left: 20px;
  position: relative;
  top: 20px;
  & h4 {
    color: ${appColors.BLACK};
    font-family: ${appFont.MEDIUM};
  }

  & span {
    color: #6e6e6e;
    font-family: ${appFont.LIGHTPOPPING};
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  top: 45px;
  button {
    width: 45%;
    margin: 0px 5px;
  }
`;

const AcessButton = styled.button`
  outline: none;
  border: none;
  color: white;
  font-family: ${appFont.REGULAR};
  background: #41a0ff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000001d;
  border-radius: 5px;
  padding: 0.7em 1em;

  &::focus {
    outline: none;
    border: none;
  }
`;

const RejectButton = styled.button`
  outline: none;
  border: 1px solid #334a90;
  background: #41a0ff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000001d;
  border-radius: 5px;
  padding: 0.7em 1em;
  color: #334a90;

  &::focus {
    outline: none;
    border: none;
  }
`;

const Span = styled.div`
  position: relative;
  margin-top: 25px;
  padding-left: 20px;
  svg {
    max-width: 25px;
    position: relative;
    top: 10px;
  }

  span {
    display: inline-block;
    padding-left: 10px;
    font-family: ${appFont.REGULAR};
  }
`;

const Center = styled.div`
  display: flex;
  height: 20vh;
  align-items: center;
  justify-content: center;
`;

const FlexDist = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReqButton = styled.button`
  outline: none;
  border: none;
  color: #41a0ff;
  background: transparent;
  font-size: 12px;
  margin-right: 25px;
  font-family: ${appFont.REGULAR};

  &::focus {
    outline: none;
    border: none;
  }
`;

const MiniNav = styled.div`
  padding: 0em 4rem;

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

  .active {
    background: transparent linear-gradient(96deg, #00bbd5 0%, #35eee3 100%) 0%
      0% no-repeat padding-box;
    color: white;
  }
`;

const CollateralContent = (props) => {
  const [loading, setLoading] = useState(false);
  const [collateral_data, setCollateralData] = useState([]);
  const [product_data, setProductData] = useState("");
  const onOpenModal = () => setOpen(true);
  const [open, setOpen] = useState(false);
  const onCloseModal = () => setOpen(false);

  const match = useRouteMatch();
  useEffect(() => {
    get_product_data();
    get_collateral_data();
  }, []);

  useEffect(() => {
    get_collateral_data();
  }, [match.params.collateral]);

  console.log("colat", collateral_data);

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

  const get_collateral_data = async () => {
    setLoading(true);
    let payload = {
      product_id: match.params.id,
      category: match.params.collateral,
    };
    const status = await api.get(`files`, payload);
    if (status.status) {
      setLoading(false);

      setCollateralData(status.data);
    } else {
      setLoading(false);
      if (status) {
        toast.error(status.message);
      }
    }
  };

  const formatDate = (data) => {
    let dx = new Date(data);
    return dx.toUTCString();
  };

  const file_open = (data, request) => {
    if (request) {
      window.open(data);
    }
  };
  return (
    <Main>
      <Modal open={open} onClose={onCloseModal} center>
        <RequestAccess />
      </Modal>
      <MiniNav>
        {product_data &&
          product_data.file_categories.map((item) => (
            <span
              onClick={() =>
                props.history.push(
                  `/dashboard/product/${match.params.id}/${item.category}`
                )
              }
              className={
                item.category === match.params.collateral ? "active" : ""
              }
            >
              {item.category}
            </span>
          ))}
      </MiniNav>
      <Wrapper>
        <>
          {loading && (
            <Center>
              <LoaderSpinner />
            </Center>
          )}
          {!loading && (
            <>
              <Section>
                <>
                  {collateral_data.length > 0 &&
                    collateral_data.map((item) => (
                      <Product
                        className={
                          item.access === "restricted" ? "restricted" : "open"
                        }
                        onClick={() => file_open(item.file, item.can_request)}
                      >
                        <FlexWrap>
                          <FlexItem flex={1}>
                            {/* <IconWrapper style={{ backgroundColor: "#31C7BE" }}>
                            <Lock />
                          </IconWrapper> */}
                            {item.access === "open" && (
                              <IconWrapper
                                style={{ backgroundColor: "#00BBD5" }}
                              >
                                <Video />
                              </IconWrapper>
                            )}
                            {item.access === "restricted" && (
                              <IconWrapper
                                style={{ backgroundColor: "#D3D3D3" }}
                              >
                                <Lock />
                              </IconWrapper>
                            )}
                          </FlexItem>
                          <FlexItem flex={5}>
                            <NotifyContent>
                              <h4>{item.title}</h4>
                              <span>{item.description}</span>
                            </NotifyContent>
                            <FlexDist>
                              <Span>
                                <Clock />{" "}
                                <span>{formatDate(item.created_at)}</span>
                              </Span>

                              {item.access !== "open" && (
                                <ReqButton onClick={onOpenModal}>
                                  Request access
                                </ReqButton>
                              )}
                            </FlexDist>
                          </FlexItem>
                        </FlexWrap>
                      </Product>
                    ))}

                  {/* <Product>
                    <FlexWrap>
                      <FlexItem flex={1}>
                        <IconWrapper style={{ backgroundColor: "#00BBD5" }}>
                          <Tick />
                        </IconWrapper>
                      </FlexItem>
                      <FlexItem flex={5}>
                        <NotifyContent>
                          <h4>Complete App Profile </h4>
                          <span>
                            Complete your profile to help buyers Make the choice
                            to buy your app faster
                          </span>
                        </NotifyContent>
                      </FlexItem>
                    </FlexWrap>
                  </Product>

                  <Product>
                    <FlexWrap>
                      <FlexItem flex={1}>
                        <IconWrapper style={{ backgroundColor: "#41A0FF" }}>
                          <Analytics />
                        </IconWrapper>
                      </FlexItem>
                      <FlexItem flex={5}>
                        <NotifyContent>
                          <h4>Ongoing Analysis </h4>
                          <span>
                            Your app is currently being analyzed by Swin
                            Solutions
                          </span>
                        </NotifyContent>
                      </FlexItem>
                    </FlexWrap>
                  </Product> */}
                </>
              </Section>
            </>
          )}
        </>
      </Wrapper>
    </Main>
  );
};

export default withRouter(CollateralContent);
