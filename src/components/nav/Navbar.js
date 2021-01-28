import React, { useState, useContext, useEffect } from "react";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import "./Nav.scss";
import { ReactComponent as Logo } from "../../img-assets/logo-swin.svg";
import { ReactComponent as SignInIcon } from "../../img-assets/nav-signin-icon.svg";
import { ReactComponent as SignUpIcon } from "../../img-assets/nav-signup-icon.svg";
import { withRouter, Link, useRouteMatch } from "react-router-dom";

// import { userContext } from "../../store/UserContext";
// import { appUrl } from "../../services/urls";

const Navigation = (props) => {
  //   const context = useContext(userContext);
  //   const fullname = `${context.user.firstName} ${context.user.surName}`;

  const [open, setopen] = useState(false);
  const [show_nav, setshow_nav] = useState(false);

  const match = useRouteMatch();
  console.log(match);

  const logout = () => {
    // context.logout();
    setTimeout(() => {
      props.history.push("/login");
    }, 200);
  };

  const toSubscription = () => {
    props.history.push("/dashboard/subscribe");
  };

  const toHome = () => {
    props.history.push("/");
  };

  const toAuth = (n) => {
    n === 1 ? props.history.push("/login") : props.history.push("/signup");
  };

  const toProfile = () => {
    props.history.push("/edit-profile");
  };

  const goTo = (to) => {
    props.history.push(to);
    if (to === "logout") logout();
    setshow_nav(false);
  };

  let listener = null;
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    if (match.url != "/") {
      setScrollState("white");
    }
  }, []);

  useEffect(() => {
    if (match.path === "/softwares") {
      listener = document.addEventListener("scroll", (e) => {
        var scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 100) {
          if (scrollState !== "white") {
            setScrollState("white");
            console.log("scrolled!!");
          }
        } else {
          if (scrollState !== "top") {
            setScrollState("top");
          }
        }
      });
      return () => {
        document.removeEventListener("scroll", listener);
      };
    }
  }, [scrollState]);

  return (
    <>
      <div className={`nav ${scrollState}`}>
        <div className="nav__content">
          <span className="logo">
            <Logo />
          </span>
          <div className="user f-left">
            {/* <span>
              <Link to="/buy" className="active___">
                About
              </Link>
            </span>
            <span>
              {" "}
              <Link to="/rent">Blog</Link>
            </span>
            <span>
              {" "}
              <Link to="/rent">FAQs</Link>
            </span> */}
            {/* <span>
              <div className="dropdown-wrap">
                <div>Services</div>
                <div className="dropdown_">
                  <ul>
                    <li className="bb">
                      {" "}
                      <Link to="/property-management">Property Management</Link>
                    </li>
                    <li>
                      <Link to="/design-and-development">
                        Design and development
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/mortgage-calculator">Mortgage</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </span> */}
          </div>
          <div className="user f-right">
            <span className="pad__right0">
              <button onClick={() => goTo("/login")} className="sign-in">
                <span>Sign In</span>
                <SignInIcon />
              </button>
            </span>

            <span className="pad__right0">
              <button onClick={() => goTo("/register")} className="sign-up">
                <span>Sign UP</span>
                <SignUpIcon />
              </button>
            </span>
          </div>
          <span className="user f-right">
            {/* <div className="dropdown-wrap">
          <div
            className="avatar"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img src="icon.png" height="30" alt="" />
          </div>
          
          <img
            src="caret.png"
            style={{
              width: 10,
              marginLeft: 12,
              transform: open ? `rotate(180deg)` : "",
            }}
            alt=""
          />
          <div className="dropdown">
            <ul>
              <li className="bb" onClick={toProfile}>
                Edit profile{" "}
                <img src="image.png" className="f-right m15" alt="" />{" "}
              </li>
              <li onClick={logout}>
                Logout <img src="item.png" className="f-right m15" alt="" />{" "}
              </li>
            </ul>
          </div>
        </div> */}
          </span>

          {/* {context.isLoggedIn && (
        <span className="inp">
          <img src={search} alt="" />
          <input type="text" placeholder="What do you want learn?" />
        </span>
      )} */}
          <div
            id="nav-icon1"
            onClick={() => setshow_nav(!show_nav)}
            className={show_nav ? "open" : ""}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`mobilenav ${show_nav ? "open" : ""}`}>
            {/* <input type="text" placeholder="What do you want learn?" /> */}
            {/* <p onClick={() => goTo("edit")}>
          <img src={edit} className="logo" alt="" />
          Edit Profile
        </p> */}
            <p onClick={() => goTo("/")}>About</p>
            <p onClick={() => goTo("/buy")}>Blog</p>
            <p onClick={() => goTo("/rent")}>FAQ</p>
            <p onClick={() => goTo("/login")}>LOGIN</p>
            <p onClick={() => goTo("/request")}>SIGN UP</p>

            {/* <div className="bottom__mobile__nav">
              <button className="login__">Login</button>
              <button className="sign__up">Sign Up</button>
              <div className="media__icons">
                <a href="https://instagram.com" target="_blank">
                  <img src="images/instagram.svg" alt="instagram" />
                </a>
                <a href="https://instagram.com" target="_blank">
                  <img src="images/instagram.svg" alt="instagram" />
                </a>
                <a href="https://instagram.com" target="_blank">
                  <img src="images/instagram.svg" alt="instagram" />
                </a>
              </div>
            </div> */}
            {/* {context.isLoggedIn && (
          <p onClick={() => goTo("logout")}>
            {/* <img src={logoutIcon} className="logo" alt="" /> *s
            Logout
          </p>
        )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Navigation);
