import React from 'react';
import video1 from '../../video_assets/iPaySuite-Payroll-Solution.webm'
import poster from '../../img-assets/video_background.svg'
import VideoBackground from "../StyledComponents/VideoBackground";
import './styles.css'

const VideoPlayer = ({video = video1, videoPoster = poster}) => {
        return (
            <VideoBackground video={video1} videoPoster={videoPoster}>
                    <h4 className="watch text-white">We take the<br/> baggage off <br/>you</h4>
                    <div>
                        <i className="fa fa-play-circle-o play" aria-hidden="true"></i>
                    </div>
                </VideoBackground>
        )
    }
;

export default VideoPlayer