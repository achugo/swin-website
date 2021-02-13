import React from "react";
import testingImage from "../../img-assets/website (1).svg";
import "./style.css";
import styled from "styled-components";
import testingImg from "../../img-assets/website (1).svg";
const CollateralCard = styled.div`
  background-color: white;
  padding: 1.2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
`;
let testData = [1, 2, 5, 6, 7, 8];

const DynamicDigitalCollateral = ({ data = testData }) => {
  return (
    <div className="ui stackable grid">
      {data.map((n) => (
        <div className="four wide column">
          <CollateralCard>
            <div className={"card-content"}>
              <img src={testingImg} alt="" height={60} />
              <h5 className={""}>Banners/Planners</h5>
            </div>
          </CollateralCard>
        </div>
      ))}
    </div>
  );
};
export default DynamicDigitalCollateral;
