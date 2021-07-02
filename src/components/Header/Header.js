import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/Logo.svg";

const NavContainer = styled.div`
  height: 10vh;
  margin: 0px 60px;
  opacity: 80%;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  postition: relative;
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
  color: #fff;
  font-size: 24px;
  margin: 0rem 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
`;

const Header = () => {
  return (
    <header>
      <NavContainer>
        <Logo>
          <LogoImage src={logo} alt="Chant Kennels Logo" />
        </Logo>
        <Router>
          <NavBar>
            <NavLinks>
              <NavLinkItems>About</NavLinkItems>
              <NavLinkItems>Services</NavLinkItems>
              <NavLinkItems>SignUp</NavLinkItems>
              <NavLinkItems>Login</NavLinkItems>
            </NavLinks>
          </NavBar>
        </Router>
      </NavContainer>
    </header>
  );
};

export default Header;
