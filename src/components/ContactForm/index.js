import React from "react";
import Gutter from "../StyledComponents/Gutter";
import {Button, Icon} from "semantic-ui-react";
import CustomDropdown from "../dropdown/Dropdown";
import FlexWrap from "../flex/FlexWrap";

const ContactForm = ()=>{
    return(
        <>
            <Gutter>
                <h3>
                    Contact Details
                </h3>
                <div className="ui grid">
                    <div className="eight wide column">
                        <section>
                            <Gutter top={0} bottom={10}>
                                <Icon name={'phone'} style={{marginRight: '0.5rem'}}/>
                                Phone Number
                            </Gutter>
                            <CustomDropdown/>
                        </section>
                        <section>
                            <Gutter top={20} bottom={10}>
                                <Icon name={'address book'} style={{marginRight: '0.5rem'}}/>
                                Phone Number
                            </Gutter>
                            <CustomDropdown/>
                        </section>


                    </div>
                    <div className="eight wide column">
                        <Gutter bottom={15}>
                            <FlexWrap>
                                <Icon name={'circle'}/>
                                <section style={{marginLeft: '0.5rem'}}>
                                    <h4 className={'clear-spacing'}>Website</h4>
                                    <a href="#" className={'clear-spacing'}>www.inc.com</a>
                                </section>
                            </FlexWrap>
                        </Gutter>
                        <Gutter bottom={0} top={0}>
                            <FlexWrap>
                                <Icon name={'mail'}/>
                                <section style={{marginLeft: '0.5rem'}}>
                                    <h4 className={'clear-spacing'}>Email</h4>
                                    <a href="#" className={'clear-spacing'}>inc@gmail.com</a>
                                </section>
                            </FlexWrap>
                        </Gutter>

                    </div>
                </div>
            </Gutter>
        </>
    )
};

export default ContactForm