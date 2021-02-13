import React from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";

const Wrapper = styled.div`
  textarea {
    font-family: ${appFont.LIGHTPOPPING};
  }
`;

const CustomTextArea = ({ placeholder, change }) => {
  return (
    <Wrapper>
      <fieldset className={"input-container"}>
        <textarea
          placeholder={placeholder}
          onChange={change}
          rows={5}
        ></textarea>
      </fieldset>
    </Wrapper>
  );
};

export default CustomTextArea;
