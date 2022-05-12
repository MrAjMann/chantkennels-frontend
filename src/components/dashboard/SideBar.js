import React, { useState } from "react";
import { useGlobalState } from "../../utils/globalContext";

import styled from "styled-components";
import {  LoggedInContainer } from "../../globalStyles";
import { Link } from "react-router-dom";




const SideBarContainer = styled.div`
grid-area:SideBar;
// border:1px solid red;
z-index: -1;
background: #B05CDF;
// height: 60vh;
`;
const ContentWrapper = styled.div`
// width:100%;
// grid-area:SideBar;
z-index:10;
`;
const LogoWrapper = styled.div`
text-align:center;
  // margin-left: 2rem;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Heading = styled.h4`
  font-size: 22px;
  @media only screen and (max-width: 1200px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Logo = styled.img`
  object-fit: cover;
  margin-left: 1rem;
  border-radius: 50%;
  width: 87px;
  height: 87px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const ButtonWrapper = styled.div`
  width: 250px;
  z-index: 3;
  margin-left: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-top: 3rem;
  @media only screen and (max-width: 1400px) {
    width: 230px;
  }
  @media only screen and (max-width: 1200px) {
    width: 200px;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const SideBarButton = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  // width: 220px;
  height: 100px;
  text-align: center;
  font-weight: bold;
  // box-shadow: 4px 3px 4px rgba(0, 0, 0, 0.25);
  font-size: 24px;
  margin: 1rem;

  @media only screen and (max-width: 1400px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const SideBar = () => {
  const {  store } = useGlobalState();
  const { loggedInUser, isAdmin } = store;
  // console.log("side bar isAdmin",isAdmin)
  //  activebutton is used to controll what button is active, the reason for all lowercase is due to a warning when using uppercase letters on DOM elements
  const [activebutton, setActiveButton] = useState(1);
  const handleClick = (e) => {
    setActiveButton(e.target.id);
  };
  return (
    <>
    {loggedInUser ? (
        (isAdmin==="true") ? (
        // Admin
          
      <LoggedInContainer>

<SideBarContainer>

      <ContentWrapper className="ContentWrapper">
        <LogoWrapper>
          <Logo  />
          <Heading>{loggedInUser}</Heading>
        </LogoWrapper>
        <ButtonWrapper className="ButtonWrapper">
          <SideBarButton
            activebutton={activebutton}
            id={1}
            onClick={handleClick}
            to="/admin/dashboard"
            >
            Profile
          </SideBarButton>
          <SideBarButton
            to="/admin/pets"
            activebutton={activebutton}
            id={2}
            onClick={handleClick}
            >
            Pets
          </SideBarButton>
          <SideBarButton
            activebutton={activebutton}
            id={3}
            onClick={handleClick}
            to="/admin/bookings"
            >
            Bookings
          </SideBarButton>
        </ButtonWrapper>
      </ContentWrapper>
      </SideBarContainer>
   </LoggedInContainer>
      
        ) : (
             //  User
    <LoggedInContainer>
      <SideBarContainer>
      <SideBarContainer className="SideBarContainer"></SideBarContainer>
      <ContentWrapper className="ContentWrapper">
        <LogoWrapper>
          {/* <Logo src={profilePhoto} /> */}
          <Heading>{loggedInUser}</Heading>
        </LogoWrapper>
        <ButtonWrapper className="ButtonWrapper">
          <SideBarButton
            activebutton={activebutton}
            id={1}
            onClick={handleClick}
            to="/user/dashboard"
            >
            Profile
          </SideBarButton>
          <SideBarButton
            to="/user/pets"
            activebutton={activebutton}
            id={2}
            onClick={handleClick}
            >
            Pets
          </SideBarButton>
          <SideBarButton
            activebutton={activebutton}
            id={3}
            onClick={handleClick}
            to="/user/bookings"
            >
            Bookings
          </SideBarButton>
        </ButtonWrapper>
      </ContentWrapper>
      </SideBarContainer>
      </LoggedInContainer>
             
           )
        ) : (
           
           //  Not Logged In
           <></>
           )}
           
  </>
  );
};
export default SideBar;
