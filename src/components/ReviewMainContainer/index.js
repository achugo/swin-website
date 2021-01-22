import React from "react";
import {Button} from 'semantic-ui-react'
import './style.css'
import ReviewCard from "../ReviewCard";
import AppCards from "../AppsCard";
import styled from "styled-components";

let dummyData = [1, 2, 3];

const Gutter = styled.div`
margin: 20px 0
`;

const ReviewMainContainer = () => {
    return (
        <section>
            <section>
                <Button content={'Leave a review'} primary className={'button-size'}/>
                <Button basic color='blue' content='Rate' className={'button-size'}/>
            </section>
            <section className={"ui grid"} style={{marginTop: '20px'}}>
                <div className="ten wide column">
                    <h4>Reviews</h4>
                </div>
                <div className="six wide column">
                    <h4>
                        Other Related apps
                    </h4>
                </div>
                <div className="ten wide column">
                    {dummyData.map((i) => (
                        <Gutter>
                            <ReviewCard/>
                        </Gutter>

                    ))}
                </div>
                <div className="six wide column">
                    {dummyData.map((i) => (
                        <Gutter>
                            <AppCards/>
                        </Gutter>

                    ))}
                </div>
            </section>
        </section>
    )
};

export default ReviewMainContainer