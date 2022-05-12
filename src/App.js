import React, { useReducer, useState } from "react";
import { StateContext } from "./utils/globalContext";
import stateReducer from "./utils/stateReducer";
import { ThemeProvider } from "styled-components";
import { theme, Styles } from "./globalStyles";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/menus/NavBar";
import Login from "./pages/LoginPage";
import SignUp from "./pages/RegistrationPage";
import Dashboard from "./components/dashboard/DashBoard";
import TopBar from "./components/menus/TopBar";

function App() {
  const initialState = {
    loggedInUser: localStorage.getItem("username") || null,
    isAdmin: localStorage.getItem("isAdmin"),
    auth: { token: localStorage.getItem("token") || null },
  };

  const [store, dispatch] = useReducer(stateReducer, initialState);
  const { loggedInUser, isAdmin } = store;
  const [selectedPage, setSelectedPage] = useState(1); //selected nav bar page
  const [landingEmail, setLandingEmail] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Styles />
      <StateContext.Provider
        value={{
          store,
          dispatch,
          selectedPage,
          setSelectedPage,
          landingEmail,
          setLandingEmail,
        }}
      >
        <BrowserRouter>
          <TopBar isOpen={isOpen} toggle={toggle} />
          <NavBar toggle={toggle} />
          <Switch>
            <Route exact path="/">
              {loggedInUser ? (
                isAdmin === "true" ? (
                  <Redirect to="/admin/dashboard" />
                ) : (
                  <Redirect to="/user/dashboard" />
                )
              ) : (
                <Redirect to="/home" />
              )}
            </Route>
            {loggedInUser ? (
              <>
                <Dashboard />
              </>
            ) : (
              <>
                <Route exact path="/home" component={LandingPage} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/login" component={Login} />
              </>
            )}
          </Switch>
        </BrowserRouter>
      </StateContext.Provider>
    </ThemeProvider>
  );
}

export default App;
