import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styled from "styled-components";

const Wrapper = styled.div`
  & .Dropdown-control {
    background: #f5f5f5 0% 0% no-repeat padding-box !important;
    box-shadow: 0px 3px 6px #0000001d !important;
    border-radius: 5px !important;
    padding: 1.5em 2.1em 1.5em 1em !important;
    border: none !important;
  }
`;

const Select = (props) => {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  return (
    <Wrapper>
      <Dropdown
        options={options}
        //   onChange={this._onSelect}
        // value={defaultOption}
        placeholder={props.holder}
      />
    </Wrapper>
  );
};

export default Select;
