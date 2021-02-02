import React from "react";

const CustomTextArea = ({ placeholder, change }) => {
  return (
    <>
      <fieldset className={"input-container"}>
        <textarea
          placeholder={placeholder}
          onChange={change}
          rows={5}
        ></textarea>
      </fieldset>
    </>
  );
};

export default CustomTextArea;
