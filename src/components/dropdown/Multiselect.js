import React, { useEffect, useRef, useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import styled from "styled-components";
import { appColors } from "../../appTheme/appTheme";
import api from "../../api/api";
import { toast } from "react-toastify";

const Wrapper = styled.div`
  background-color: ${appColors.WHITE};
  margin-top: 1em;

  .search-wrapper {
    border: none;
  }
`;

const MultipleSelect = (props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [users, setUsers] = useState([]);
  const multiselectRef = useRef();
  const [pre_selected, setPreSelectedVal] = useState([]);

  useEffect(() => {
    get_users();
  }, []);

  const get_users = async () => {
    const status = await api.get("users");
    if (status.status) {
      let format = status.data.map((item) => {
        return {
          id: item.id,
          name: `${item.first_name} ${item.last_name}`,
        };
      });
      setUsers(format);
    } else {
      toast.error(status.message);
    }
  };

  console.log("users, ", users);

  const onSelect = (selectedList, selectedItem) => {
    localStorage.setItem("select", JSON.stringify(getValues()));
  };

  const onRemove = (selectedList, removedItem) => {
    localStorage.setItem("select", JSON.stringify(getValues()));
  };

  const getValues = () => {
    // console.log(multiselectRef.current.getSelectedItems());
    props.group_selection(
      props.index,
      multiselectRef.current.getSelectedItems()
    );
    return multiselectRef.current.getSelectedItems();
  };

  return (
    <Wrapper>
      {users && (
        <Multiselect
          ref={multiselectRef}
          options={users} // Options to display in the dropdown
          selectedValues={getValues} // Preselected value to persist in dropdown
          onSelect={onSelect} // Function will trigger on select event
          onRemove={onRemove} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
        />
      )}
    </Wrapper>
  );
};

export default MultipleSelect;
