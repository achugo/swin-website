import React from "react";
import demo from "../../img-assets/demo.svg";
import blog from "../../img-assets/blogs.svg";
import presentation from "../../img-assets/presentations.svg";
import webinars from "../../img-assets/webinar.svg";
import podcast from "../../img-assets/podcast-collateral.svg";
import tutorials from "../../img-assets/tutorials.svg";
import "./style.css";
import styled from "styled-components";
import { useRouteMatch, withRouter } from "react-router-dom";

const CollateralCard = styled.div`
  background-color: white;
  padding: 1.2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  border-radius: 10px;
`;

const DigitalCollateral = ({ collateral, id, history }) => {
  const match = useRouteMatch();
  const formatSelected = (data) => {
    if (data === "Demo") {
      return demo;
    }
    if (data === "Blog") {
      return blog;
    }
    if (data === "Presentation") {
      return presentation;
    }
    if (data === "Tutorial") {
      return tutorials;
    }
    if (data === "Podcast") {
      return podcast;
    }
    if (data === "Webinars") {
      return webinars;
    }
  };

  return (
    <div className="ui stackable grid">
      {collateral &&
        collateral.map((item) => (
          <div className="four wide column">
            <CollateralCard
              onClick={() =>
                history.push(
                  `/dashboard/product/${match.params.id}/${item.category}`
                )
              }
            >
              <div className={"card-content"}>
                <img src={formatSelected(item.category)} alt="" height={60} />
                <h5>{item.category}</h5>
              </div>
            </CollateralCard>
          </div>
        ))}
    </div>
  );
};
export default withRouter(DigitalCollateral);
