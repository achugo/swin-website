import React from "react";
import bgImage from "../../../img-assets/auth-bg.png";
import styled from "styled-components";
import Navigation from "../../../components/nav/Navbar";
import { appColors } from "../../../appTheme/appTheme";
import Multistep from "react-multistep";
import { appFont } from "../../../appTheme/appFont";
import FlexWrap from "../../../components/flex/FlexWrap";
import FlexItem from "../../../components/flex/FlexItem";
import bg_image from "../../../img-assets/auth-background.svg";
import { ReactComponent as Logo } from "../../../img-assets/logo-swin.svg";
import { ReactComponent as AuthIcon } from "../../../img-assets/sign-in.svg";
import { Button } from "react-bootstrap";
import RegisterForm from "./form/RegisterForm";
import { withRouter } from "react-router-dom";

export const AuthContainer = styled.div`
  min-height: 100vh;
  justify-content: center;
`;

export const BackgorundWrapper = styled.div`
  /* background-image: url(${bg_image}); */
  background: transparent linear-gradient(182deg, #74e0ff 0%, #7de2fe 100%) 0%
    0% no-repeat padding-box;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  padding-top: 25vh;
`;

export const FormContainer = styled.div`
  height: fit-content;
  padding-top: 15vh;
`;

const BackgroundContent = styled.div`
  max-width: 400px;
  margin: 0px auto;
  text-align: left;
`;

const WrapLogo = styled.div`
  margin-bottom: 25px;
`;

const AuthText = styled.h2`
  color: ${appColors.WHITE};
  font-family: ${appFont.BOLD};
  margin-bottom: 20px;
`;

const SubText = styled.span`
  color: ${appColors.WHITE};
  font-size: 23px;
  margin-bottom: 20px;
`;

const MiniText = styled.span`
  color: ${appColors.WHITE};
  margin: 20px 0;
  display: block;
`;

const ButtonAlternative = styled.button`
  display: block;
  border: 3px solid var(--unnamed-color-f8f8f8);
  box-shadow: 0px 3px 6px #f8f8f89d;
  border: 3px solid #f8f8f8;
  border-radius: 10px;
  outline: none;
  background-color: transparent;

  padding: 0.7em 2em;

  &::focus {
    outline: none;
  }

  span {
    color: ${appColors.WHITE};
  }
  svg {
    max-width: 20px;
    position: relative;
    top: 5px;
  }
`;

const Register = (props) => {
  return (
    <>
      <AuthContainer>
        <FlexWrap>
          <FlexItem flex={3}>
            <BackgorundWrapper>
              <BackgroundContent>
                <WrapLogo>
                  <Logo />
                </WrapLogo>
                <AuthText>Sign Up</AuthText>
                <SubText>
                  Get access to softwares tailored to suit all your business
                  needs.
                </SubText>
                <MiniText>Already a user</MiniText>
                <ButtonAlternative onClick={() => props.history.push("/login")}>
                  <span>Sign in</span> <AuthIcon />
                </ButtonAlternative>
              </BackgroundContent>
            </BackgorundWrapper>
          </FlexItem>
          <FlexItem flex={4}>
            <FormContainer>
              <RegisterForm />
            </FormContainer>
          </FlexItem>
        </FlexWrap>
      </AuthContainer>
    </>
  );
};

export default withRouter(Register);
