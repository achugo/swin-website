import React, { useEffect, useState } from "react";

let dummyData = [1, 2, 3, 4, 5, 6, 7, 8];
const platforms = [
  "Mac OS",
  "Windows OS",
  "IOS App",
  "Android App",
  "web based, Saas, Cloud",
];
const deployments = ["CloudOn", "Premise"];
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

const SoftwareOptions = ({ data = dummyData, getSpecs }) => {
  const [specifications, setSpecifications] = useState([]);
  const gutter = {
    margin: "20px 0",
  };

  useEffect(() => {
    getSpecs(specifications);
  }, [specifications]);

  const onChangeCheck = (e) => {
    let current_spec = specifications;
    if (e.target.checked) {
      let updated_spec = current_spec.concat({
        name: e.target.value,
        category: e.target.id,
      });
      setSpecifications(updated_spec);
    } else {
      let updated_spec = current_spec.filter(
        (data) => data.name === e.target.value
      );
      setSpecifications(updated_spec);
    }
  };

  console.log("specs are", specifications);
  return (
    <div>
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
                      value={data}
                      id="platform"
                      onChange={onChangeCheck}
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
                      onChange={onChangeCheck}
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
                      onChange={onChangeCheck}
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
                      onChange={onChangeCheck}
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
                      onChange={onChangeCheck}
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
                      onChange={onChangeCheck}
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
    </div>
  );
};

export default SoftwareOptions;
