import React from "react";
import styled from "styled-components";
const VideoBackgroundContainer = styled.a`
    display: block;
    width: 100%;
    height: 220px;
    background: url('${({videoPoster}) => videoPoster} ');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1.2rem;
    borderRadius: 1rem;
`;

const VideoBackground = ({children, videoPoster, video})=>{
    return(
        <VideoBackgroundContainer href={video} videoPoster={videoPoster} data-effect="fadeIn">
            {children}
        </VideoBackgroundContainer>
        )
};

export default VideoBackground