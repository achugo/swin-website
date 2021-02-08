import React, { useState } from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import CustomDropdown from "../../components/dropdown/Dropdown";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Select from "../../components/dropdown/Select";
import Main from "../../components/main/Main";
import AddUser from "../../components/modals/AddUser";
import SelectedUsers from "../../components/dropdown/SelectedUsers";
import FlexWrap from "../../components/flex/FlexWrap";
import MobileFlex from "../../components/flex/MobileFlex";
import { ReactComponent as Arrow } from "../../img-assets/arrow.svg";
import FlexItem from "../../components/flex/FlexItem";
import MultipleSelect from "../../components/dropdown/Multiselect";
import { LoaderSpinner, WrapInput } from "../auth/register/form/LoginForm";
import CustomInput from "../../components/CustomInput";
import { toast, ToastContainer } from "react-toastify";
import api from "../../api/api";
import BtnAdd from "../../components/button/BtnAdd";

const Wrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 20px #0000001c;
  border-radius: 10px;
  margin: 0px auto;
  padding: 4em 1em;

  .pad_top {
    margin-top: 25px;
  }
`;

const Heading = styled.h2`
  font-family: ${appFont.MEDIUM};
  margin-bottom: 2em;
`;

const LabelHeading = styled.h3`
  font-family: ${appFont.MEDIUM};
  margin-bottom: 2em;
`;

const Section = styled.section`
  margin: 2em 4em 0;
`;
const AnalyzeSection = styled.section`
  margin: 0em 4em 0em 4em;
  position: relative;
  padding: 3em;
  border-left: 1px dashed #00bbd5;

  svg {
    position: absolute;
    max-width: 40px;
    bottom: 11vh;
    left: 0px;
  }
`;

const SubHeading = styled.h4`
  font-family: ${appFont.REGULAR};
`;

const Adduser = styled.button`
  margin-top: 1em;
  background: #41a0ff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000001d;
  border-radius: 5px;
  outline: none;
  color: white;
  border: none;
  padding: 1em 2em;

  &::focus {
    outline: none;
    border: none;
  }
`;

const SearchInput = styled.div`
  input {
    width: 100%;
    padding: 1.5em;
    outline: none;
    border: none;
    background: #f5f5f5 0% 0% no-repeat padding-box !important;
    box-shadow: 0px 3px 6px #0000001d !important;
    border-radius: 5px !important;
}
  }
`;

const Start = styled.button`
  margin-top: 1em;
  background: #41a0ff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000001d;
  border-radius: 5px;
  outline: none;
  color: white;
  float: right;
  border: none;
  padding: 1em 2em;

  &::focus {
    outline: none;
    border: none;
  }
`;

const Product = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 20px #0000001c;
  border-radius: 10px;
  margin: 2em 0;
  padding: 0.5em 1em;
  cursor: pointer;

  & div {
    text-align: left;
  }
`;

const IconWrapper = styled.div`
  height: 100px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100px;
  }

  svg {
    max-height: 20px;
    margin: 0 1em;
    cursor: pointer;
  }
`;

const NotifyContent = styled.div`
  padding-left: 20px;
  position: relative;
  top: 20px;
  & h4 {
    color: #334a90;
    font-family: ${appFont.MEDIUM};
  }

  & span {
    color: #6e6e6e;
    font-family: ${appFont.LIGHTPOPPING};
  }
`;

const AddAnalysis = () => {
  const [open, setOpen] = useState(false);
  const [total_stages, setTotalStages] = useState([]);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [input, setInput] = useState("");
  const [final_payload, setUpdatePayload] = useState({});
  const [search_result, setSearchResult] = useState(null);
  const [product_id, setProductId] = useState("");
  const [show_stages, setShowStages] = useState(false);
  const [loading, setLoading] = useState(false);

  const stages = [
    { value: 1, label: "one" },
    { value: 2, label: "two" },
    { value: 3, label: "three" },
    { value: 4, label: "four" },
    { value: 5, label: "five" },
    { value: 6, label: "six" },
  ];

  const department = [
    { value: "Sales", label: "Sales" },
    { value: "Admin", label: "Admin" },
  ];

  const fetchStages = (data) => {
    console.log(data);
    setTotalStages(Array(data.value).fill(data.value));
  };

  const search_product = async (e) => {
    setInput(e.target.value);
    setSearchResult([1, 3, 4, 5]);
    // let payload = {
    //   name: e.target.value,
    // };
    // const status = await api.create("public/search", payload);
    // if (status.status) {
    //   console.log(status);
    // } else {
    //   if (status) {
    //     console.log(status);
    //     toast.error(status.message);
    //   }
    // }
  };

  const update_payload = (current) => {
    let payload = final_payload;
    if (current) {
      setUpdatePayload(payload.concat(current));
    }
  };

  const fetchSelected = (index, data) => {
    console.log("log", index, data);
  };

  const select_product = (data) => {
    setSearchResult(null);
    setProductId(data);
  };

  const create_review = async () => {
    setLoading(true);
    let payload = {
      product_id: product_id,
      name: "Buy Slack",
      stages: total_stages.length,
    };
    const status = await api.create("review", payload);
    if (status.status) {
      alert("review created");
      setShowStages(true);
      console.log(status);
      setLoading(false);
    } else {
      if (status) {
        setLoading(false);
        console.log(status);
        toast.error(status.message);
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <Modal open={open} onClose={onCloseModal} center>
        <AddUser />
      </Modal>
      <Main>
        <Wrapper>
          <Section>
            <Heading>Analyze your choice software with your team</Heading>
          </Section>

          <Section>
            <LabelHeading>Select App</LabelHeading>
            {/* <CustomDropdown holder="Search for app name" /> */}
            <WrapInput>
              <SearchInput>
                <input type="text" onChange={search_product} />
              </SearchInput>
            </WrapInput>
            <WrapInput>
              {search_result &&
                search_result.map((item) => (
                  <Product
                    onClick={() =>
                      select_product("253c732c-d443-4e1f-9dd3-b22ffa42eca3")
                    }
                  >
                    <FlexWrap>
                      <FlexItem flex={1}>
                        <IconWrapper>
                          <img src="logo" alt="product" />
                        </IconWrapper>
                      </FlexItem>
                      <FlexItem flex={5}>
                        <NotifyContent>
                          <h4>Name</h4>
                          <span>description</span>
                        </NotifyContent>
                      </FlexItem>
                      <FlexItem flex={2}></FlexItem>
                    </FlexWrap>
                  </Product>
                ))}
            </WrapInput>
          </Section>
          <Section>
            <LabelHeading>Select Number of stages</LabelHeading>
            <Select
              getValue={fetchStages}
              holder="select stages"
              options={stages}
            />
            <div className="pad_top">
              <BtnAdd click={create_review}>Create Review</BtnAdd>
            </div>
            {loading && <LoaderSpinner />}
          </Section>

          <Section>
            {total_stages && (
              <Heading>{`${total_stages.length} Stages Review`}</Heading>
            )}
          </Section>

          {show_stages && (
            <>
              {total_stages.length > 0 &&
                total_stages.map((item, index) => {
                  return (
                    <AnalyzeSection>
                      <SubHeading>Stage 1</SubHeading>
                      <Select options={department} holder="Department" />
                      <Arrow />
                      <FlexWrap>
                        <FlexItem flex="1">
                          <Adduser>Add User</Adduser>
                        </FlexItem>
                        <FlexItem flex="6">
                          <MultipleSelect
                            index={index}
                            group_selection={fetchSelected}
                          />
                        </FlexItem>
                      </FlexWrap>
                    </AnalyzeSection>
                  );
                })}
            </>
          )}
        </Wrapper>
      </Main>
    </>
  );
};

export default AddAnalysis;
