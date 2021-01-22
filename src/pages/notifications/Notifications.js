import React from "react";
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

const Notifications = () => {
  return (
    <Main>
      <Wrapper>
        <>
          <Section>
            <Heading>15 New notifications</Heading>
            <>
              <Product>
                <FlexWrap>
                  <FlexItem flex={1}>
                    <IconWrapper style={{ backgroundColor: "#31C7BE" }}>
                      <Lock />
                    </IconWrapper>
                  </FlexItem>
                  <FlexItem flex={5}>
                    <NotifyContent>
                      <h4>Access Request</h4>
                      <span>
                        Swin Solutions is requesting access to view your IND
                        presentations
                      </span>
                    </NotifyContent>
                  </FlexItem>
                  <FlexItem flex={2}>
                    <ButtonContainer>
                      <AcessButton>Give access</AcessButton>
                      <RejectButton>Don't give</RejectButton>
                    </ButtonContainer>
                  </FlexItem>
                </FlexWrap>
              </Product>

              <Product>
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
                    {/* <ButtonContainer>
                      <AcessButton>Give access</AcessButton>
                      <RejectButton>Don't give</RejectButton>
                    </ButtonContainer> */}
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
                    {/* <ButtonContainer>
                      <AcessButton>Give access</AcessButton>
                      <RejectButton>Don't give</RejectButton>
                    </ButtonContainer> */}
                  </FlexItem>
                </FlexWrap>
              </Product>
            </>
          </Section>
        </>
      </Wrapper>
    </Main>
  );
};

export default withRouter(Notifications);
