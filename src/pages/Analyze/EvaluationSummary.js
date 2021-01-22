import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import FlexItem from "../../components/flex/FlexItem";
import FlexWrap from "../../components/flex/FlexWrap";
import Main from "../../components/main/Main";
import { ReactComponent as Plus } from "../../img-assets/plus.svg";
import product_url from "../../img-assets/dummy-img.png";
import { appColors } from "../../appTheme/appTheme";

const Wrapper = styled.div`
  text-align: center;
  padding: 2em 1em;
`;

const Heading = styled.h2`
  font-family: ${appFont.MEDIUM};
  margin-bottom: 1em;
  text-align: left;
`;

const SubHeading = styled.h3`
  font-family: ${appFont.MEDIUM};
  margin-bottom: 1em;
  text-align: left;
`;

const Section = styled.section`
  margin: 2em 5em;
  padding-bottom: 1em;
`;

const ProductContainer = styled.div`
  background: transparent;
  margin: 2em 0;
  padding: 1em;

  & div {
    text-align: left;
  }
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

const Name = styled.div`
  display: inline-block;
`;

const Img = styled.img`
  display: inline-block;
  max-width: 80px;
`;

const Desc = styled.div`
  display: inline-block;
  padding-left: 20px;
  text-align: left;
  position: relative;
  bottom: 15px;

  h3 {
    font-family: ${appFont.MEDIUM};
    color: ${appColors.DARKHEADER};
  }

  span {
    font-size: 18px;
    font-family: ${appFont.LIGHTPOPPING};
  }
`;

const Stages = styled.div`
  display: block;
  text-align: left;
  float: left;
  h2 {
    font-family: ${appFont.MEDIUM};
    color: ${appColors.DARKHEADER};
  }

  span {
    font-size: 18px;
    font-family: ${appFont.LIGHTPOPPING};
  }
`;

const Status = styled.div`
  display: block;
  position: relative;
  top: 18px;
  text-align: right;
  float: right;
  h1 {
    font-family: ${appFont.LIGHTPOPPING};
    margin-bottom: 0px !important;
  }

  span {
    font-size: 14px;
    font-family: ${appFont.ITALICS};
    font-weight: lighter;
  }
`;

const EvaluationSummary = () => {
  return (
    <Main>
      <Wrapper>
        <>
          <Section>
            <Heading>Evaluation Summary</Heading>
            <ProductContainer>
              <FlexWrap>
                <FlexItem flex={1}>
                  <Name>
                    <Img src={product_url} alt="product img" />
                  </Name>
                </FlexItem>
                <FlexItem flex={2}>
                  <Stages>
                    <h2>Olifax</h2>
                    <span>Marketing analytics And consulting solutions </span>
                    <h6>Ongoing</h6>
                  </Stages>
                </FlexItem>
                <FlexItem flex={4}>
                  <Status>
                    <h1>11</h1>
                    <span>stages</span>
                  </Status>
                </FlexItem>
              </FlexWrap>
            </ProductContainer>
            <div class="ui active progress" data-percent="74">
              <div class="bar">
                <div class="progress"></div>
              </div>
              <div class="label">Uploading Files</div>
            </div>
          </Section>
          <Section>
            <>
              <SubHeading>Stage 1 - Marketing</SubHeading>
              <ProductContainer>
                <FlexWrap>
                  <FlexItem flex={4}>Name</FlexItem>
                  <FlexItem flex={2}>Role</FlexItem>
                  <FlexItem flex={2}>Status</FlexItem>
                  <FlexItem flex={2}>Date Completed</FlexItem>
                  <FlexItem flex={2}>Weighting</FlexItem>
                </FlexWrap>
              </ProductContainer>
              <Product>
                <FlexWrap>
                  <FlexItem flex={4}>Name</FlexItem>
                  <FlexItem flex={2}>Role</FlexItem>
                  <FlexItem flex={2}>Status</FlexItem>
                  <FlexItem flex={2}>Date Completed</FlexItem>
                  <FlexItem flex={2}>Weighting</FlexItem>
                </FlexWrap>
              </Product>
              <Product>
                <FlexWrap>
                  <FlexItem flex={4}>Name</FlexItem>
                  <FlexItem flex={2}>Role</FlexItem>
                  <FlexItem flex={2}>Status</FlexItem>
                  <FlexItem flex={2}>Date Completed</FlexItem>
                  <FlexItem flex={2}>Weighting</FlexItem>
                </FlexWrap>
              </Product>
              <Product>
                <FlexWrap>
                  <FlexItem flex={4}>Name</FlexItem>
                  <FlexItem flex={2}>Role</FlexItem>
                  <FlexItem flex={2}>Status</FlexItem>
                  <FlexItem flex={2}>Date Completed</FlexItem>
                  <FlexItem flex={2}>Weighting</FlexItem>
                </FlexWrap>
              </Product>
            </>
          </Section>
        </>
      </Wrapper>
    </Main>
  );
};

export default withRouter(EvaluationSummary);
