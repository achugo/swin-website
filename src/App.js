import React from "react";
import "./scss/style.css";
import "./App.css";
import Layout from "./components/layout/Layout";

import { BrowserRouter, Route, Router } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import history from "./history";
import Login from "./pages/auth/login/Login";
import LandingPage from "./pages/landing-page/LandingPage";
import Register from "./pages/auth/register/register";

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" component={LandingPage} />
      <Route path="/dashboard" component={Layout} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />

      {/* <Route
          path="/login"
          render={() => (secureStorage.getItem("token") ? <Home /> : <Login />)}
        />

        <Route
          path="/register"
          render={() =>
            secureStorage.getItem("token") ? <Home /> : <Register />
          }
        /> */}
    </Router>
  );
}

export default App;
