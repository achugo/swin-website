import React, { useState } from "react";
import styled from "styled-components";
import { appFont } from "../../../../appTheme/appFont";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import { ReactComponent as WriteIcon } from "../../../../img-assets/writing.svg";
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

const NavigationSection = styled.div`
  margin: 1em 0;
  svg {
    cursor: pointer;
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

const RegisterForm = () => {
  const [current_step, setCurrentStep] = useState(1);

  const go_to_next = () => {
    setCurrentStep(current_step + 1);
  };

  const go_to_previous = () => {
    setCurrentStep(current_step - 1);
  };

  const RenderStep = () => {
    if (current_step == 1) {
      return <StepOne />;
    } else if (current_step == 2) {
      return <StepTwo />;
    } else {
      return <StepThree />;
    }
  };
  return (
    <FormWrapper>
      <div>
        <WriteIcon />{" "}
        <Header>
          {current_step != 3 ? "Sign Up" : "Complete Registration"}
        </Header>
      </div>

      {RenderStep()}
      <NavigationSection>
        <MobileFlex>
          <FlexItem flex={5}>
            {current_step < 3 && (
              <NextButton onClick={go_to_next}>Next</NextButton>
            )}

            {current_step > 1 && <BackArrow onClick={go_to_previous} />}
          </FlexItem>
          <FlexItem flex={2}></FlexItem>
        </MobileFlex>
      </NavigationSection>
    </FormWrapper>
  );
};

export default RegisterForm;
