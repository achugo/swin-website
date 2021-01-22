import React from "react";
import styled from "styled-components";

const DescriptionContainer = styled.p`
    line-height:  ${({ lineHeight }) => lineHeight +'rem'};
    font-size: ${({ fontSize }) => fontSize +'rem'};
    `;

const Description = ({children, lineHeight=1.5, fontSize=1})=>{
    return (
        <DescriptionContainer lineHeight={lineHeight} fontSize={fontSize}>
            {children}
        </DescriptionContainer>
    )
};

export default Description