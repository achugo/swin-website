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
    font-size: 2rem;
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

const EditModal = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const profile_img_ref = useRef();

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

  const fileOnChange = async (e) => {
    /*Selected files data can be collected here.*/
    console.log(e.target.files);
    console.log(e.target.files);
    const newFile = e.target.files[0];
    let fileObj = new FormData();
    fileObj.append("file", newFile);

    const fileResponse = await api.create("files/upload");
    if (fileResponse) {
      console.log(fileResponse);
    }
  };
  const handleBtnClick = () => {
    /*Collecting node-element and performing click*/
    profile_img_ref.current.click();
  };

  return (
    <Wrapper>
      <Heading>
        <span>Edit User</span>
        <IconEdit />
      </Heading>

      <form onSubmit={update_profile}>
        <div className="wrap__add">
          <AddButton
            click={handleBtnClick}
            content={"Add Profile Image"}
            icon={"plus"}
          />
          <input
            hidden
            type="file"
            ref={profile_img_ref}
            onChange={fileOnChange}
          />
        </div>

        <WrapInput>
          <InputField placeholder="name" type="text" />
          <ProfileIcon />
        </WrapInput>

        <WrapInput>
          <InputField placeholder="name" type="tel" />
          <PhoneIcon />
        </WrapInput>

        <WrapInput>
          <InputField placeholder="Email addresss" />
          <MailIcon />
        </WrapInput>
      </form>
    </Wrapper>
  );
};

export default EditModal;
