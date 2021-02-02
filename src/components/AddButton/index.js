import React from "react";
import { Button, Icon } from "semantic-ui-react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  background: #f5f5f5 0% 0% no-repeat padding-box !important;
  box-shadow: 0px 3px 6px #0000001d;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ height }) => height};
  &:hover {
    cursor: pointer;
  }
`;

const AddButton = ({
  icon = "plus",
  content = "Add Profile Image",
  height = "auto",
  click,
}) => {
  return (
    <>
      <ButtonContainer onClick={click} height={height}>
        <div>{icon && <Icon name={icon} style={{ fontSize: "2.5rem" }} />}</div>
        {content && (
          <div
            style={{
              textAlign: "center",
              fontSize: "0.9rem",
              marginTop: "1rem",
            }}
          >
            <span>{content}</span>
          </div>
        )}
      </ButtonContainer>
    </>
  );
};

export default AddButton;
