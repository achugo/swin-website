import React from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";

const Wrapper = styled.div`
  input {
    font-family: ${appFont.LIGHTPOPPING};
    padding: 0.6em 0.3em;
  }
`;

const CustomInput = ({ type, placeholder, change }) => {
  return (
    <Wrapper>
      <fieldset className={"input-container"}>
        <input onChange={change} type={type} placeholder={placeholder} />
      </fieldset>
    </Wrapper>
  );
};

export default CustomInput;
