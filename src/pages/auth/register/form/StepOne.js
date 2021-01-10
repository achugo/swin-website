import React from "react";
import styled from "styled-components";
import { appFont } from "../../../../appTheme/appFont";
import { appColors } from "../../../../appTheme/appTheme";
import FlexItem from "../../../../components/flex/FlexItem";
import FlexWrap from "../../../../components/flex/FlexWrap";
import { ReactComponent as Buyer } from "../../../../img-assets/buyer.svg";
import { ReactComponent as Seller } from "../../../../img-assets/seller.svg";

const Wrapper = styled.div`
  position: relative;
`;
const Heading = styled.h3`
  color: #909090;
  font-family: ${appFont.LIGHTPOPPING};
  margin: 1em 0;
`;
const Box = styled.div`
  background: rgba(255, 255, 255, 0.8) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000036;
  padding: 1em;
  margin-right: 2em;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;

  span {
    display: block;
    font-family: ${appFont.LIGHTPOPPING};
    color: ${appColors.BLACK};
    margin: 1.5em 0;
    font-size: 14px;
  }

  svg {
    max-height: 100px;
  }
`;

const BoxHeading = styled.h4`
  font-family: ${appFont.BOLD};
  color: #334a90;
  margin: 1em 0;
`;

const StepOne = () => {
  return (
    <Wrapper>
      <Heading>What would you like to sign Up as</Heading>
      <FlexWrap>
        <FlexItem flex={1}>
          <Box>
            <BoxHeading>Seller</BoxHeading>
            <Seller />
            <span>Sell your softwares To ready Buyers</span>
          </Box>
        </FlexItem>
        <FlexItem flex={1}>
          <Box>
            <BoxHeading>Buyer</BoxHeading>
            <Buyer />
            <span>Find softwares you want and bid for them</span>
          </Box>
        </FlexItem>
      </FlexWrap>
    </Wrapper>
  );
};

export default StepOne;
