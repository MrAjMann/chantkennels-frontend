import React from 'react'
import styled from 'styled-components'
import { theme, SectionContainer } from '../utils/globalStyles'



const LoginPage = () => {

    return (
        <SectionContainer>
            <Title>Welcome to Chant Kennels</Title>
            <Container>
                <LoginFormContainer>
                    <FormTitle>Log In</FormTitle>
                    <Form>
                        <InnerFormWrapper>
                        <Label>Email:</Label>
                        <Input placeholder='Email'></Input>
                        </InnerFormWrapper>
                        <InnerFormWrapper>
                        <Label>Password:</Label>
                        <Input placeholder='Password'></Input>
                        </InnerFormWrapper>
                        <ButtonWrapper>
                            <Button>Login</Button>
                        </ButtonWrapper>
                    </Form>
                </LoginFormContainer>
            </Container>
        </SectionContainer>
    )
}

export default LoginPage

const Title = styled.h1`
text-align:center;
margin:5rem 0;
margin-bottom: 0.5rem;
font-family: 'Slabo 13px', serif;
color: ${theme.PrimaryTxt};
font-weight:400;
letter-spacing:6px;
font-size: 36px;
`;

const Container = styled.div`
max-height:100%;
display: flex;
justify-content:center;
`;

const LoginFormContainer = styled.div`
margin:5rem 0;
width:550px;
height:450px;
background:#E3C2F4;
`;

const FormTitle = styled.h3`
text-align:center;
font-family: 'Slabo 13px', serif;
font-size: 36px;
color: ${theme.DarkTxt};
`;

const Form = styled.form`
display:flex;
flex-direction:column;
// justify-content:center;
align-items:center;
`;

const InnerFormWrapper = styled.div`
display:flex;
margin:0.35rem 0rem;
flex-direction:column;
justify-content:center;
`;
const Label = styled.label`
padding-left:0.5rem;
font-size:18px;
color: ${theme.DarkTxt};
font-weight:500;
margin:0.25rem 0;
`;

const Input = styled.input`
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

const ButtonWrapper = styled.div``;

const Button = styled.button`
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


