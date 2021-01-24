import React from "react";
import Main from "../../components/main/Main";
import MainDashboardContainer from "../../components/StyledComponents/MainDashBoardContainer";
import {Button, Icon} from "semantic-ui-react";
import Gutter from "../../components/StyledComponents/Gutter";
import SoftwareEditHeader from "../../components/SoftwareEditHeader";

const EditUserProfile = () => {
    return (
        <>
            <Main>
                <section style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <section style={{width: '60%'}}>
                        <Gutter top={0} bottom={10}>
                            <section style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button primary size={'tiny'}>
                                    Edit Profile
                                    <Icon name="edit" style={{marginLeft: '0.5rem'}}/>
                                </Button>
                            </section>
                        </Gutter>
                        <MainDashboardContainer>
                            <SoftwareEditHeader name={'Emmanuella'} subName={'Swartzeneggar'} fontName={'1.5rem'}
                                                fontSubName={'1rem'} title={'Tech Official'} subTitle={'IND solution'}/>
                                                <section>
                                                    <Gutter top={20} bottom={10}>
                                                        <Icon name={'address book'} style={{marginRight: '0.5rem'}}/>
                                                        Phone Number
                                                    </Gutter>
                                                    <Gutter top={10} bottom={10}>
                                                        <Icon name={'address book'} style={{marginRight: '0.5rem'}}/>
                                                        Phone Number
                                                    </Gutter>
                                                </section>
                        </MainDashboardContainer>
                    </section>

                </section>
            </Main>
        </>
    )
};

export default EditUserProfile