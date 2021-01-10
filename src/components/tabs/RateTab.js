import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import { appColors } from "../../appTheme/appTheme";

const WrapTabs = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 6px 12px 16px #0000000b;
  border-radius: 20px;
  padding: 2em;

  @media screen and (max-width: 768px) {
    padding: 1em;
  }

  & .react-tabs {
    & .react-tabs__tab-list {
      background: rgb(195 195 195 / 0.14) no-repeat padding-box;
      border-radius: 200px;
      border: none;
      width: 100%;

      @media screen and (max-width: 768px) {
        margin: 10px;
      }
    }

    & .react-tabs__tab {
      padding: 1em;
      width: 40%;
      text-align: center;
      color: rgba(0, 117, 255, 1);
      font-family: ${appFont.BOLD};

      @media screen and (max-width: 1280px) {
        width: 38%;
      }
    }
    & .react-tabs__tab--selected {
      background-color: rgba(0, 117, 255, 0.13);
      border-radius: 200px;
      color: rgba(0, 117, 255, 1);
      font-family: ${appFont.BOLD};
      border: none;
    }

    & .react-tabs__tab-panel {
      padding: 2em 0;
    }
  }
`;

const PurchaseForm = styled.form`
  & label {
    margin-top: 1em;
    display: block;
    color: ${appColors.DARKHEADER};
    font-family: ${appFont.LIGHT};
  }
  input {
    width: 100%;
    background: rgba(195, 195, 195, 0.14) 0% 0% no-repeat padding-box;
    border-radius: 200px;
    padding: 1em;
    margin: 0.5em 0;
    outline: none;
    border: none;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;

    &::focus {
      outline: none;
      border: none;
    }
  }
`;

const Button = styled.button`
  background-color: ${appColors.SECONDARYBLUE};
  color: ${appColors.WHITE};
  padding: 1em;
  width: 100%;
  border-radius: 37px;
  font-family: ${appFont.BOLD};

  margin: 10px 0px;

  &::focus {
    outline: none;
    border: none;
  }
`;

const RateTabs = () => (
  <WrapTabs>
    <Tabs>
      <TabList>
        <Tab>Buy Bitcoin</Tab>
        <Tab>Sell Bitcoin</Tab>
      </TabList>

      <TabPanel>
        <PurchaseForm>
          <label>How much do you want to buy?</label>
          <input type="tel" />
          <label>Fiat Equivalent</label>
          <input type="tel" />
        </PurchaseForm>

        <Button>Buy bitcoin</Button>
      </TabPanel>
      <TabPanel>
        <PurchaseForm>
          <label>How much do you want to sell?</label>
          <input type="tel" />
          <label>Fiat Equivalent</label>
          <input type="tel" />
          <Button>Sell bitcoin</Button>
        </PurchaseForm>
      </TabPanel>
    </Tabs>
  </WrapTabs>
);

export default RateTabs;
