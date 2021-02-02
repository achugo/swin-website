import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: transparent linear-gradient(107deg, #74e0ff 0%, #41a0ff 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #41a0ff83;
  padding: 0.8em 2em;
  border-radius: 5px;
  outline: none;
  color: white;
  border: none;
  float: right;

  &::focus {
    outline: none;
    border: none;
  }
`;

const BtnAdd = ({ children, click }) => {
  return <Button onClick={click}>{children}</Button>;
};

export default BtnAdd;
