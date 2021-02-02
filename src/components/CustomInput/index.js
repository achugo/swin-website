import React from "react";

const CustomInput = ({ type, placeholder, change }) => {
  return (
    <>
      <fieldset className={"input-container"}>
        <input onChange={change} type={type} placeholder={placeholder} />
      </fieldset>
    </>
  );
};

export default CustomInput;
