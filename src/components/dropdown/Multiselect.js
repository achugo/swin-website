import React, { useEffect, useRef, useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import styled from "styled-components";
import { appColors } from "../../appTheme/appTheme";
import api from "../../api/api";
import { toast } from "react-toastify";
import { appFont } from "../../appTheme/appFont";

const Wrapper = styled.div`
  background-color: ${appColors.WHITE};
  margin-top: 1em;

  .search-wrapper {
    border: none;

    .chip {
      color: #434343;
      background: white;
      border: 1px solid #434343;
      border-radius: 25px;
      padding: 0.5em 0.8em;

      i {
        font-size: 18px;
      }

      .optionContainer {
        li {
          font-size: 17px;
          font-family: ${appFont.LIGHTPOPPING};
        }
      }
    }
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
          name: `${item.first_name} ${item.last_name}`,
          id: item.id,
        };
      });

      setUsers(format);
    } else {
      toast.error(status.message);
    }
  };

  const onSelect = (selectedList, selectedItem, key) => {
    //console.log("selectd", multiselectRef.current.getSelectedItems());
    // console.log("selectd", multiselectRef.current.getSelectedItems());
    // // console.log("selectd", multiselectRef.current.getSelectedItems());
    props.group_selection(
      props.index,
      multiselectRef.current.getSelectedItems()
    );
  };

  const onRemove = (selectedList, removedItem) => {
    //console.log("selectd", multiselectRef.current.getSelectedItems());
    props.group_selection(
      props.index,
      multiselectRef.current.getSelectedItems()
    );
  };

  const getValues = () => {
    console.log("selectd", multiselectRef.current.getSelectedItems());
    props.group_selection(
      props.index,
      multiselectRef.current.getSelectedItems()
    );
  };

  console.log("users", users);

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
