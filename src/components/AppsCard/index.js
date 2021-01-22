import React from "react";
import styled from "styled-components";
import testingImg from "../../img-assets/product-image.png";
import CardContainer from "../StyledComponents/CardContainer";
import {Rating} from "semantic-ui-react";

const CardContent = () => {
    return (
        <div>
            <div style={{marginBottom: '1.5rem'}}>
                <div>Olifax</div>
                <Rating icon='star' mini defaultRating={1} maxRating={5}/>
            </div>
            <p>Marketing analytics</p>
        </div>
    )
};
const AppCards = ({image = testingImg, content = <CardContent/>, width}) => {
    return (
        <CardContainer width={width}>
            <div className={'card__content'}>
                <img className={'ui tiny rounded image'} src={testingImg} alt="" height={60}/>
                {content}
            </div>
        </CardContainer>
    )
};

export default AppCards


