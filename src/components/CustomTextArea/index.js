import React from "react";

const CustomTextArea = ({placeholder})=>{
    return(
        <>
            <fieldset className={'input-container'}>
                <textarea placeholder={placeholder} rows={5}></textarea>
            </fieldset>
        </>
    )
};

export default CustomTextArea