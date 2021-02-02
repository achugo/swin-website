import React, { useState } from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import { appColors } from "../../appTheme/appTheme";
import { ReactComponent as ProfileIcon } from "../../img-assets/avatar-profile.svg";
import { ReactComponent as PhoneIcon } from "../../img-assets/phone-icon.svg";
import { ReactComponent as MailIcon } from "../../img-assets/email.svg";
import { WrapInput } from "../../pages/auth/register/form/LoginForm";
import AddButton from "../AddButton";
import api from "../../api/api";

const Wrapper = styled.div`
  background-color: ${appColors.WHITE};

  .wrap__add {
    margin: 0 auto;
    max-width: 120px;
  }
`;

const NextBtn = styled.button`
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

const Heading = styled.h2`
  font-family: ${appFont.REGULAR};
  color: ${appColors.HEADERBLUE};
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

const EditCompanyModal = () => {
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
      <Heading>Edit User</Heading>

      <form onSubmit={update_profile}>
        <div className="wrap__add">
          {/* <AddButton content={"Add Profile Image"} icon={"plus"} /> */}
        </div>

        <WrapInput>
          <InputField placeholder="Name" type="text" />
          <ProfileIcon />
        </WrapInput>

        <WrapInput>
          <InputField placeholder="Nuber of employees" type="tel" />
          <PhoneIcon />
        </WrapInput>

        <WrapInput>
          <InputField placeholder="Company Sector" type="tel" />
          <PhoneIcon />
        </WrapInput>

        <WrapInput>
          <InputField type="text" placeholder="Addresss" />
          <MailIcon />
        </WrapInput>

        <WrapInput>
          <InputField type="email" placeholder="Email addresss" />
          <MailIcon />
        </WrapInput>

        <WrapInput>
          <InputField type="text" placeholder="Website" />
          <MailIcon />
        </WrapInput>

        <NextBtn>Next</NextBtn>
      </form>
    </Wrapper>
  );
};

export default EditCompanyModal;
