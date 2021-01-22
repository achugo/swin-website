import React from "react";
// import Logo from "../../img-assets/swin-logo.png";
import {ReactComponent as SoftwareIcon} from "../../img-assets/softwares.svg";
import {ReactComponent as SwinLogo} from "../../img-assets/logo-swin.svg";
import {ReactComponent as Mysoftwares} from "../../img-assets/mysoftwares.svg";
import {ReactComponent as Activity} from "../../img-assets/history-clock-button.svg";
import {ReactComponent as Aboutus} from "../../img-assets/about-us.svg";
import {ReactComponent as Notification} from "../../img-assets/notification.svg";
import {Route, Switch} from "react-router-dom";
import Main from "../main/Main";
import Software from "../softwares/Software";
import SoftwareBlog from '../../pages/screen25-blog';
import Screen8 from '../../pages/screen-8';
import SoftwareDetails from '../../pages/screen5-software-details'
import Analyze from "../../pages/Analyze/Analyze";
import AddAnalysis from "../../pages/Analyze/AddAnalysis";
import AllAnalysis from "../../pages/Analyze/AllAnalysis";
import EvaluationSummary from "../../pages/Analyze/EvaluationSummary";
import Notifications from "../../pages/notifications/Notifications";
import Singleproduct from "../singleproduct/Singleproduct";

const Sidebar = () => {
    return (
        <>
            <div id="sidebar">
                <div className="sidebar__title">
                    <div className="sidebar__img">
                        {/* <img src={Logo} alt="logo" /> */}
                        <SwinLogo/>
                    </div>
                    <i
                        // onclick="closeSidebar()"
                        className="fa fa-times"
                        id="sidebarIcon"
                        aria-hidden="true"
                    />
                </div>


                <div className="sidebar__menu">
                    <div className="sidebar__link active_menu_link">
                        <SoftwareIcon/>
                        <span>Software</span>
                    </div>
                    <div className="sidebar__link">
                        <Mysoftwares/>
                        <span>My softwares</span>
                    </div>


                    <div className="sidebar__link ">
                        <Notification/>
                        <span>Notification</span>
                    </div>

                    <div className="sidebar__link">
                        <Activity/>
                        <span>Activity</span>
                    </div>

                    <div className="sidebar__link">
                        <Aboutus/>
                        <span>About us</span>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path="/dashboard" component={Software}/>
                <Route path="/dashboard/software" component={SoftwareDetails}/>
                <Route path="/dashboard/blog" component={SoftwareBlog}/>
                <Route path="/dashboard/8" component={Screen8}/>
                <Route path="/dashboard/analyze" component={Analyze}/>
                <Route path="/dashboard/add-analysis" component={AddAnalysis}/>
                <Route path="/dashboard/all-analysis" component={AllAnalysis}/>
                <Route path="/dashboard/notifications" component={Notifications}/>
                <Route
                    path="/dashboard/evaluation-summary"
                    component={EvaluationSummary}
                />
            </Switch>
        </>
    );
};

export default Sidebar;
