import React, { useState } from "react";
import styled from "styled-components";
import { appFont } from "../../../../appTheme/appFont";
import { ReactComponent as CompanyIcon } from "../../../../img-assets/company-icon.svg";
import { ReactComponent as PhoneIcon } from "../../../../img-assets/phone-icon.svg";
import { ReactComponent as PasswordIcon } from "../../../../img-assets/padlock.svg";
import { WrapInput } from "./LoginForm";
import FlexWrap from "../../../../components/flex/FlexWrap";
import FlexItem from "../../../../components/flex/FlexItem";

const Wrapper = styled.div`
  position: relative;
`;

const InputField = styled.input`
  display: block;
  background: rgba(245, 245, 245, 1) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.11);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  padding: 1.3em 4em 1.3em 1em;
  margin: 1.5em 0;
  outline: none;
  border: none;

  &::focus {
    outline: none;
    border: none;
  }
  &:placeholder {
    color: rgba(67, 67, 67, 1);
    font-family: ${appFont.LIGHTPOPPING};
  }
`;

const StepTwo = () => {
  const [company_name, setCompanyName] = useState("");
  const [company_email, setCompanyEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [company_address, setAddress] = useState("");

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
    let payload = JSON.parse(localStorage.getItem("reg_payload"));
    payload.company = e.target.value;
    localStorage.setItem("reg_payload", JSON.stringify(payload));
  };

  const handleCompanyEmailChange = (e) => {
    setCompanyEmail(e.target.value);
    let payload = JSON.parse(localStorage.getItem("reg_payload"));
    payload.email = e.target.value;
    localStorage.setItem("reg_payload", JSON.stringify(payload));
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    let payload = JSON.parse(localStorage.getItem("reg_payload"));
    payload.first_name = e.target.value;
    localStorage.setItem("reg_payload", JSON.stringify(payload));
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    let payload = JSON.parse(localStorage.getItem("reg_payload"));
    payload.last_name = e.target.value;
    localStorage.setItem("reg_payload", JSON.stringify(payload));
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    let payload = JSON.parse(localStorage.getItem("reg_payload"));
    payload.address = e.target.value;
    localStorage.setItem("reg_payload", JSON.stringify(payload));
  };

  return (
    <Wrapper>
      <WrapInput>
        <InputField
          value={company_name}
          onChange={handleCompanyNameChange}
          placeholder="Company Name"
          type="text"
          required
        />
        <CompanyIcon />
      </WrapInput>

      <WrapInput>
        <InputField
          value={company_email}
          onChange={handleCompanyEmailChange}
          placeholder="Company Email"
          type="email"
          required
        />
        <PhoneIcon />
      </WrapInput>

      <FlexWrap>
        <FlexItem flex={1}>
          <WrapInput style={{ marginRight: "10px" }}>
            <InputField
              placeholder="First Name"
              value={first_name}
              onChange={handleFirstNameChange}
              type="text"
              required
            />
            <PhoneIcon />
          </WrapInput>
        </FlexItem>
        <FlexItem flex={1}>
          <WrapInput style={{ marginLeft: "10px" }}>
            <InputField
              value={last_name}
              onChange={handleLastNameChange}
              placeholder="Last Name"
              type="text"
              required
            />
            <PhoneIcon />
          </WrapInput>
        </FlexItem>
      </FlexWrap>

      <WrapInput>
        <InputField
          value={company_address}
          onChange={handleAddressChange}
          placeholder="Company Address"
          type="text"
        />
        <CompanyIcon />
      </WrapInput>
    </Wrapper>
  );
};

export default StepTwo;
