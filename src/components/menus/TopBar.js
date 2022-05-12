import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

const TopBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #8e5aaa;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  /* top:0; */
`;

const ClosedIcon = styled(FaTimes)`
  color: #fff;
  font-size: 1.5rem;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  cursor: pointer;
  outline: none;
`;

const TopBarWrapper = styled.div`
  color: #fff;
`;

const TopBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
const TopBarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  color: #fff;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

const TopBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const TopBarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: 010606;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

const TopBar = ({ isOpen, toggle }) => {
  return (
    <TopBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <ClosedIcon />
      </Icon>
      <TopBarWrapper>
        <TopBarMenu>
          <TopBarLink to="about" onClick={toggle}>
            About
          </TopBarLink>
          <TopBarLink to="services" onClick={toggle}>
            Services
          </TopBarLink>
          <TopBarLink to="signup" onClick={toggle}>
            SignUp
          </TopBarLink>
        </TopBarMenu>
        <TopBtnWrap>
          <TopBarRoute to="/login">Login</TopBarRoute>
        </TopBtnWrap>
      </TopBarWrapper>
    </TopBarContainer>
  );
};

export default TopBar;
