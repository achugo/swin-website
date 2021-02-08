import React from "react";
import testingImage from "../../img-assets/product-image.png";
import { Button, Rating } from "semantic-ui-react";
import Description from "../StyledComponents/DescriptionParagraph";

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
  return (
    <>
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
              <div className="ten wide column">
                <h3>{props.data.name}</h3>
                <div style={{ margin: "0.5rem 0" }}>
                  <Rating icon="star" mini defaultRating={1} maxRating={5} />
                  <span style={{ marginLeft: "0.3rem" }}>3.5</span>
                </div>

                <p>{props.data.description}</p>
              </div>
              <div className="six wide column">
                <section></section>
                <div
                  style={{
                    textAlign: "right",
                    textDecoration: "underline",
                    marginRight: "1.2rem",
                    marginTop: "0.3rem",
                  }}
                >
                  <a href="#">Company Info</a>
                </div>
              </div>
              <div className="thirteen wide column">
                <Description>{props.data.tech_description}</Description>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AboutSoftware;
