import React, { useEffect, useRef, useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import styled from "styled-components";
import { appColors } from "../../appTheme/appTheme";

const Wrapper = styled.div`
  background-color: ${appColors.WHITE};
`;

const MultipleSelect = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const multiselectRef = useRef();
  const [pre_selected, setPreSelectedVal] = useState([]);

  useEffect(() => {
    setPreSelectedVal(
      localStorage.getItem("select")
        ? JSON.parse(localStorage.getItem("select"))
        : []
    );
  }, []);

  const options = [
    { name: "Srigar", id: 1 },
    { name: "Sam", id: 2 },
  ];

  const onSelect = (selectedList, selectedItem) => {
    localStorage.setItem("select", JSON.stringify(getValues()));
  };

  const onRemove = (selectedList, removedItem) => {
    localStorage.setItem("select", JSON.stringify(getValues()));
  };

  const getValues = () => {
    return multiselectRef.current.getSelectedItems();
  };

  return (
    <Wrapper>
      <Multiselect
        ref={multiselectRef}
        options={options} // Options to display in the dropdown
        selectedValues={pre_selected} // Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
      />
    </Wrapper>
  );
};

export default MultipleSelect;
