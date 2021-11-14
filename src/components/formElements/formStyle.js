import styled from "styled-components";
import {theme} from '../../globalStyles'


export const Form = styled.form`
display:flex;
flex-direction:column;
// justify-content:center;
align-items:center;
`;

export const InnerFormWrapper = styled.div`
display:flex;
margin:0.35rem 0rem;
flex-direction:column;
justify-content:center;
`;

export const FormTitle = styled.h3`
text-align:center;
font-family: 'Slabo 13px', serif;
font-size: 36px;
color: ${theme.DarkTxt};
`;

export const Label = styled.label`
padding-left:0.5rem;
font-size:18px;
color: ${theme.DarkTxt};
font-weight:500;
margin:0.25rem 0;
`;

export const Input = styled.input`
margin:0.25rem 0;
width: 350px;
height:40px;
font-size:18px;
color: ${theme.DarkTxt};
border:none;
padding-left: 10px;
border-radius:5px;
// width:100%;
`;