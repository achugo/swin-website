import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import FlexItem from "../../components/flex/FlexItem";
import FlexWrap from "../../components/flex/FlexWrap";
import Main from "../../components/main/Main";
import { ReactComponent as Lock } from "../../img-assets/lock.svg";
import { ReactComponent as Analytics } from "../../img-assets/analytics.svg";
import { ReactComponent as Tick } from "../../img-assets/correct-mark.svg";
import product_url from "../../img-assets/dummy-img.png";
import { appColors } from "../../appTheme/appTheme";
import api from "../../api/api";
import { LoaderSpinner } from "../auth/register/form/LoginForm";

const Wrapper = styled.div`
  text-align: center;
  padding: 2em 1em;
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
  cursor: pointer;

  & div {
    text-align: left;
  }
`;

const IconWrapper = styled.div`
  height: 100px;
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
    font-family: ${appFont.REGULAR};
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

const Date = styled.span`
  font-family: ${appFont.LIGHTPOPPING};
  display: block;
  padding-right: 10px;
  text-align: right;
  color: #777777;
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

const Center = styled.div`
  display: flex;
  height: 20vh;
  align-items: center;
  justify-content: center;
`;

const Notifications = (props) => {
  const [notification_list, setNotificationList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    get_notifications();
  }, []);

  const get_notifications = async () => {
    setLoading(true);
    const status = await api.get("notifications");
    if (status.status) {
      setNotificationList(status.data);
      setLoading(false);
    } else {
      if (status) {
        setLoading(false);
        // toast.error(status.message);
      }
    }
  };

  const goTo = (data, type) => {
    console.log("data", data, type);
    if (type === "Check Product") {
      props.history.push(`/dashboard/product-evaluation/${data}`);
    }
    if (type === "Review") {
      props.history.push(`/dashboard/analyze`);
    }
  };

  const formatDate = (data) => {
    let dx = new Date(data);
    return dx.toLocaleDateString();
  };

  console.log("notifications", notification_list);
  return (
    <Main>
      {loading && (
        <Center>
          <LoaderSpinner />
        </Center>
      )}
      {!loading && notification_list.length > 0 && (
        <Wrapper>
          <>
            <Section>
              <Heading>{notification_list.length} New notifications</Heading>
              {notification_list.map((notification) => (
                <>
                  <Product
                    onClick={() =>
                      goTo(
                        JSON.parse(notification.data)[0].details.link.substring(
                          JSON.parse(notification.data)[0].details.link.length -
                            36
                        ),
                        JSON.parse(notification.data)[0].details.action
                      )
                    }
                  >
                    <FlexWrap>
                      <FlexItem flex={1}>
                        <IconWrapper style={{ backgroundColor: "#41A0FF" }}>
                          <Analytics />
                        </IconWrapper>
                      </FlexItem>
                      <FlexItem flex={5}>
                        <NotifyContent>
                          <h4>
                            {/* {notification.type.substr(18)}{" "} */}
                            {JSON.parse(notification.data)[0].details.action}
                          </h4>
                          <span>
                            {
                              JSON.parse(notification.data)[0].details
                                .mail_subject
                            }
                          </span>
                        </NotifyContent>
                      </FlexItem>
                      <FlexItem flex={2}>
                        {/* <Date>{formatDate(notification.created_at)}</Date> */}
                        {/* <ButtonContainer>
                          <AcessButton>Give access</AcessButton>
                          <RejectButton>Don't give</RejectButton>
                        </ButtonContainer> */}
                      </FlexItem>
                    </FlexWrap>
                  </Product>
                </>
              ))}
            </Section>
          </>
        </Wrapper>
      )}

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
                        Complete your profile to help buyers Make the choice to
                        buy your app faster
                      </span>
                    </NotifyContent>
                  </FlexItem>
                  <FlexItem flex={2}>
                  
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
                        Your app is currently being analyzed by Swin Solutions
                      </span>
                    </NotifyContent>
                  </FlexItem>
                  <FlexItem flex={2}>
                  
                  </FlexItem>
                </FlexWrap>
              </Product> */}
    </Main>
  );
};

export default withRouter(Notifications);
