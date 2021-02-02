import React from "react";
import Gutter from "../StyledComponents/Gutter";
import FlexWrap from "../flex/FlexWrap";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import FlexItem from "../flex/FlexItem";
import { ReactComponent as Address } from "../../img-assets/office-building.svg";
import { ReactComponent as Website } from "../../img-assets/globe-icon.svg";
import { ReactComponent as MailIcon } from "../../img-assets/email.svg";

const Heading = styled.h3`
  font-family: ${appFont.REGULAR};
  margin-bottom: 2em;
`;

const Title = styled.div`
  svg {
    max-width: 25px;
  }
  span {
    color: #434343;
    padding-left: 15px;
    position: relative;
    bottom: 4px;
    font-family: ${appFont.MEDIUM};
  }

  h5 {
    font-family: ${appFont.LIGHTPOPPING};
    color: #434343;
    margin-top: 5px;
  }
`;

const ContactForm = () => {
  return (
    <>
      <Gutter>
        <Heading>Contact Details</Heading>

        <FlexWrap>
          <FlexItem flex={1}>
            <Title>
              <div>
                <Address />
                <span>Address</span>
              </div>
              <h5>Emmanegger@Swin.com</h5>
            </Title>
          </FlexItem>

          <FlexItem flex={1}>
            <Title>
              <div>
                <Website />
                <span>Website</span>
              </div>
              <h5>www.ind.com</h5>
            </Title>
          </FlexItem>

          <FlexItem flex={1}>
            <Title>
              <div>
                <MailIcon />
                <span>Address</span>
              </div>
              <h5>Emmanegger@Swin.com</h5>
            </Title>
          </FlexItem>
        </FlexWrap>
      </Gutter>
    </>
  );
};

export default ContactForm;
