import React, { useState } from "react";
import testingImage from "../../img-assets/product-image.png";
import { Button, Rating } from "semantic-ui-react";
import Description from "../StyledComponents/DescriptionParagraph";
import { ReactComponent as InActiveStar } from "../../img-assets/inactive-star.svg";
import { ReactComponent as ActiveStar } from "../../img-assets/star-active.svg";
import { ReactComponent as CompanyProfile } from "../../img-assets/company-profile.svg";
import { ReactComponent as Evaluate } from "../../img-assets/evaluate.svg";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import { useRouteMatch, withRouter } from "react-router-dom";
import Modal from "react-responsive-modal";
import Evaluation from "../modals/Evaluation";
import { url_base } from "../../api/api";
import SalesModal from "../modals/SalesModal";

const Wrapper = styled.div`
  h3.heading {
    font-family: ${appFont.REGULAR};
  }

  p {
    font-family: ${appFont.LIGHTPOPPING};
    font-size: 16px;
  }
`;

const Ratings = styled.div`
  display: inline-block;
  svg {
    margin: 2px;
  }
  span {
    position: relative;
    bottom: 2px;
  }
`;

const CompanyButton = styled.button`
  background-color: transparent;
  padding: 0.6em 0.8em;
  border: 1px solid #334a90;
  min-width: 160px;
  border-radius: 5px;
  span {
    color: #334a90;
    position: relative;
    padding-right: 10px;
    font-family: ${appFont.MEDIUM};
    font-size: 13px;
    bottom: 5px;
  }
  svg {
    max-width: 15px;
    max-height: 25px;
  }
`;

const CompanyProfilee = styled.div`
  display: block;

  span {
    float: right;
    color: #3f9aff;
    font-family: ${appFont.ITALICS};
    position: relative;
    top: 15px;
    text-decoration: underline;
    right: 25px;
    cursor: pointer;
  }
`;

const EvaluateButton = styled.button`
  margin-left: 20px;
  min-width: 160px;
  background-color: #3f9aff;
  padding: 0.6em 0.8em;
  border-radius: 5px;
  span {
    color: white;
    position: relative;
    bottom: 5px;
    padding-right: 10px;
    font-family: ${appFont.MEDIUM};
    font-size: 13px;
  }
  svg {
    max-width: 15px;
    max-height: 23px;
  }
`;

const CustomButton = () => {
  return (
    <>
      <Button
        size={"mini"}
        basic
        color="blue"
        content="Analyze"
        className={"button-size"}
      />
      <Button
        size={"mini"}
        content={"Sales Manager"}
        primary
        className={"button-size"}
      />
    </>
  );
};
const AboutSoftware = (props) => {
  const match = useRouteMatch();

  const [open_sales, setOpenSales] = useState(false);
  const onOpenSalesModal = () => setOpenSales(true);
  const onCloseSalesModal = () => setOpenSales(false);

  return (
    <Wrapper>
      <Modal open={open_sales} onClose={onCloseSalesModal} center>
        <SalesModal triggerClose={onCloseSalesModal} />
      </Modal>
      {props.data && (
        <section className={"ui grid"}>
          <div className="two wide column">
            <img
              src={props.data.logo}
              className={"ui small rounded image"}
              alt=""
            />
          </div>
          <div className="fourteen wide column">
            <div className="ui grid">
              <div className="eight wide column">
                <h3 className="heading">{props.data.name}</h3>
                <div style={{ margin: "0.5rem 0" }}>
                  <Ratings>
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <ActiveStar />
                    <InActiveStar />
                    <span style={{ marginLeft: "0.5rem" }}>3.5</span>
                  </Ratings>
                </div>

                <p>{props.data.description}</p>
              </div>
              <div className="eight wide column">
                <section></section>
                <div
                  style={{
                    textAlign: "right",
                    textDecoration: "underline",
                    marginRight: "1.2rem",
                    marginTop: "0.3rem",
                  }}
                >
                  <CompanyButton onClick={onOpenSalesModal}>
                    <span>Sales Manager</span>
                    <CompanyProfile />
                  </CompanyButton>

                  <EvaluateButton
                    onClick={() => props.history.push("/dashboard/analyze")}
                  >
                    <span>Evaluate</span>
                    <Evaluate />
                  </EvaluateButton>
                </div>
                <CompanyProfilee>
                  <span
                    onClick={() => props.history.push("/dashboard/company")}
                  >
                    Company Profile
                  </span>
                </CompanyProfilee>
              </div>
              <div className="thirteen wide column">
                <Description>{props.data.tech_description}</Description>
              </div>
            </div>
          </div>
        </section>
      )}
    </Wrapper>
  );
};

export default withRouter(AboutSoftware);
