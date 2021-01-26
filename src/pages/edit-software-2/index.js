import React from "react";
import MainDashboardContainer from "../../components/StyledComponents/MainDashBoardContainer";
import Gutter from "../../components/StyledComponents/Gutter";
import {Button, Icon, Image} from 'semantic-ui-react'
import Main from "../../components/main/Main";
import Description from "../../components/StyledComponents/DescriptionParagraph";
import Logo from '../../img-assets/product-image.png'
import {appFont} from "../../appTheme/appFont";
import CustomDropdown from "../../components/dropdown/Dropdown";
import FlexWrap from "../../components/flex/FlexWrap";
import SoftwareEditHeader from "../../components/SoftwareEditHeader";
import SoftwareEditButton from "../../components/SoftwareEditButton";
import ContactForm from "../../components/ContactForm";
import CardContainer from "../../components/StyledComponents/CardContainer";
import {appColors} from "../../appTheme/appTheme";
import ImageCarousel from "../../components/ImageCarousel";

const EditSoftware2 = () => {
    return (
        <>
            <Main>
                <Gutter>
                    <section style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button primary size={'tiny'}>
                            Edit Company
                            <Icon name="edit" style={{marginLeft: '0.5rem'}}/>
                        </Button>
                    </section>
                </Gutter>
                <MainDashboardContainer>
                    <SoftwareEditHeader/>
                    <SoftwareEditButton />
                    <Gutter bottom={15}>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante leo, aliquam et
                            felis sed, egestas posuere augue. Etiam commodo est eget est tincidunt feugiat Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Pellentesque ante leo, aliquam et
                            felis sed, egestas posuere augue. Etiam commodo est eget est tincidunt feugiat
                        </Description>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante leo, aliquam et
                            felis sed, egestas posuere augue. Etiam commodo est eget est tincidunt feugiat Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Pellentesque ante leo, aliquam et
                            felis sed, egestas posuere augue. Etiam commodo est eget est tincidunt feugiat
                        </Description>
                    </Gutter>
                    <Gutter>
                        <SoftwareEditButton name={'Services'} buttonName={'Add Service'} buttonIcon={'plus'} icon={false} />
                        <div className="ui grid">
                            <div className="eight wide column">
                                <CardContainer boxShadow={false} color={appColors.LIGHTERBLUE}>
                                    <section style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <h3>Marketing</h3>
                                        <Icon name={'trash'}/>
                                    </section>
                                    <Description>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante leo, aliquam et
                                        felis sed, egestas posuere augue. Etiam commodo est eget est tincidunt feugiat Lorem ipsum
                                        dolor sit amet, consectetur adipiscing elit. Pellentesque ante leo, aliquam et
                                        felis sed, egestas posuere augue. Etiam commodo est eget est tincidunt feugiat
                                    </Description>
                                </CardContainer>
                            </div>
                            <div className="eight wide column">
                                <CardContainer boxShadow={false} color={appColors.LIGHTERBLUE}>
                                    <section style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <h3>Marketing</h3>
                                        <Icon name={'trash'}/>
                                    </section>
                                    <Description>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante leo, aliquam et
                                        felis sed, egestas posuere augue. Etiam commodo est eget est tincidunt feugiat Lorem ipsum
                                        dolor sit amet, consectetur adipiscing elit. Pellentesque ante leo, aliquam et
                                        felis sed, egestas posuere augue. Etiam commodo est eget est tincidunt feugiat
                                    </Description>
                                </CardContainer>
                            </div>
                        </div>
                    </Gutter>
                    <Gutter>
                        <SoftwareEditButton name={'Images'} buttonName={'Add Image'} buttonIcon={'plus'} icon={false} />
                        <ImageCarousel/>
                    </Gutter>
                    <ContactForm/>
                </MainDashboardContainer>
            </Main>

        </>
    )
};
export default EditSoftware2