import React, { useRef, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.div`
  & .selection {
    background: #f5f5f5 0% 0% no-repeat padding-box !important;
    box-shadow: 0px 3px 6px #0000001d !important;
    border-radius: 5px !important;
    padding: 1.5em 2.1em 1.5em 1em !important;
    border: none !important;

    .menu {
      background: #f5f5f5;
      border: none;
    }

    input {
      line-height: 2.214286em !important;
    }
  }
`;

const CustomDropdown = (props) => {
  const dropdwn = useRef();
  const handleOnChange = (e, data) => {
    props.getCode(data.value);
  };

  const options = [
    { text: "1", value: "kannada" },
    { text: "2", value: "english" },
    { text: "3", value: "hindhi" },
  ];

  return (
    <Wrapper>
      <Dropdown
        placeholder={props.holder}
        fluid
        ref={dropdwn}
        selection
        search
        required
        // onChange={handleOnChange}
        options={options}
      />
    </Wrapper>
  );
};

export default CustomDropdown;
