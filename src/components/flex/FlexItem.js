import React from "react";
import styled from "styled-components";

const FlexContainer = styled.div`
  flex: ${({ flex }) => flex};
`;

const FlexItem = ({ children, flex }) => {
  return <FlexContainer flex={flex}>{children}</FlexContainer>;
};

export default FlexItem;
