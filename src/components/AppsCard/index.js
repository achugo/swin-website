import React from "react";
import styled from "styled-components";
import testingImg from "../../img-assets/product-image.png";
import {Rating} from "semantic-ui-react";

const AppCard = styled.div`
width: 80%;
background-color: white;
 padding: 1.2rem;
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const AppCards = () => {
    return (
        <AppCard>
            <div className={'card-content'}>
                <img className={'ui tiny rounded image'} src={testingImg} alt="" height={60}/>
                <div>
                    <div style={{marginBottom: '1.5rem'}}>
                        <div>Olifax</div>
                        <Rating icon='star' mini defaultRating={1} maxRating={5}/>
                    </div>
                    <p>Marketing analytics</p>
                </div>
            </div>
        </AppCard>
    )
};

export default AppCards


