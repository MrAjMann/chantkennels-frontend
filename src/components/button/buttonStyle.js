import styled from "styled-components";
import {theme} from '../../globalStyles'

export const EmptyButtonWrapper = styled.div``;

export const Button = styled.button`
width: 350px;
height: 50px;
border: none;
border-radius: 5px;
font-size: 24px;
font-weight: 400;
margin:2rem 0rem;
color: #fff;
background: ${theme.AccentBG};
cursor: pointer;

&:hover {
  font-weight: bold;
  box-shadow: 3px 3px 5px #333;
}

@media only screen and (max-width: 800px) {
  width: 8rem;
  font-size: 14px;
}
@media only screen and (max-width: 768px) {
  text-align: center;
  font-size: 14px;
  max-width: 80%;
  width: 100%;
}
`;