import React from "react";
import styled from "styled-components";
const MainDashboard = styled.div`
 background-color: white;
 padding: 1.5rem;
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const MainDashboardContainer = ({children})=>{
    return(
        <MainDashboard>
            {children}
        </MainDashboard>
    )
};
export default MainDashboardContainer
