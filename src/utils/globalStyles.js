import styled, { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`
*{
    padding: 0;
    box-sizing:border-box;
    font-family:  "Montserrat", sans-serif;
    color: #fff;
  }
  body{
    background: ${(props) => props.theme.MainBG};
    margin:0  2rem;
    
  }
  `;
  
  // This contain is user when a user is logged it as it defines the boundaries of the sidebar and display area
  export const Container = styled.div`
  display:grid;
  // margin:0 15rem;
  width: 90vw;
  
`;


export const SectionContainer = styled.div`
max-height:100%;
height:90vh;
width:100%;
`;

export const theme = {
    MainBG: '#814C9E',
    PrimaryTxt: '#FFFFFF',
    DarkTxt: '#000000',
    LightTxt: '#C1C1C1',
    AccentBG: '#4C9E81'
}