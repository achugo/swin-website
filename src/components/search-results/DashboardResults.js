import React from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import FlexItem from "../flex/FlexItem";
import FlexWrap from "../flex/FlexWrap";
import product_image from "../../img-assets/product-image.png";
import { ReactComponent as ActiveStar } from "../../img-assets/star-active.svg";
import { ReactComponent as InActiveStar } from "../../img-assets/inactive-star.svg";
import { appColors } from "../../appTheme/appTheme";

const Container = styled.div``;

const Wrapper = styled.div`
  max-width: 70vw;
  margin: 0px auto;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2em 0;
`;

const Heading = styled.h3`
  color: #070a13;
  font-family: ${appFont.LIGHTPOPPING};
  display: inline;
`;

const Count = styled.span`
  color: #8e8e8e;
  font-style: italic;
  font-family: ${appFont.LIGHTPOPPING};
`;

const StyledResults = styled.div`
  position: relative;
  margin-top: 2em;
`;

const SearchItem = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px;
  overflow: hidden;
  max-width: 230px;
  margin: 7px;
  cursor: pointer;
`;

const ProductImage = styled.img`
  max-width: 100%;
  display: block;
`;

const ProductDescription = styled.div`
  position: relative;
  padding: 0.5em;
`;

const Rating = styled.div`
  margin: 4px 0;

  svg {
    margin-right: 3px;
  }
`;

const ProductName = styled.h4`
  color: #334a90;
  font-family: ${appFont.MEDIUM};
`;

const Category = styled.span`
  position: relative;
`;

const MoreResult = styled.button`
  background-color: #3f9aff;
  color: white;
  padding: 1em 2.5em;
  outline: none;
  border: none;
  font-family: ${appFont.REGULAR};
  border-radius: 10px;

  &::focus {
    outline: none;
    border: none;
  }
`;

const DashboardResult = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderSection>
          <Heading>Suggested for you</Heading>
          <MoreResult>See More</MoreResult>
        </HeaderSection>
        <StyledResults>
          <FlexWrap>
            <FlexItem flex={1}>
              <SearchItem>
                <ProductImage src={product_image} alt="product image" />
                <ProductDescription>
                  <Rating>
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <InActiveStar />
                  </Rating>
                  <ProductName>AAA</ProductName>
                  <Category>
                    Marketing analytics And consulting solutions
                  </Category>
                </ProductDescription>
              </SearchItem>
            </FlexItem>
            <FlexItem flex={1}>
              <SearchItem>
                <ProductImage src={product_image} alt="product image" />
                <ProductDescription>
                  <Rating>
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <InActiveStar />
                  </Rating>
                  <ProductName>AAA</ProductName>
                  <Category>
                    Marketing analytics And consulting solutions
                  </Category>
                </ProductDescription>
              </SearchItem>
            </FlexItem>
            <FlexItem flex={1}>
              <SearchItem>
                <ProductImage src={product_image} alt="product image" />
                <ProductDescription>
                  <Rating>
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <InActiveStar />
                  </Rating>
                  <ProductName>AAA</ProductName>
                  <Category>
                    Marketing analytics And consulting solutions
                  </Category>
                </ProductDescription>
              </SearchItem>
            </FlexItem>
            <FlexItem flex={1}>
              <SearchItem>
                <ProductImage src={product_image} alt="product image" />
                <ProductDescription>
                  <Rating>
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <InActiveStar />
                  </Rating>
                  <ProductName>AAA</ProductName>
                  <Category>
                    Marketing analytics And consulting solutions
                  </Category>
                </ProductDescription>
              </SearchItem>
            </FlexItem>

            <FlexItem flex={1}>
              <SearchItem>
                <ProductImage src={product_image} alt="product image" />
                <ProductDescription>
                  <Rating>
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <InActiveStar />
                  </Rating>
                  <ProductName>AAA</ProductName>
                  <Category>
                    Marketing analytics And consulting solutions
                  </Category>
                </ProductDescription>
              </SearchItem>
            </FlexItem>
          </FlexWrap>
        </StyledResults>
        <HeaderSection>
          <Heading>New in your field</Heading>
          <MoreResult>See More</MoreResult>
        </HeaderSection>
        <StyledResults>
          <FlexWrap>
            <FlexItem flex={1}>
              <SearchItem>
                <ProductImage src={product_image} alt="product image" />
                <ProductDescription>
                  <Rating>
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <InActiveStar />
                  </Rating>
                  <ProductName>AAA</ProductName>
                  <Category>
                    Marketing analytics And consulting solutions
                  </Category>
                </ProductDescription>
              </SearchItem>
            </FlexItem>
            <FlexItem flex={1}>
              <SearchItem>
                <ProductImage src={product_image} alt="product image" />
                <ProductDescription>
                  <Rating>
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <InActiveStar />
                  </Rating>
                  <ProductName>AAA</ProductName>
                  <Category>
                    Marketing analytics And consulting solutions
                  </Category>
                </ProductDescription>
              </SearchItem>
            </FlexItem>
            <FlexItem flex={1}>
              <SearchItem>
                <ProductImage src={product_image} alt="product image" />
                <ProductDescription>
                  <Rating>
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <InActiveStar />
                  </Rating>
                  <ProductName>AAA</ProductName>
                  <Category>
                    Marketing analytics And consulting solutions
                  </Category>
                </ProductDescription>
              </SearchItem>
            </FlexItem>
            <FlexItem flex={1}>
              <SearchItem>
                <ProductImage src={product_image} alt="product image" />
                <ProductDescription>
                  <Rating>
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <InActiveStar />
                  </Rating>
                  <ProductName>AAA</ProductName>
                  <Category>
                    Marketing analytics And consulting solutions
                  </Category>
                </ProductDescription>
              </SearchItem>
            </FlexItem>
            <FlexItem flex={1}>
              <SearchItem>
                <ProductImage src={product_image} alt="product image" />
                <ProductDescription>
                  <Rating>
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <InActiveStar />
                  </Rating>
                  <ProductName>AAA</ProductName>
                  <Category>
                    Marketing analytics And consulting solutions
                  </Category>
                </ProductDescription>
              </SearchItem>
            </FlexItem>
          </FlexWrap>
        </StyledResults>
        <HeaderSection>
          <Heading>New in your field22</Heading>
          <MoreResult>See More</MoreResult>
        </HeaderSection>
        <StyledResults>
          <FlexWrap>
            <FlexItem flex={1}>
              <SearchItem>
                <ProductImage src={product_image} alt="product image" />
                <ProductDescription>
                  <Rating>
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <InActiveStar />
                  </Rating>
                  <ProductName>AAA</ProductName>
                  <Category>
                    Marketing analytics And consulting solutions
                  </Category>
                </ProductDescription>
              </SearchItem>
            </FlexItem>
            <FlexItem flex={1}>
              <SearchItem>
                <ProductImage src={product_image} alt="product image" />
                <ProductDescription>
                  <Rating>
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <InActiveStar />
                  </Rating>
                  <ProductName>AAA</ProductName>
                  <Category>
                    Marketing analytics And consulting solutions
                  </Category>
                </ProductDescription>
              </SearchItem>
            </FlexItem>
            <FlexItem flex={1}>
              <SearchItem>
                <ProductImage src={product_image} alt="product image" />
                <ProductDescription>
                  <Rating>
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <InActiveStar />
                  </Rating>
                  <ProductName>AAA</ProductName>
                  <Category>
                    Marketing analytics And consulting solutions
                  </Category>
                </ProductDescription>
              </SearchItem>
            </FlexItem>
            <FlexItem flex={1}>
              <SearchItem>
                <ProductImage src={product_image} alt="product image" />
                <ProductDescription>
                  <Rating>
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <InActiveStar />
                  </Rating>
                  <ProductName>AAA</ProductName>
                  <Category>
                    Marketing analytics And consulting solutions
                  </Category>
                </ProductDescription>
              </SearchItem>
            </FlexItem>
            <FlexItem flex={1}>
              <SearchItem>
                <ProductImage src={product_image} alt="product image" />
                <ProductDescription>
                  <Rating>
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <InActiveStar />
                  </Rating>
                  <ProductName>AAA</ProductName>
                  <Category>
                    Marketing analytics And consulting solutions
                  </Category>
                </ProductDescription>
              </SearchItem>
            </FlexItem>
          </FlexWrap>
        </StyledResults>
      </Wrapper>
    </Container>
  );
};

export default DashboardResult;
