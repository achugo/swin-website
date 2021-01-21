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
import FlexItem from "../../components/flex/FlexItem";

const Wrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 20px #0000001c;
  border-radius: 10px;
  margin: 0px auto;
  padding: 4em 1em;
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
  margin: 2em 0 4em 0;
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

const AddAnalysis = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <Modal open={open} onClose={onCloseModal} center>
        <AddUser />
      </Modal>
      <Main>
        <Wrapper>
          <Heading>Analyze your choice software with your team</Heading>
          <Section>
            <LabelHeading>Select App</LabelHeading>
            <CustomDropdown holder="Search for app name" />
          </Section>
          <Section>
            <LabelHeading>Select Number of stages</LabelHeading>
            <Select holder="select stages" />
          </Section>

          <Section>
            <Heading>3 Stages Review</Heading>
          </Section>

          <Section>
            <SubHeading>Stage 1</SubHeading>
            <Select holder="Department" />
            <FlexWrap>
              <FlexItem flex="1">
                <Adduser onClick={onOpenModal}>Add User</Adduser>
              </FlexItem>
              <FlexItem flex="6">
                <SelectedUsers />
              </FlexItem>
            </FlexWrap>
          </Section>

          <Section>
            <SubHeading>Stage 2</SubHeading>
            <Select holder="Department" />
            <FlexWrap>
              <FlexItem flex="1">
                <Adduser onClick={onOpenModal}>Add User</Adduser>
              </FlexItem>
              <FlexItem flex="6">
                <SelectedUsers />
              </FlexItem>
            </FlexWrap>
          </Section>

          <Section>
            <SubHeading>Stage 3</SubHeading>
            <Select holder="Department" />
            <FlexWrap>
              <FlexItem flex="1">
                <Adduser onClick={onOpenModal}>Add User</Adduser>
              </FlexItem>
              <FlexItem flex="6">
                <SelectedUsers />
              </FlexItem>
              <FlexItem flex="1">
                <Start>Start</Start>
              </FlexItem>
            </FlexWrap>
          </Section>
        </Wrapper>
      </Main>
    </>
  );
};

export default AddAnalysis;
