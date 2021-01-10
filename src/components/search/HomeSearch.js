import React from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import { appColors } from "../../appTheme/appTheme";
import { ReactComponent as SearchIcon } from "../../img-assets/icon-search.svg";

const StyledHeading = styled.h2`
  color: ${appColors.WHITE};
  font-family: ${appFont.REGULAR};
  font-weight: lighter;
  margin: 20px 0;
`;

const HomeSearch = () => {
  return (
    <div className="home__search">
      <StyledHeading>Find the software you need</StyledHeading>
      <div className="wrap__search">
        <input type="text" placeholder="search" />

        <button>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default HomeSearch;
