import React from "react";

const CustomInput = ({type, placeholder})=>{
    return (
        <>
            <fieldset className={'input-container'}>
                <input type="text" placeholder={placeholder}/>
            </fieldset>
        </>
        )

};

export default CustomInput