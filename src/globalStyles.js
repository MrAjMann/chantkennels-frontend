import styled, { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`
*{
    padding: 0;
    box-sizing:border-box;
    /* font-family:  "Montserrat", sans-serif; */
    /* color: #fff; */
    
  }
  body{
    /* max-width: 1900px; */
    /* width:100%; */
    /* margin: auto; */
    /* overflow-x: hidden; */
    // background: rgba(129, 76, 158, 0.8);
    
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    /* margin:0  2rem; */
    
  }
  `;

// This contain is user when a user is logged it as it defines the boundaries of the sidebar and display area
//   export const Container = styled.div`
//   max-width: 1090px;
//   width:100%;
//   margin: auto;
//   @media only screen and (max-width: 768px) {
//     width:100vw;
//     display:flex;
//     flex-direction:column;
//     align-items: center;
//    }
// `;
export const LoggedInContainer = styled.div`
  display: grid;
  grid-template-rows: 80vh;
  align-items: center;
  justify-items: center;
  grid-template-columns: fr 1fr;
  grid-template-areas:
    "SideBar dashboard"
    "SideBar dashboard";
`;

export const ErrorMessage = styled.div`
  color: red;
  @media only screen and (max-width: 800px) {
    font-size: 12px;
  }
`;

export const theme = {
  MainBG: "#814C9E",
  PrimaryTxt: "#FFFFFF",
  DarkTxt: "#000000",
  LightTxt: "#C1C1C1",
  AccentBG: "#4C9E81",
};

// export const Title = styled.h1`
// text-align:center;
// /* margin:5rem 0; */
// margin-bottom: 0.5rem;
// font-family: 'Slabo 13px', serif;
// color: ${theme.PrimaryTxt};
// font-weight:400;
// letter-spacing:6px;
// font-size: 36px;
// `;
