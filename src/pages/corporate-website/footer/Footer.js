import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { appFont } from "../../../appTheme/appFont";
import FlexItem from "../../../components/flex/FlexItem";
import FlexWrap from "../../../components/flex/FlexWrap";

const Wrapper = styled.div`
  background: var(--unnamed-color-334a90) 0% 0% no-repeat padding-box;
  background: #334a90 0% 0% no-repeat padding-box;
  opacity: 1;
  padding: 4em 10vw;
`;

const TopSection = styled.div`
  border-bottom: 1px solid white;
  padding-bottom: 1em;
  color: white;
  font-family: ${appFont.REGULAR};
`;

const MiddleSection = styled.div`
  margin-top: 2em;

  a {
    color: white;
    line-height: 1.7;
    font-family: ${appFont.LIGHTPOPPING};
    display: block;
  }
`;
const Header = styled.h5`
  color: white;
  font-family: ${appFont.MEDIUM};
`;

const Footer = () => {
  return (
    <Wrapper>
      <TopSection>
        <FlexWrap>
          <FlexWrap flex={3}>Categories</FlexWrap>
          <FlexWrap flex={1}></FlexWrap>
        </FlexWrap>
      </TopSection>
      <MiddleSection>
        <FlexWrap>
          <FlexItem flex={1}>
            <Header>Contact</Header>
            <Link to="/">Email Us 1.543.234.5678</Link>
            <Link to="/">Office Locations</Link>
            <Header>Contact</Header>
            <Link to="/">Help Center FAQs</Link>
            <Link to="/">System Status</Link>
          </FlexItem>

          <FlexItem flex={1}>
            <Header>For Buyers</Header>
            <Link to="/">Why SWiN</Link>
            <Link to="/"> Software Qualification Tool</Link>
            <Link to="/"> Software Performance Tool</Link>
            <Link to="/">Software Comparison Tool</Link>
            <Link to="/">Pricing Security</Link>
          </FlexItem>

          <FlexItem flex={1}>
            <Header>For Vendors</Header>
            <Link to="/"> Become a Vendor</Link>
            <Link to="/">Claim a Listing </Link>
            <Link to="/">Advertise with Us </Link>
            <Link to="/">Vendor Login </Link>
            <Link to="/">Vendor FAQs </Link>
            <Link to="/">Vendor Policy</Link>
          </FlexItem>

          <FlexItem flex={1}>
            <Header>Company</Header>
            <Link to="/"> About SWiN Team</Link>
            <Link to="/"> Blog Careers Customers Investors</Link>
            <Link to="/"> Software Performance Tool</Link>
            <Link to="/">Software Comparison Tool</Link>
            <Link to="/">Pricing Security</Link>
          </FlexItem>

          <FlexItem flex={1}>
            <Header>Policies</Header>
            <Link to="/"> Privacy Policy </Link>
            <Link to="/"> Terms of Use</Link>
            <Link to="/"> Disclosure Policy Cookies</Link>
            <Link to="/"> Do Not Sell My Personal</Link>
            <Link to="/"> Information Disclosure Policy </Link>
          </FlexItem>
        </FlexWrap>
      </MiddleSection>
    </Wrapper>
  );
};

export default Footer;
