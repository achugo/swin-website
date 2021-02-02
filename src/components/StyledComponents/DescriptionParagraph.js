import React from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";

const DescriptionContainer = styled.p`
  line-height: 1.6;
  font-size: 1rem;
  padding: 2em 1em;
  background-color: #f8f8f8;
  font-family: ${appFont.LIGHTPOPPING};
`;

const Description = ({ children, lineHeight = 1.5, fontSize = 1 }) => {
  return (
    <DescriptionContainer lineHeight={lineHeight} fontSize={fontSize}>
      {children}
    </DescriptionContainer>
  );
};

export default Description;
