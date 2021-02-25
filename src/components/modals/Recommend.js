import React, { useRef, useState } from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import { appColors } from "../../appTheme/appTheme";
import CustomDropdown from "../dropdown/Dropdown";
import { ReactComponent as ProfileIcon } from "../../img-assets/avatar-profile.svg";
import { ReactComponent as IconEdit } from "../../img-assets/icon-edit.svg";
import { ReactComponent as PhoneIcon } from "../../img-assets/phone-icon.svg";
import { ReactComponent as MailIcon } from "../../img-assets/email.svg";
import { WrapInput } from "../../pages/auth/register/form/LoginForm";
import AddButton from "../AddButton";
import api from "../../api/api";
import { BtnAdd } from "./AddCompanyUser";

const Wrapper = styled.div`
  background-color: ${appColors.WHITE};

  .wrap__add {
    margin: 0 auto;
    max-width: 120px;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2em 0;

  span {
    font-family: ${appFont.MEDIUM};
    color: #434343;
    font-size: 1.5rem;
  }

  svg {
    max-width: 20px;
    position: relative;
    bottom: 10px;
  }
`;

const InputField = styled.input`
  display: block;
  background: rgba(245, 245, 245, 1) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.11);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  padding: 1em 4em 1em 1em;
  margin: 1.5em 0;
  font-size: 15px;
  font-family: ${appFont.LIGHTPOPPING};
  outline: none;
  border: none;
  position: relative;

  &::focus {
    outline: none;
    border: none;
  }
  &:placeholder {
    color: rgba(67, 67, 67, 1);
    font-family: ${appFont.LIGHTPOPPING};
  }
`;

const RecommendSoftware = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const update_profile = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      email: "admin@example.com",
      first_name: "Vanguard",
      last_name: null,
      phone_number: null,
      address: "",
      avatar: null,
    };
    const status = await api.create("profile", payload);
    if (status.status) {
      setLoading(false);
    } else {
      setLoading(false);
      setError(status.message);
    }
  };

  return (
    <Wrapper>
      <Heading>
        <span>Recommend to</span>
        <IconEdit />
      </Heading>

      <form onSubmit={update_profile}>
        <WrapInput>
          <InputField placeholder="Name" type="text" />
          <ProfileIcon />
        </WrapInput>

        <WrapInput>
          <InputField placeholder="Email addresss" />
          <MailIcon />
        </WrapInput>
      </form>

      <BtnAdd>Enter</BtnAdd>
    </Wrapper>
  );
};

export default RecommendSoftware;
