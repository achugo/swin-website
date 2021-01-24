import React from "react";
import styled from "styled-components";
const CardContainerBackground = styled.div`
 background-color: ${({ color }) => color};  
 padding: ${({ padding }) => padding + 'rem'}; 
 width: ${({ width }) => width + '%'}; 
  box-shadow: ${({ boxShadow }) => boxShadow ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' : 'none'};
`;
const CardContainer = ({color='white', children, padding=1.2, width=100, boxShadow=true})=>{
    return(
        <CardContainerBackground color={color} padding={padding} width={width} boxShadow={boxShadow}>
            {children}
        </CardContainerBackground>
    )
};

export default CardContainer