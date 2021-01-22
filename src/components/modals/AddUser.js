import React from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import { appColors } from "../../appTheme/appTheme";
import CustomDropdown from "../dropdown/Dropdown";
import MultipleSelect from "../dropdown/Multiselect";

const Wrapper = styled.div`
  background-color: ${appColors.WHITE};
`;

const Heading = styled.h2`
  font-family: ${appFont.REGULAR};
  color: ${appColors.HEADERBLUE};
`;

const AddUser = () => {
  return (
    <Wrapper>
      <Heading>Add User</Heading>
      <MultipleSelect />
    </Wrapper>
  );
};

export default AddUser;
