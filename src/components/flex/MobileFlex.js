import React from "react";
import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
`;

const MobileFlex = ({ children }) => {
  return <FlexWrapper>{children}</FlexWrapper>;
};

export default MobileFlex;
