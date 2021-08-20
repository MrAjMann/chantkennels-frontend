import React from 'react'
import { ThemeProvider } from "styled-components";
import { theme, Container,Styles } from './utils/globalStyles';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "./pages/LandingPage";
import NavBar from "./components/landingPageComponents/NavBar";
import Login from './pages/LoginPage'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Styles /> 
      <BrowserRouter>
      <NavBar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login}/>
        <Container>
        </Container>
      
      </Switch>
     
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
