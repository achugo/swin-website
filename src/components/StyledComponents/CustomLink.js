import React from "react";
import styled from "styled-components";
const CustomLinkBackground = styled.a`
 background-color: ${({ color }) => color};  
 padding: ${({ padding }) => padding + 'rem'}; 
 width: ${({ width }) => width + '%'}; 
 color: black;
 border-radius: 10px;
`;
const CustomLink = ({color='#f5f5f5', children, padding=1.2, width=100, link})=>{
    return(
        <CustomLinkBackground color={color} padding={padding} width={width} href={link}>
            {children}
        </CustomLinkBackground>
    )
};

export default CustomLink