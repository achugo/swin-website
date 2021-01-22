import React from "react";
import styled from "styled-components";
import bg_image from "../../img-assets/slick-bg.png";


const Wrapper = styled.main`
  background-image: url(${bg_image});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
`;

const Main = ({ children }) => {
  return (
    <Wrapper>
      <div className="main__container">{children}</div>
    </Wrapper>
  );
};

export default Main;