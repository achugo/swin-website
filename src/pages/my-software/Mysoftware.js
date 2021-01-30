import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import FlexItem from "../../components/flex/FlexItem";
import FlexWrap from "../../components/flex/FlexWrap";
import Main from "../../components/main/Main";
import { ReactComponent as DeleteIcon } from "../../img-assets/delete-icon.svg";
import { ReactComponent as EditIcon } from "../../img-assets/edit-icon.svg";
import product_url from "../../img-assets/dummy-img.png";
import { appColors } from "../../appTheme/appTheme";

const Wrapper = styled.div`
  text-align: center;
  padding: 2em 1em;
`;

const Heading = styled.div`
  font-family: ${appFont.LIGHTPOPPING};
  margin: 2em 0;
  display: flex;
  justify-content: flex-end;
`;

const Section = styled.section`
  margin: 2em 5em;
  padding-bottom: 1em;
`;

const Product = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 20px #0000001c;
  border-radius: 10px;
  margin: 2em 0;
  padding: 2em 1em;
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

const ButtonContainer = styled.div`
  position: relative;
  button {
    width: 45%;
    margin: 0px 5px;
  }
`;

const AddButton = styled.button`
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

const MySoftware = (props) => {
  return (
    <Main>
      <Wrapper>
        <>
          <Section>
            <Heading>
              <AddButton
                onClick={() => props.history.push("/dashboard/mysoftware/add")}
              >
                Add Product
              </AddButton>
            </Heading>
            <>
              <Product>
                <FlexWrap>
                  <FlexItem flex={1}>
                    <IconWrapper>
                      <img src={product_url} alt="product" />
                    </IconWrapper>
                  </FlexItem>
                  <FlexItem flex={5}>
                    <NotifyContent>
                      <h4>Sikomo</h4>
                      <span>Marketing analytics And consulting solutions</span>
                    </NotifyContent>
                  </FlexItem>
                  <FlexItem flex={2}>
                    <ButtonContainer>
                      <IconWrapper>
                        <EditIcon />
                        <DeleteIcon />
                      </IconWrapper>
                    </ButtonContainer>
                  </FlexItem>
                </FlexWrap>
              </Product>
            </>
          </Section>
        </>
      </Wrapper>
    </Main>
  );
};

export default withRouter(MySoftware);
