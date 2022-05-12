import React from "react";
import { useHistory, Link as LinkRouter } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import logo from "../../assets/Logo.svg";
import { logOut } from "../../Services/authServices";

import { useGlobalState } from "../../utils/globalContext";

const Nav = styled.div`
  /* background: #fefcfa; */
  background: rgb(142 90 170);
  /* border-radius: 0px 0px 15px 15px; */
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  position: sticky;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1600px;
`;

const NavLogo = styled(LinkRouter)`
/* object-fit: cover; */
  /* color: #fff; */
  /* background:#000; */
  
  display:flex:
  align-items:center
  justify-content: center;
  cursor: pointer
  margin-left: 1rem;
  height: 100%;
  `;
const LogoImage = styled.img`
  justify-content: center;
  margin: auto;
  padding: 10px;
  justify-self: center;
  height: 100%;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none:
  text-align:center;
  /* height: 80px; */
  
  margin-right:22px;
  justify-content: flex-end;


  @media screen and (max-width:768px){
    display:none;
  }
`;
const NavItem = styled.li`
  height: 40px;
  text-decoration: none;
  list-style: none;
`;

const NavLinks = styled(LinkS)`
  color: #fff;
  /* padding: 20px 0; */
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 24px;
  margin: 0rem 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;

  padding: 0 1rem;
  cursor: pointer;

  &:active {
    border-bottom: 3px solid #01bf71;
  }

  &:hover {
    transition: 1s;
    border-radius: 5px;
    background: #4c9e81;

    /* box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.7); */
  }
`;

const Navbar = ({ toggle }) => {
  let history = useHistory();

  const { dispatch, store } = useGlobalState();
  const { loggedInUser, isAdmin } = store;

  function handleLogout(event) {
    event.preventDefault();
    logOut(loggedInUser).then(() => {
      dispatch({ type: "setLoggedInUser", data: null });
      dispatch({
        //action object
        type: "setToken",
        data: null,
      });
      localStorage.clear();
      history.push("/");
    });
  }
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo
            onClick={() => {
              history.push("/");
            }}
          >
            <LogoImage src={logo} alt="Chant Kennels Logo" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          {/* <Router> */}

          <NavMenu>
            {loggedInUser ? (
              <>
                <NavItem>
                  <NavLinks
                    onClick={() => {
                      isAdmin
                        ? history.push("/admin/dashboard")
                        : history.push("/user/dashboard");
                    }}
                  >
                    {loggedInUser}
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks onClick={handleLogout}>Log out</NavLinks>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLinks onClick={() => history.push("/")}>Home</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="about">About</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="services">Services</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="signup">SignUp</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks onClick={() => history.push("/login")}>
                    Login
                  </NavLinks>
                </NavItem>
              </>
            )}
          </NavMenu>

          {/* </Router> */}
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
