import React, { useRef, useState } from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import { appColors } from "../../appTheme/appTheme";
import CustomDropdown from "../dropdown/Dropdown";
import { ReactComponent as Padlock } from "../../img-assets/request_access.svg";

import api, { url_base } from "../../api/api";
import { toast, ToastContainer } from "react-toastify";

const Wrapper = styled.div`
  background-color: ${appColors.WHITE};

  .wrap__add {
    margin: 0 auto;
    max-width: 120px;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em 0;
  font-size: 1.5em;
  font-family: ${appFont.BOLD};
`;

const ImageUploadBox = styled.div`
  width: 40%;
  margin: 1em auto;
  min-width: 150px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    max-width: 100%;
  }
`;

const ImageUploadContent = styled.div`
  max-width: 200px;
  margin: 0px auto;
  text-align: center;
  svg {
    display: block;
    margin: 15px auto;
    max-height: 25px;
    position: relative;
  }
  span {
    color: black;
    font-family: ${appFont.LIGHTPOPPING};
    display: block;
    margin: 0.5em auto;
    text-align: center;
  }

  img {
    height: 100px !important;
    width: 100% !important;
  }
`;

const AddButton = styled.button`
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

export const BtnAdd = styled.button`
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

const ButtonSection = styled.div`
  margin: 2em 0;
  display: flex;
  justify-content: space-evenly;
`;

const Span = styled.span`
  font-size: 18px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  display: block;
  font-family: ${appFont.LIGHTPOPPING};
  padding-left: 5px;
`;

const RequestAccess = (props) => {
  const [loading, setLoading] = useState(false);

  const request_acc = async (data) => {
    setLoading(true);
    const payload = {};
    const status = await api.create(`files/request/${data}`, payload);
    if (status.status) {
      setLoading(false);
      toast("Request Sent");

      props.close();
    } else {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <ToastContainer />

      <ImageUploadBox>
        <Padlock />
      </ImageUploadBox>
      <Heading>Request Access</Heading>
      <Span>
        You do not have access to view this file, Request access for IND market
      </Span>
      <ButtonSection>
        <AddButton>I want access</AddButton>
        <AddButton>Never mind</AddButton>
      </ButtonSection>
    </Wrapper>
  );
};

export default RequestAccess;
