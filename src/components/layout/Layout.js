import React from "react";
import Main from "../main/Main";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Main />
        <Sidebar />
      </div>
    </>
  );
};

export default Layout;
