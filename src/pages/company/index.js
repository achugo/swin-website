import React, { useState } from "react";
import MainDashboardContainer from "../../components/StyledComponents/MainDashBoardContainer";
import Gutter from "../../components/StyledComponents/Gutter";
import { Button, Icon, Image } from "semantic-ui-react";
import Main from "../../components/main/Main";
import Description from "../../components/StyledComponents/DescriptionParagraph";
import Logo from "../../img-assets/product-image.png";
import { appFont } from "../../appTheme/appFont";
import CustomDropdown from "../../components/dropdown/Dropdown";
import FlexWrap from "../../components/flex/FlexWrap";
import SoftwareEditHeader from "../../components/SoftwareEditHeader";
import SoftwareEditButton from "../../components/SoftwareEditButton";
import ContactForm from "../../components/ContactForm";
import styled from "styled-components";
import EditCompanyModal from "../../components/modals/EditCompany";
import Modal from "react-responsive-modal";

const EditButton = styled.button`
  background: transparent linear-gradient(107deg, #74e0ff 0%, #41a0ff 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #41a0ff83;
  padding: 0.8em 1.5em;
  border-radius: 5px;
  outline: none;
  color: white;
  border: none;

  &::focus {
    outline: none;
    border: none;
  }
`;

const CompanyPage = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <Modal open={open} onClose={onCloseModal} center>
        <EditCompanyModal />
      </Modal>
      <Main>
        <Gutter>
          <section style={{ display: "flex", justifyContent: "flex-end" }}>
            {/* <EditButton onClick={onOpenModal}>
              Edit Company
              <Icon name="edit" style={{ marginLeft: "0.5rem" }} />
            </EditButton> */}
          </section>
        </Gutter>
        <MainDashboardContainer>
          <SoftwareEditHeader />
          <SoftwareEditButton />
          <Gutter bottom={15}>
            <Description>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque ante leo, aliquam et felis sed, egestas posuere
                augue. Etiam commodo est eget est tincidunt feugiat Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Pellentesque ante
                leo, aliquam et felis sed, egestas posuere augue. Etiam commodo
                est eget est tincidunt feugiat
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque ante leo, aliquam et felis sed, egestas posuere
                augue. Etiam commodo est eget est tincidunt feugiat Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Pellentesque ante
                leo, aliquam et felis sed, egestas posuere augue. Etiam commodo
                est eget est tincidunt feugiat
              </p>
            </Description>
          </Gutter>
          <ContactForm />
        </MainDashboardContainer>
      </Main>
    </>
  );
};
export default CompanyPage;
