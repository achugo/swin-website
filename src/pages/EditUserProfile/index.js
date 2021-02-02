import React, { useState } from "react";
import Main from "../../components/main/Main";
import MainDashboardContainer from "../../components/StyledComponents/MainDashBoardContainer";
import { Button, Icon } from "semantic-ui-react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Gutter from "../../components/StyledComponents/Gutter";
import { ReactComponent as EmailIcon } from "../../img-assets/mail-icon.svg";
import { ReactComponent as PhoneIcon } from "../../img-assets/phone-icon.svg";
import SoftwareEditHeader from "../../components/SoftwareEditHeader";
import styled from "styled-components";
import EditModal from "../../components/modals/EditModal";

const Section = styled.section`
  width: 80%;
  margin: 0px auto;
`;

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

const ContactSection = styled.section`
  svg {
    max-width: 20px;
  }

  span {
    padding-left: 10px;
    position: relative;
    bottom: 5px;
  }
`;

const EditUserProfile = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <Modal open={open} onClose={onCloseModal} center>
        <EditModal triggerClose={onCloseModal} />
      </Modal>
      <Main>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Section>
            <Gutter top={0} bottom={10}>
              <section style={{ display: "flex", justifyContent: "flex-end" }}>
                <EditButton onClick={onOpenModal}>
                  <span>Edit Profile</span>
                  <Icon name="edit" style={{ marginLeft: "0.5rem" }} />
                </EditButton>
              </section>
            </Gutter>
            <MainDashboardContainer>
              <SoftwareEditHeader
                name={"Emmanuella"}
                subName={"Swartzeneggar"}
                fontName={"1.5rem"}
                fontSubName={"1rem"}
                title={"Tech Official"}
                subTitle={"IND solution"}
              />
              <ContactSection>
                <Gutter top={20} bottom={10}>
                  <EmailIcon />
                  <span className="text">Email</span>
                </Gutter>
                <Gutter top={10} bottom={10}>
                  <PhoneIcon />
                  <span className="text">Phone</span>
                </Gutter>
              </ContactSection>
            </MainDashboardContainer>
          </Section>
        </section>
      </Main>
    </>
  );
};

export default EditUserProfile;
