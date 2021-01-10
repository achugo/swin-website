import React from "react";
import styled from "styled-components";
import { appFont } from "../../../appTheme/appFont";
import { appColors } from "../../../appTheme/appTheme";
import FlexItem from "../FlexItem";
import FlexWrap from "../FlexWrap";
import { ReactComponent as Icon } from "../../../img-assets/icon-1.svg";
import { ReactComponent as Smiley } from "../../../img-assets/smiley.svg";
import background_image from "../../../img-assets/dashboard-bg.png";
import pretty_lady from "../../../img-assets/pretty-lady.png";
import { ReactComponent as Vanguard } from "../../../img-assets/vanguard-logo.svg";

const MainContainer = styled.div`
  .section__one {
    margin-top: 60px;
  }
  .section__two {
    margin-top: 60px;
  }
  .section__three {
    position: relative;
  }

  padding: 5vh 10vw;
  position: relative;
  background-color: ${appColors.WHITE};

  /* @media screen and (max-width: 768px) {
    width: 100%;
    padding: 50px 15px;
  } */
`;

const Subcaption = styled.div`
  color: rgba(0, 30, 87, 0.5);
  font-family: ${appFont.LIGHT};
  padding: 1.5em 0;
`;

const Heading = styled.h1`
  color: rgba(0, 30, 87, 1);
  font-family: ${appFont.BOLD};
  margin-bottom: 5vh;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const FullBgWrap = styled.div`
  img {
    max-width: 100%;
  }
  .pretty__lady {
    max-width: 80% !important;
  }
`;

const Contain = styled.div`
  padding: 20px;

  & h3 {
    color: ${appColors.LIGHTBLUE};
    font-family: ${appFont.BOLD};
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }

  & span {
    color: rgba(0, 30, 87, 0.5);
    font-family: ${appFont.LIGHT};
    display: block;
    margin: 10px 0;

    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
`;

const WrapImg = styled.div`
  margin: 10px 0 20px 0;
  svg {
    max-width: 80px;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const FullContainer = styled.div`
  padding: 8vh 10vw;
  margin-top: -7vh;
  position: relative;
  background-color: rgba(0, 30, 87, 1);
  @media screen and (max-width: 768px) {
    padding: 50px 15px;
  }

  & span {
    color: rgba(255, 255, 255, 1);
    font-family: ${appFont.REGULAR};
  }
  h1 {
    color: white;
    font-family: ${appFont.BOLD};
    font-size: 3vw;
  }

  button {
    background: rgba(0, 117, 255, 1) 0% 0% no-repeat padding-box;
    border-radius: 36px;
    outline: none;
    border: none;
    color: white;
    float: right;
    padding: 1em 2em;
    margin-top: 50px;

    &::focus {
      outline: none;
      border: none;
    }
  }
`;

const Sponsors = styled.div`
  padding: 8vh 10vw;
  position: relative;
  background: rgba(229, 233, 242, 0.2);
  @media screen and (max-width: 768px) {
    padding: 50px 15px;
  }
  & svg {
    z-index: 9;
  }
`;

const MainContent = () => {
  return (
    <>
      <MainContainer>
        <div className="section__one">
          <Heading>Why People are Choosing Fundle</Heading>
          <FlexWrap>
            <FlexItem flex={1}>
              <Contain>
                <WrapImg>
                  <Icon />
                </WrapImg>
                <h3>Faster</h3>
                <span>
                  Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea
                  nec
                  <br />
                  elaboraret interpretaris, sed diceret
                </span>
              </Contain>
            </FlexItem>
            <FlexItem flex={1}>
              <Contain>
                <WrapImg>
                  <Icon />
                </WrapImg>
                <h3>Faster</h3>
                <span>
                  Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea
                  nec
                  <br />
                  elaboraret interpretaris, sed diceret
                </span>
              </Contain>
            </FlexItem>
            <FlexItem flex={1}>
              <Contain>
                <WrapImg>
                  <Icon />
                </WrapImg>
                <h3>Faster</h3>
                <span>
                  Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea
                  nec
                  <br />
                  elaboraret interpretaris, sed diceret
                </span>
              </Contain>
            </FlexItem>
          </FlexWrap>
        </div>

        <div className="section__two">
          <Heading>Buy, save & manage your crypto in one place</Heading>
          <Subcaption>
            Sell up to $1000 of your Crypto directly to your bank account with
            Fundle. <br /> We offer the best rate in the market. See for
            yourself
          </Subcaption>
          <FlexWrap>
            <FlexItem flex={1}>
              <FullBgWrap>
                <img src={background_image} alt="background" />
              </FullBgWrap>
            </FlexItem>
          </FlexWrap>
        </div>
        <div className="section__three">
          <FlexWrap>
            <FlexItem flex={1}>
              <FullBgWrap>
                <img
                  className="pretty__lady"
                  src={pretty_lady}
                  alt="background"
                />
              </FullBgWrap>
            </FlexItem>
            <FlexItem flex={1}>
              <Contain>
                <Heading style={{ marginTop: "2em" }}>
                  Lorem ipsum dolor sit <br /> amet, vel accumsan libera <br />
                  ex, ea nec elaboraret
                </Heading>
                <Subcaption>
                  Lorem ipsum dolor sit amet, vel accumsan liberavisse ex,{" "}
                  <br />
                  ea nec elaboraret interpretaris, sed diceret Lorem ipsum dolor
                  sit <br />
                  amet, vel accumsan liberavisse ex, ea nec elaboraret
                  <br /> interpretaris, sed diceret .
                </Subcaption>
                <FlexWrap>
                  <FlexItem flex={1}>
                    <WrapImg>
                      <Smiley />
                    </WrapImg>
                  </FlexItem>
                  <FlexItem flex={5}>
                    <h3>Faster</h3>
                    <span>
                      Lorem ipsum dolor sit amet, vel accumsan liberavisse ex,
                      ea nec
                      <br />
                      elaboraret interpretaris, sed diceret
                    </span>
                  </FlexItem>
                </FlexWrap>

                <FlexWrap>
                  <FlexItem flex={1}>
                    <WrapImg>
                      <Smiley />
                    </WrapImg>
                  </FlexItem>
                  <FlexItem flex={5}>
                    <h3>Faster</h3>
                    <span>
                      Lorem ipsum dolor sit amet, vel accumsan liberavisse ex,
                      ea nec
                      <br />
                      elaboraret interpretaris, sed diceret
                    </span>
                  </FlexItem>
                </FlexWrap>
              </Contain>
            </FlexItem>
          </FlexWrap>
        </div>
      </MainContainer>
      <FullContainer>
        <FlexWrap>
          <FlexItem flex={5}>
            <span>Try Fundle Now</span>
            <h1>
              Buy, save & manage <br /> your crypto in one place
            </h1>
          </FlexItem>
          <FlexItem flex={2}>
            <button>Create a free account</button>
          </FlexItem>
        </FlexWrap>
      </FullContainer>

      <Sponsors>
        <FlexWrap>
          <FlexItem flex={1}>
            <span>In the Media</span>
          </FlexItem>
          <FlexItem flex={1}>
            <Vanguard />
          </FlexItem>
          <FlexItem flex={1}>
            <Vanguard />
          </FlexItem>
          <FlexItem flex={1}>
            <Vanguard />
          </FlexItem>
          <FlexItem flex={1}>
            <Vanguard />
          </FlexItem>
        </FlexWrap>
      </Sponsors>
    </>
  );
};

export default MainContent;
