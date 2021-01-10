import React, { useState } from "react";
import styled from "styled-components";
import { appFont } from "../../../../appTheme/appFont";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import { ReactComponent as arrowIcon } from "../../../../img-assets/icon-signin.svg";
import { ReactComponent as BackArrow } from "../../../../img-assets/back-arrow.svg";
import FlexWrap from "../../../../components/flex/FlexWrap";
import MobileFlex from "../../../../components/flex/MobileFlex";
import FlexItem from "../../../../components/flex/FlexItem";
import { appColors } from "../../../../appTheme/appTheme";

const FormWrapper = styled.div`
  max-width: 500px;
  min-width: 30vw;
  margin: 0px auto;
  text-align: left;
`;

const Header = styled.h3`
  color: #334a90;
  font-family: ${appFont.MEDIUM};
  display: inline;
  position: relative;
  bottom: 15px;
`;

const Wrapper = styled.div`
  position: relative;
`;

const InputField = styled.input`
  display: block;
  background: rgba(245, 245, 245, 1) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.11);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  padding: 1.3em 4em 1.3em 1em;
  margin: 1.5em 0;
  outline: none;
  border: none;

  &::focus {
    outline: none;
    border: none;
  }
  &:placeholder {
    color: rgba(67, 67, 67, 1);
    font-family: ${appFont.LIGHTPOPPING};
  }
`;

const NextButton = styled.button`
  background: transparent
    linear-gradient(
      109deg,
      rgba(116, 224, 255, 1) 0%,
      rgba(65, 160, 255, 1) 100%
    )
    0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px rgba(65, 160, 255, 0.51);
  padding: 0.8em 3.5em;
  outline: none;
  border-radius: 10px;
  color: ${appColors.WHITE};
  font-family: ${appFont.REGULAR};
  border: none;
  margin-right: 1em;
  font-size: 14px;
  &::focus {
    outline: none;
    border: none;
  }
`;
const LoginForm = () => {
  return (
    <FormWrapper>
      <div>
        <arrowIcon /> <Header>Sign In</Header>
      </div>

      <Wrapper>
        <InputField placeholder="Email" type="email" />
        <InputField placeholder="Password" type="password" />
      </Wrapper>
    </FormWrapper>
  );
};

export default LoginForm;
