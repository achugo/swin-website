import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { appColors } from "../../appTheme/appTheme";
import CustomDropdown from "../dropdown/Dropdown";
import { ReactComponent as ProfileIcon } from "../../img-assets/avatar-profile.svg";
import { ReactComponent as IconEdit } from "../../img-assets/icon-edit.svg";
import { ReactComponent as PhoneIcon } from "../../img-assets/phone-icon.svg";
import { ReactComponent as MailIcon } from "../../img-assets/email.svg";
import {
  LoaderSpinner,
  WrapInput,
} from "../../pages/auth/register/form/LoginForm";
import api from "../../api/api";
import Select from "../dropdown/Select";

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

const AddSalesManager = ({ triggerClose }) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [user_payload, setUserPayload] = useState({});
  const [user_region, setUserRegion] = useState("");
  const [user_country, setUserCountry] = useState("");

  const [user_role, setUserRole] = useState(null);

  const continent = ["Africa", "Europe", "Asia"];
  const country = ["Nigeria", "South Africa", "Ghana"];

  useEffect(() => {
    list_users();
  }, []);

  const list_users = async (e) => {
    const status = await api.get("users");
    if (status.status) {
      let elem = formatUsers(status.data);
      setUsers(elem);
      // triggerClose();
    } else {
      setLoading(false);
    }
  };

  const add_sales_mgr = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      user_id: user_payload,
      country: user_country,
      region: user_region,
    };
    const status = await api.create("sales/add", payload);
    if (status.status) {
      toast("Sales manager added");
      setLoading(false);
    } else {
      toast(status.data.message);
    }
  };

  const formatUsers = (list) => {
    let instant_array = [];
    let usr = [];
    for (let i = 0; i < list.length; i++) {
      if (!usr.includes(list[i].id)) {
        instant_array.push({
          text: list[i].first_name + " " + list[i].last_name,
          value: list[i].id,
          //text: list[i].name,
        });
        usr.push(list[i].name);
      }
    }
    return instant_array;
  };

  const fetchSelectValueRegion = (data) => {
    setUserRegion(data.value);
    console.log(data);
  };

  const fetchSelectValueCountry = (data) => {
    setUserCountry(data.value);
    console.log(data);
  };

  const fetchSelectValueUser = (data) => {
    setUserPayload(data);
  };

  console.log("userrrr", users);

  return (
    <Wrapper>
      <ToastContainer />
      <Heading>
        <span>Sales Manager</span>
        <IconEdit />
      </Heading>

      <form onSubmit={add_sales_mgr}>
        <WrapInput style={{ marginBottom: 20 }}>
          <Select
            holder="Select Region"
            options={continent}
            getValue={fetchSelectValueRegion}
          />
        </WrapInput>

        <WrapInput style={{ marginBottom: 20 }}>
          <Select
            holder="Select Country"
            options={country}
            getValue={fetchSelectValueCountry}
          />
        </WrapInput>

        <WrapInput style={{ marginBottom: 20 }}>
          {users && (
            <CustomDropdown
              holder="Add Managers"
              options={users}
              getCode={fetchSelectValueUser}
            />
          )}
        </WrapInput>
        {loading && <LoaderSpinner />}

        <AddButton>Enter</AddButton>
      </form>
    </Wrapper>
  );
};

export default AddSalesManager;
