import styled from "styled-components";
import {theme} from '../../globalStyles'

export const EmptyButtonWrapper = styled.div`

`;

export const Button = styled.button`
width: 300px;
height: 50px;
border: none;
border-radius: 5px;
font-size: 24px;
font-weight: 400;
margin:2rem 0rem;
color: #fff;
background: ${theme.AccentBG};
cursor: pointer;
transition: 0.3s all ease-in-out;

&:hover {
 transition: 0.3s all ease-in-out;
  font-weight: bold;
  box-shadow: 3px 3px 5px #333;
}

@media only screen and (max-width: 768px) {
  text-align: center;
  width: 100%;
}
`;