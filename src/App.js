import React from 'react'
import { ThemeProvider } from "styled-components";
import { theme, Container,Styles } from './utils/globalStyles';

import Home from "./pages/LandingPage";
import Header from "./components/landingPageComponents/Header";
import Footer from "./components/landingPageComponents/Footer";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Styles /> 
      <Header />
          <Home />
          
        <Container>
        </Container>
      
      <Footer />
    </ThemeProvider>
    
  );
}

export default App;
