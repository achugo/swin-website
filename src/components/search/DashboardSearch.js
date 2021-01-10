import React from "react";
import { ReactComponent as SearchIcon } from "../../img-assets/icon-search.svg";

const DashboardSearch = () => {
  return (
    <div className="dashboard__search">
      <div className="wrap__search">
        <input type="text" placeholder="search" />

        <button>
          <SearchIcon />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardSearch;
