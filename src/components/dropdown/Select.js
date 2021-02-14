import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";

const Wrapper = styled.div`
  & .Dropdown-control {
    background: #f5f5f5 0% 0% no-repeat padding-box !important;
    box-shadow: 0px 3px 6px #0000001d !important;
    border-radius: 5px !important;
    padding: 1.5em 2.1em 1.5em 1em !important;
    border: none !important;

    .Dropdown-placeholder {
      font-size: 17px;
      font-family: ${appFont.LIGHTPOPPING};
    }

    .Dropdown-arrow {
      border-color: black transparent transparent;
      border-style: solid;
      border-width: 8px 8px 0;
      top: 18px;
    }
  }
`;

const Select = (props) => {
  return (
    <Wrapper>
      <Dropdown
        options={props.options}
        onChange={props.getValue}
        // value={defaultOption}
        placeholder={props.holder}
      />
    </Wrapper>
  );
};

export default Select;
