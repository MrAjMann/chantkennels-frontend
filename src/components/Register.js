import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { validEmail, validPassword } from "../utils/validators";
import { useGlobalState } from "../utils/globalContext";
import { SectionContainer, Title, ErrorMessage } from "../globalStyles";
import {
  Form,
  InnerFormWrapper,
  Label,
  Input,
  FormTitle,
} from "./formElements/formStyle";
import { Button, EmptyButtonWrapper } from "./button/buttonStyle";
import {
  Container,
  OuterFormContainer,
} from "./layout/layoutStyles";

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
      <Title>Welcome to Chant Kennels</Title>
      {serverError && <p style={{ color: "red" }}>{serverError}</p>}
      <Container>
          {loggedInUser ? <p>logged in user is {loggedInUser}</p> : <></>}
        <OuterFormContainer>
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
        </OuterFormContainer>
      </Container>
    </SectionContainerExt>
  );
};



const SectionContainerExt = styled(SectionContainer)`
  height: 80vh;
`;
