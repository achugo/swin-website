import React, {useState} from 'react';
import Main from '../../components/main/Main'
import {Grid, Container, Button} from 'semantic-ui-react'
import ReviewMainContainer from "../../components/ReviewMainContainer";
import MainDashboardContainer from "../../components/StyledComponents/MainDashBoardContainer";
import Gutter from "../../components/StyledComponents/Gutter";
import BlogPost from "../../components/BogPost";


const Content = ()=>{
    return(
        <h3>How to Login</h3>
    )
};

const SoftwareDetailsScreen = () => {
    return (
        <Main>
            <MainDashboardContainer>
                <Gutter>
                  <BlogPost/>
                </Gutter>
                <Gutter>
                    <ReviewMainContainer width={80} sideHeader={'More Articles You may Like'} content={<Content /> } button={<Button content={'Add Comment'} primary className={'button-size'}/>}/>
                </Gutter>
            </MainDashboardContainer>
        </Main>
    )
};

export default SoftwareDetailsScreen