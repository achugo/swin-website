import React from "react";
import Gutter from "../StyledComponents/Gutter";
import {Button, Icon} from "semantic-ui-react";
import MainDashboardContainer from "../StyledComponents/MainDashBoardContainer";

const SoftwareEditButton = ({name='Overview', icon='tasks', buttonName="Edit Overview", buttonIcon="edit"})=>{
    return(
        <>
            <Gutter>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div className="twelve wide column">
                        {icon && <Icon name={icon} style={{fontSize: '1.2rem', marginRight: '0.8rem'}}/>}
                        <span style={{fontSize: '1.2rem'}}>{name}</span>
                    </div>
                    <div className="">
                        <Button size={'tiny'} basic color={"violet"}>
                            {buttonName}
                            <Icon name={buttonIcon} style={{marginLeft: '0.5rem'}}/>
                        </Button>
                    </div>
                </div>
            </Gutter>
        </>
    )
};

export default SoftwareEditButton