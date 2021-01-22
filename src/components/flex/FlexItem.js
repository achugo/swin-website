import React from "react";
import styled from "styled-components";

const FlexContainer = styled.div`
  flex: ${({ flex }) => flex};

  &:nth-child(3n) {
    page-break-after: always; /* CSS 2.1 syntax */
    break-after: always; /* New syntax */
  }
`;

const FlexItem = ({ children, flex }) => {
  return <FlexContainer flex={flex}>{children}</FlexContainer>;
};

export default FlexItem;
