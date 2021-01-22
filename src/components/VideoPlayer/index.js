import React from 'react';
import video1 from '../../video_assets/iPaySuite-Payroll-Solution.webm'
import poster from '../../img-assets/video_background.svg'
import styled from "styled-components";
import './styles.css'


const VideoPlayer = ({video = video1, videoPoster = poster}) => {
    const VideoBackground = styled.a`
    display: block;
    width: 100%;
    height: 220px;
    background: url('${({videoPoster}) => videoPoster} ');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1.2rem;
    borderRadius: 1rem;
`;
        return (
            <VideoBackground href={video} videoPoster={videoPoster} data-effect="fadeIn">
                    <h4 className="watch text-white">We take the<br/> baggage off <br/>you</h4>
                    <div>
                        <i className="fa fa-play-circle-o play" aria-hidden="true"></i>
                    </div>
                </VideoBackground>
        )
    }
;

export default VideoPlayer