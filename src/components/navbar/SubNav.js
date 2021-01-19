import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  padding: 0.5em 1em;
  position: fixed;
  width: 100%;
  z-index: 9;
`;

const SubNav = () => {
  return (
    <Wrapper>
      <span>Categories</span>
      <span>Home</span>
      <span>New Releases</span>
    </Wrapper>
  );
};

export default SubNav;
