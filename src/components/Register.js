import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { validEmail, validPassword } from "../utils/validators";
import { useGlobalState } from "../utils/globalContext";
import { ErrorMessage } from "../globalStyles";
import {
  Form,
  InnerFormWrapper,
  Label,
  Input,
  FormTitle,
} from "./formElements/formStyle";
import { Button, EmptyButtonWrapper } from "./button/buttonStyle";
// import {
//   Container,
//   OuterFormContainer,
// } from "./layout/layoutStyles";

export default function Register({ name, callback }) {
  let history = useHistory();
  const { dispatch, store, landingEmail } = useGlobalState();
  const { loggedInUser } = store;
  const initialFormState = {
    name: "",
    email: landingEmail,
    password: "",
    passwordConfirmation: "",
  };

  const [formState, setFormState] = useState(initialFormState);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setnameError] = useState("");
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState("");
    const [serverError, setServerError] = useState("");
  function handleChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let emailError = "";
    let passwordError = "";
    let nameError = "";
    let passwordConfirmationError = "";
    if (!validEmail(formState.email)) {
      emailError = "Please enter a valid email address";
    }

    if (!validPassword(formState.password)) {
      passwordError = "Please enter a strong password";
    }
    if (formState.password !== formState.passwordConfirmation) {
      passwordConfirmationError = "Passwords must match";
    }
    if (!formState.name) {
      nameError = "Please, enter a name";
    }
    setPasswordError(passwordError);
    setEmailError(emailError);
    setnameError(nameError);
    setPasswordConfirmationError(passwordConfirmationError);

    if (
      !nameError &&
      !emailError &&
      !passwordError &&
      !passwordConfirmationError
    ) {
      callback(formState)
        .then((user) => {
          if (user.error) {
            setServerError(user.error);
          } else {
            // console.log(user.username, user.jwt,user.isAdmin);
            localStorage.setItem("username", user.username);
            localStorage.setItem("token", user.jwt);
            localStorage.setItem("isAdmin", user.isAdmin);
            dispatch({ type: "setLoggedInUser", data: user.username });
            // dispatch({type: 'setLoggedInUser', data: username?username:companyname})
            dispatch({ type: "setRole", data: user.isAdmin });
            dispatch({ type: "setToken", data: user.jwt });
            // console.log("user after sign up",user)
            return user.isAdmin === "true"
              ? history.push("/admin/dashboard")
              : history.push("/user/dashboard");
          }
        })
        .catch((error) => {
          setServerError(error.message);
        });
    }
  }

  return (
    <SectionContainerExt>

      {serverError && <p style={{ color: "red" }}>{serverError}</p>}
      <RegisterContainer>
          {loggedInUser ? <p>logged in user is {loggedInUser}</p> : <></>}
        <RegisterWrapper>
          <FormTitle>Sign Up</FormTitle>
          <Form>
            <InnerFormWrapper>
              <Label>Name</Label>
              <Input
                placeholder="Name"
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
              />
              <ErrorMessage style={{ color: "red" }}>{nameError}</ErrorMessage>
            </InnerFormWrapper>
            <InnerFormWrapper>
              <Label>Email</Label>
              <Input
                placeholder="Email"
                type="text"
                name="email"
                value={formState.email}
                onChange={handleChange}
              />
              <ErrorMessage style={{ color: "red" }}>{emailError}</ErrorMessage>
            </InnerFormWrapper>
            <InnerFormWrapper>
              <Label>Password</Label>
              <Input
                placeholder="Password"
                type="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
              />
              <ErrorMessage style={{ color: "red" }}>
                {passwordError}
              </ErrorMessage>
            </InnerFormWrapper>
            <InnerFormWrapper>
              <Label>Confirm Password</Label>
              <Input
                placeholder="Confirm Password"
                type="password"
                name="passwordConfirmation"
                value={formState.passwordConfirmation}
                onChange={handleChange}
              />
            <ErrorMessage style={{ color: "red" }}>
            {passwordConfirmationError}
          </ErrorMessage>
            </InnerFormWrapper>
            <EmptyButtonWrapper>
              <Button onClick={handleSubmit} >Register</Button>
            </EmptyButtonWrapper>
          </Form>
        </RegisterWrapper>
      </RegisterContainer>
    </SectionContainerExt>
  );
};



const SectionContainerExt = styled.div`
  height: 80vh;
`;



const RegisterContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(142 90 170);
  /* background: radial-gradient(circle, rgba(157,40,185,1) 0%, rgba(142,91,170,1) 42%, rgba(105,60,98,1) 100%); */

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;


const RegisterWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;