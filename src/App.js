import React from 'react'
import { ThemeProvider } from "styled-components";
import { theme, Container,Styles } from './utils/globalStyles';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "./pages/LandingPage";
import Header from "./components/landingPageComponents/Header";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Styles /> 
      <BrowserRouter>
      <Header />
      <Switch>

          <Route exact path="/" component={Home} />
          
        <Container>
        </Container>
      
      </Switch>
     
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
