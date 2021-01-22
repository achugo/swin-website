import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import Main from "../../components/main/Main";
import { ReactComponent as NoAnalysis } from "../../img-assets/no-analysis.svg";

const Wrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 20px #0000001c;
  border-radius: 10px;
  margin: 0px auto;
  text-align: center;
  padding: 4em 1em;
`;

const Heading = styled.h2`
  font-family: ${appFont.MEDIUM};
  margin-bottom: 1em;
`;

const SubHeading = styled.h4`
  font-family: ${appFont.REGULAR};
  margin-bottom: 2em;
`;

const Section = styled.section`
  margin: 2em 5em;
  padding-bottom: 1em;
`;

const Button = styled.button`
  outline: none;
  border: none;
  background: transparent linear-gradient(101deg, #74e0ff 0%, #41a0ff 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000001d;
  border-radius: 5px;
  opacity: 1;
  font-family: ${appFont.REGULAR};
  color: white;
  padding: 1em 2em;
  float: right;

  &::focus {
    outline: none;
    border: none;
  }
`;

const Analyze = () => {
  return (
    <Main>
      <Wrapper>
        <>
          <Heading>You Haven't Analyzed Any Products</Heading>
          <SubHeading>
            Analyze a product to view a list of Analyzed Products
          </SubHeading>
          <NoAnalysis />
          <Section>
            <Button>Analyze Product</Button>
          </Section>
        </>
      </Wrapper>
    </Main>
  );
};

export default withRouter(Analyze);
