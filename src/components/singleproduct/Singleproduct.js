import React from "react";
import styled from "styled-components";
import SubNav from "../navbar/SubNav";

const Wrapper = styled.div`
  position: relative;
  top: 38px;
`;

const Shadow = styled.div`
  padding: 1em;
  box-shadow: 0px 3px 20px #00000015;
  border-radius: 10px;
  opacity: 1;
`;

const Singleproduct = () => {
  return (
    <main>
      <SubNav />
      <Wrapper>
        <div className="main__container">
          <Shadow>Shawow</Shadow>
        </div>
      </Wrapper>
    </main>
  );
};

export default Singleproduct;
