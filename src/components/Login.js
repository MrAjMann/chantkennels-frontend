import React, {useState} from 'react'
import styled from 'styled-components';
import { validEmail, validPassword } from "../utils/validators";
import { useGlobalState } from "../utils/globalContext";
import {useHistory} from 'react-router-dom'
// import {  SectionContainer, Title } from '../globalStyles'
import { Form, InnerFormWrapper, Label,Input, FormTitle } from './formElements/formStyle'
import { EmptyButtonWrapper,Button } from './button/buttonStyle'
// import { Container, OuterFormContainer } from './layout/layoutStyles'



export default function LogIn({callback}){
    let history = useHistory()

    const initialFormState = {
		email: '',
		password: ''
	}
	const [formState, setFormState] = useState(initialFormState)
    const [emailError,setEmailError]=useState("")
    const [passwordError,setPasswordError]=useState("")
    const [serverError, setServerError] = useState("")

    const {dispatch,store} = useGlobalState()
    const {loggedInUser}=store
    function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
	}
    function handleSubmit(event) {

		event.preventDefault()
        let emailError=""
        let passwordError=""
       if (!validEmail(formState.email)){
        emailError="Please, enter a valid email address"
       }
       if(!validPassword(formState.password)){
        passwordError="Please, enter a valid password"
       } 
        setEmailError(emailError)
        setPasswordError(passwordError)
    
        if(!emailError&&!passwordError){
            callback(formState)
            .then((user) => {
              // console.log("logIn component user",user)
              localStorage.setItem("username", user.username)
              localStorage.setItem("token", user.jwt)
              localStorage.setItem("isAdmin", user.isAdmin)
              dispatch({type: 'setLoggedInUser', data: user.username})
              dispatch({type:'setRole',data: user.isAdmin})
              dispatch({type: 'setToken', data: user.jwt})
              return user.isAdmin==="true"? history.push("/admin/dashboard") : history.push("/user/dashboard")
		})
		.catch((error) =>{ 
      // console.log("err from catch",error.message)
      setServerError(error.message)
      })
        }
    }
    return (
        <>

            <LoginContainer>
                <LoginWrapper>
                    <FormTitle>Log In</FormTitle>
                    {serverError && <p style={{color:"red"}}>{serverError}</p>}
                    <Form>
                    {loggedInUser? <p>logged in user is {loggedInUser}</p>:<></>}
                        <InnerFormWrapper>
                        <Label>Email:</Label>
                        <Input type="text" name="email" value={formState.email} onChange={handleChange} placeholder='youremail@email.com' />
                        <div style={{color:"red"}}>{emailError}</div>
                        </InnerFormWrapper>
                        <InnerFormWrapper>
                        <Label>Password:</Label>
                        <Input type="password"  name="password" value={formState.password} onChange={handleChange} placeholder='Password' />
                        <div style={{color:"red"}}>{passwordError}</div>
                        </InnerFormWrapper>
                        <EmptyButtonWrapper>
                            <Button onClick={handleSubmit}>Login</Button>
                        </EmptyButtonWrapper>
                    </Form>
                </LoginWrapper>
            </LoginContainer>
        </>
    )
}

const LoginContainer = styled.div`
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


const LoginWrapper = styled.div`
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






