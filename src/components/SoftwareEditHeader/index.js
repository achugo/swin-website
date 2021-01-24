import React from "react";
import Logo from "../../img-assets/product-image.png";
import {appFont} from "../../appTheme/appFont";
import Gutter from "../StyledComponents/Gutter";

const SoftwareEditHeader = ({name = "IND SOLUTION", subName = "Marketing Solutions", fontName = "2rem", fontSubName = "1.3rem", title="45", subTitle="Employees"}) => {
    return (
        <>
            <Gutter>
                <section style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{marginRight: '0.5rem'}}>
                        <img src={Logo} style={{borderRadius: '40px', width: '80px', height: '80px'}}/>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '90%'
                    }}>
                        <div>
                            <h4 className={'clear-spacing'} style={{
                                marginBottom: '0.2rem',
                                fontSize: fontName,
                                fontFamily: appFont.LIGHTPOPPING
                            }}>{name}</h4>
                            <h5 className={'clear-spacing'}
                                style={{fontFamily: 'lighter', fontSize: fontSubName}}>{subName}</h5>
                        </div>
                        <div style={{textAlign: 'right'}}>
                            <h4 className={'clear-spacing'} style={{
                                marginBottom: '0.2rem',
                                fontSize: fontName,
                                fontFamily: appFont.LIGHTPOPPING
                            }}>{title}</h4>
                            <h5 className={'clear-spacing'}
                                style={{fontFamily: 'lighter', fontSize: fontSubName}}>{subTitle}</h5>
                        </div>
                    </div>
                </section>
            </Gutter>
        </>
    )
};

export default SoftwareEditHeader