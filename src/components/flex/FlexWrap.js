import React from "react";
import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const FlexWrap = ({ children }) => {
  return <FlexWrapper>{children}</FlexWrapper>;
};

export default FlexWrap;
