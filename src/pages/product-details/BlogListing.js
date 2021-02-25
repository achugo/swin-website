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
import product_url from "../../img-assets/pipe_blog.png";
import define from "../../img-assets/define.png";
import auto from "../../img-assets/auto-analyze.png";
import v8 from "../../img-assets/v8.png";
import sap from "../../img-assets/sap_int.png";
import simple from "../../img-assets/simple_work.png";

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

const Box = styled.div`
min-height: 430px;
  background: rgba(255, 255, 255, 0.8) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000036;
  padding: 1em;
  margin-right: 2em;
  cursor: pointer;
  border-radius: 5px;
  @media screen and (min-width: 768px){
    margin: .5em;
  }

  & h2 {
      color: black;
      font-family: ${appFont.REGULAR};
      text-align: left
    }
  }

  span {
    display: block;
    font-family: ${appFont.LIGHTPOPPING};
    color: #6E6E6E;
    font-size: 19px;
    text-align: left;
    margin: 1.5em 0;
    font-size: 14px;
  }

  img {
    max-height: 200px;
    display: block;
    width: 100%;
  }
`;

const BlogListing = (props) => {
  return (
    <>
      <Section>
        <>
          <div className="ui three column grid stackable">
            <div className="column">
              <Box onClick={() => props.history.push("/dashboard/post")}>
                <img src={product_url} alt="product url" />
                <h2>The PipePRO story </h2>
                <span>
                  On investigation, the “terms and conditions” may include
                  “Offer only applies to residents of Alaska”, and so a listener
                  in New York can’t actually get a half-price widget at all.
                </span>
              </Box>
            </div>
            <div className="column">
              <Box>
                <img src={simple} alt="product url" />
                <h2>Simple Work Flows for PipePRO</h2>
                <span>
                  On investigation, the “terms and conditions” may include
                  “Offer only applies to residents of Alaska”, and so a listener
                  in New York can’t actually get a half-price widget at all.
                </span>
              </Box>
            </div>
            <div className="column">
              <Box>
                <img src={auto} alt="product url" />
                <h2>Running Auto-Analyze </h2>
                <span>
                  On investigation, the “terms and conditions” may include
                  “Offer only applies to residents of Alaska”, and so a listener
                  in New York can’t actually get a half-price widget at all.
                </span>
              </Box>
            </div>

            <div className="column">
              <Box>
                <img src={define} alt="product url" />
                <h2>Defining Data Points </h2>
                <span>
                  On investigation, the “terms and conditions” may include
                  “Offer only applies to residents of Alaska”, and so a listener
                  in New York can’t actually get a half-price widget at all.
                </span>
              </Box>
            </div>
            <div className="column">
              <Box>
                <img src={sap} alt="product url" />
                <h2>SAP Integration </h2>
                <span>
                  On investigation, the “terms and conditions” may include
                  “Offer only applies to residents of Alaska”, and so a listener
                  in New York can’t actually get a half-price widget at all.
                </span>
              </Box>
            </div>
            <div className="column">
              <Box>
                <img src={v8} alt="product url" />
                <h2>PipePRO V8.4</h2>
                <span>
                  On investigation, the “terms and conditions” may include
                  “Offer only applies to residents of Alaska”, and so a listener
                  in New York can’t actually get a half-price widget at all.
                </span>
              </Box>
            </div>
          </div>
        </>
      </Section>
    </>
  );
};

export default withRouter(BlogListing);
