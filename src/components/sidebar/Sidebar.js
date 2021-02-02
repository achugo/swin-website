import React, { useState } from "react";
// import Logo from "../../img-assets/swin-logo.png";
import { ReactComponent as SoftwareIcon } from "../../img-assets/softwares.svg";
import { ReactComponent as SoftwareIconActive } from "../../img-assets/software-icon-active.svg";
import { ReactComponent as SwinLogo } from "../../img-assets/logo-swin.svg";
import { ReactComponent as Mysoftwares } from "../../img-assets/mysoftwares.svg";
import { ReactComponent as AnalyzeIcon } from "../../img-assets/analyze-icon.svg";
import { ReactComponent as AnalyzeIconInactive } from "../../img-assets/analyze-icon-active.svg";
import { ReactComponent as Aboutus } from "../../img-assets/about-us.svg";
import { ReactComponent as SoftwareIconInactive } from "../../img-assets/software-icon-inactive.svg";
import { ReactComponent as Notification } from "../../img-assets/notification.svg";
import { Route, Switch, withRouter } from "react-router-dom";
import Main from "../main/Main";
import Software from "../softwares/Software";
import SoftwareBlog from "../../pages/software-blog";
import SoftwareDetails2 from "../../pages/software-details-2";
import SoftwareDetails1 from "../../pages/software-details-1";
import Analyze from "../../pages/Analyze/Analyze";
import AddAnalysis from "../../pages/Analyze/AddAnalysis";
import AllAnalysis from "../../pages/Analyze/AllAnalysis";
import EvaluationSummary from "../../pages/Analyze/EvaluationSummary";
import Notifications from "../../pages/notifications/Notifications";
import SoftwareDetails3 from "../../pages/software-details-3";
import AddSoftware from "../../pages/add-software";
import SoftwareArticleLink from "../../pages/software-article-link";
import EditUserProfile from "../../pages/EditUserProfile";
import EditSoftware2 from "../../pages/edit-software-2";
import CompanyPage from "../../pages/company";
import Mysoftware from "../../pages/my-software/Mysoftware";
import CompanyUsers from "../../pages/company-users/Companyusers";

const Sidebar = (props) => {
  const [active_link, setActiveLink] = useState(0);

  const navigate = (route, index) => {
    props.history.push(`/dashboard/${route}`);
    setActiveLink(index);
  };

  const sidebar_links = [
    { name: "Software", url: "" },
    { name: "My software", url: "mysoftware" },
    { name: "Analyze", url: "analyze" },
    { name: "Nofitication", url: "notifications" },
    { name: "Swin", url: "swin" },
  ];

  return (
    <>
      <div id="sidebar">
        <div className="sidebar__title">
          <div className="sidebar__img">
            {/* <img src={Logo} alt="logo" /> */}
            <SwinLogo onClick={() => props.history.push("/")} />
          </div>
          <i
            // onclick="closeSidebar()"
            className="fa fa-times"
            id="sidebarIcon"
            aria-hidden="true"
          />
        </div>

        <div className="sidebar__menu">
          {sidebar_links.map((item, index) => {
            return (
              <>
                <div
                  onClick={() => navigate(item.url, index)}
                  className={`sidebar__link ${
                    index === active_link && "active_menu_link"
                  }`}
                >
                  {index === 0 && (
                    <>
                      {index === 0 && index === active_link ? (
                        <SoftwareIcon />
                      ) : (
                        <SoftwareIconInactive />
                      )}
                    </>
                  )}

                  {index === 1 && (
                    <>
                      {index === 1 && index === active_link ? (
                        <SoftwareIconActive />
                      ) : (
                        <Mysoftwares />
                      )}
                    </>
                  )}

                  {index === 2 && (
                    <>
                      {index === 2 && index === active_link ? (
                        <AnalyzeIconInactive />
                      ) : (
                        <AnalyzeIcon />
                      )}
                    </>
                  )}

                  {index === 3 && <>{index === 3 && <Notification />}</>}

                  {index === 4 && <>{index === 4 && <Aboutus />}</>}

                  <span>{item.name}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Switch>
        <Route exact path="/dashboard" component={Software} />
        <Route path="/dashboard/product/:id" component={SoftwareDetails1} />
        <Route path="/dashboard/software/blog" component={SoftwareBlog} />
        <Route
          path="/dashboard/software/details-2"
          component={SoftwareDetails2}
        />
        <Route path="/dashboard/analyze" component={Analyze} />
        <Route path="/dashboard/analyze-product" component={AddAnalysis} />
        <Route path="/dashboard/all-analysis" component={AllAnalysis} />
        <Route path="/dashboard/notifications" component={Notifications} />
        <Route
          path="/dashboard/evaluation-summary"
          component={EvaluationSummary}
        />
        <Route
          path="/dashboard/software/details-3"
          component={SoftwareDetails3}
        />
        <Route path="/dashboard/mysoftware/add" component={AddSoftware} />
        <Route
          path="/dashboard/software/article/link"
          component={SoftwareArticleLink}
        />
        <Route path="/dashboard/company" component={CompanyPage} />
        <Route path="/dashboard/users" component={CompanyUsers} />
        <Route path="/dashboard/mysoftware" component={Mysoftware} />
        <Route path="/dashboard/user" component={EditUserProfile} />
        <Route path="/dashboard/software/edit-2" component={EditSoftware2} />
      </Switch>
    </>
  );
};

export default withRouter(Sidebar);
