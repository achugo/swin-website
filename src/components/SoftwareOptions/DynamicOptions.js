import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";

let dummyData = [1, 2, 3, 4, 5, 6, 7, 8];
const platforms = [
  "Mac OS",
  "Windows OS",
  "IOS App",
  "Android App",
  "web based, Saas, Cloud",
];
const deployments = ["Platform", "Premise"];
const business_size = ["Small", "Medium", "Large"];
const training_options = [
  "Live online",
  "Documentation",
  "In person",
  "Webinars",
  "Online videos",
];
const support = ["Live chat", "Phone calls", "Email"];
const pricing_model = ["Licensed based", "Free trial"];

const Wrapper = styled.div`
  h4 {
    font-family: ${appFont.REGULAR};
  }
  label {
    font-family: ${appFont.LIGHTPOPPING};
  }
`;

const DynamicSoftwareOptions = ({ data = dummyData, getSpecs, options_ }) => {
  const gutter = {
    margin: "20px 0",
  };

  const [options, setOptions] = useState(null);

  useEffect(() => {
    if (options_) {
      let formatted = options_.map((item) => item.name);
      setOptions(formatted);
    }
  }, [options_]);
  return (
    <>
      {options && (
        <Wrapper>
          <section>
            <h3 className={"text-bold"}>Technical Specification</h3>
            <section>
              <h4>Platforms</h4>
              <section className="ui grid">
                {platforms.map((data) => (
                  <div className="four wide column">
                    <div className="inline field">
                      <div className="ui checkbox">
                        <input
                          type="checkbox"
                          checked={options.indexOf(data) === -1 ? false : true}
                          value={data}
                          id="platform"
                        />
                        <label>{data}</label>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            </section>

            <section>
              <h4 style={{ margin: "20px 0" }}>Deployment</h4>
              <section className="ui grid">
                {deployments.map((data) => (
                  <div className="four wide column">
                    <div className="inline field">
                      <div className="ui checkbox">
                        <input
                          type="checkbox"
                          value={data}
                          checked={options.indexOf(data) === -1 ? false : true}
                          id="deployments"
                        />
                        <label>{data}</label>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            </section>

            <section>
              <h4 style={{ margin: "20px 0" }}>Business Size</h4>
              <section className="ui grid">
                {business_size.map((data) => (
                  <div className="four wide column">
                    <div className="inline field">
                      <div className="ui checkbox">
                        <input
                          type="checkbox"
                          value={data}
                          id="business size"
                          checked={options.indexOf(data) === -1 ? false : true}
                        />
                        <label>{data}</label>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            </section>

            <section>
              <h4 style={{ margin: "20px 0" }}>Training Options</h4>
              <section className="ui grid stacked">
                {training_options.map((data) => (
                  <div className="four wide column">
                    <div className="inline field">
                      <div className="ui checkbox">
                        <input
                          type="checkbox"
                          value={data}
                          id="training options"
                          checked={options.indexOf(data) === -1 ? false : true}
                        />
                        <label>{data}</label>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            </section>

            <section>
              <h4 style={{ margin: "20px 0" }}>Support</h4>
              <section className="ui grid stacked">
                {support.map((data) => (
                  <div className="four wide column">
                    <div className="inline field">
                      <div className="ui checkbox">
                        <input
                          type="checkbox"
                          value={data}
                          id="support"
                          checked={options.indexOf(data) === -1 ? false : true}
                        />
                        <label>{data}</label>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            </section>
          </section>

          <section>
            <h3 className={"text-bold"} style={{ marginTop: "80px" }}>
              Pricing
            </h3>
            <section>
              <h4 style={gutter}>Pricing Model</h4>
              <section className="ui grid">
                {pricing_model.map((data) => (
                  <div className="four wide column">
                    <div className="inline field">
                      <div className="ui checkbox">
                        <input
                          type="checkbox"
                          value={data}
                          id="pricing model"
                          checked={options.indexOf(data) === -1 ? false : true}
                        />
                        <label>{data}</label>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            </section>
            <section>
              <h4 style={gutter}>Training Options</h4>
              <section className="ui grid stacked">
                {data.slice(1, 2).map((d) => (
                  <div className="four wide column">
                    <p>$9.30/month</p>
                  </div>
                ))}
              </section>
            </section>
          </section>
        </Wrapper>
      )}
    </>
  );
};

export default DynamicSoftwareOptions;
