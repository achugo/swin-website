import React from "react";
import styled from "styled-components";
const GutterContainer = styled.div`
  margin-top: ${({ top }) => top +'px'};
  margin-bottom: ${({ bottom }) => bottom + 'px'};
  margin-right: ${({ right }) => right + 'px'};
  margin-left: ${({ left }) => left + 'px'};
`;

const Gutter = ({children, top=40, bottom=40, right=0, left=0})=>{
    return(
        <GutterContainer top={top} bottom={bottom} right={right} left={left}>
            {children}
        </GutterContainer>
    )
};

export default  Gutter

