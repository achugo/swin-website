import React from "react";
import styled from "styled-components";
const MainDashboard = styled.div`
  background-color: white;
  padding: 2em 4rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: ${({ width }) => width};
`;

const MainDashboardContainer = ({ children, width = "100%" }) => {
  return <MainDashboard width={width}>{children}</MainDashboard>;
};
export default MainDashboardContainer;
