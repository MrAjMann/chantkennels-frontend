import React from "react";
import { useHistory, Link, BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/Logo.svg";
import { logOut } from "../../Services/authServices";

import {useGlobalState} from '../../utils/globalContext'

const NavContainer = styled.div`
  height: 10vh;
  margin: 10px 60px;
  opacity: 80%;
  display: flex;
  align-items: center;
`;
const SideNavContainer = styled.div`
  margin: 10px 60px;
  opacity: 80%;
  display: grid;
  width:100%;
  // border:1px solid red;
  grid-area: nav;
  align-items: center;
`;

const Logo = styled.div`
  position: relative;
`;
const LogoImage = styled.img`
  height: 8vh;
  width: 179px;
  cursor: pointer;
`;
const NavBar = styled.nav`
  width: 100%;
  margin: 0px 30px;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

const NavLinkItems = styled(Link)`
  text-decoration: none;
  position: relative;
  color: #fff;
  font-size: 24px;
  margin: 0rem 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  padding: 5px 5px;
  &:hover {
    transition: 1s;
    border-radius: 5px;
    background: #4c9e81;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.7);
  }
`;

const Navbar = () => {

  let history = useHistory()

  const {dispatch,store} = useGlobalState()
  const {loggedInUser,isAdmin}=store

  function handleLogout(event){
    event.preventDefault()
		logOut(loggedInUser)
		.then(() => {
      dispatch({type: 'setLoggedInUser', data: null})
      dispatch({//action object
        type: "setToken",
        data: null
    })
    localStorage.clear()
      history.push("/")})
                }
  return (
    <header>
      <NavContainer>
      <Logo  onClick={()=>{history.push("/")}}>
          <LogoImage src={logo} alt="Chant Kennels Logo" />
        </Logo>
        <Router>
          <NavBar>
            <NavLinks>
            {loggedInUser?
            <SideNavContainer>
              <NavContainer>

              <NavLinkItems onClick={() =>{isAdmin? history.push('/admin/dashboard'):history.push('/user/dashboard')}}>{loggedInUser}</NavLinkItems>
              <NavLinkItems onClick={handleLogout}>Log out</NavLinkItems>
              </NavContainer>
            </SideNavContainer>:
            <>
            <NavLinkItems onClick={() => history.push('/home')} >Home</NavLinkItems>
            <NavLinkItems onClick={() => history.push('/about')} >About</NavLinkItems>
            <NavLinkItems onClick={() => history.push('/signup')} >SignUp</NavLinkItems>
            <NavLinkItems onClick={() => history.push('/login')}>Login</NavLinkItems>

            </>
          }
            </NavLinks>
          </NavBar>
        </Router>
      </NavContainer>
    </header>
  );
};

export default Navbar;
