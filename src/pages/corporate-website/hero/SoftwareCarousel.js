import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import HeroVideo from "./Hero";
import poster from "../../../img-assets/video_background.svg";
import aviation from "../../../img-assets/aviation.png";
import construction from "../../../img-assets/construction.png";
import finance from "../../../img-assets/finance.png";
import healthcare from "../../../img-assets/healthcare.png";
import { appFont } from "../../../appTheme/appFont";
import { appColors } from "../../../appTheme/appTheme";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Wrapper = styled.div`
  margin: 0 0 4em 0vw;

  h1 {
    font-family: ${appFont.MEDIUM};
    margin-top: 3em;
    font-size: 2.5rem;
    text-align: center;
    position: relative;
    top: 2em;
    color: ${appColors.DARKHEADER};

    @media screen and (max-width: 768px) {
      font-size: 1.9rem;
    }
    span {
      color: #bff1ff;
    }
  }
`;

const SoftwareCarousel = () => {
  return (
    <>
      <Wrapper>
        <h1 className="text-black text-center">
          The content you need, for the <br />
          <span>Software</span> you seek you
        </h1>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={6000}
          centerMode={false}
          className=""
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <HeroVideo video={finance} />
          <HeroVideo video={healthcare} />
          <HeroVideo video={aviation} />
          <HeroVideo video={construction} />
        </Carousel>
      </Wrapper>
    </>
  );
};

export default SoftwareCarousel;
