import React from "react";
import styled from "styled-components";
import { appFont } from "../../../../appTheme/appFont";

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

const StepThree = () => {
  return (
    <Wrapper>
      <InputField placeholder="Phone" type="phone" />
      <InputField placeholder="Email" type="email" />
      <InputField placeholder="Create Password" type="password" />
      <InputField placeholder="Confirm Password" type="password" />
    </Wrapper>
  );
};

export default StepThree;
