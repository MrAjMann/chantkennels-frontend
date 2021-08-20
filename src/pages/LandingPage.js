// import styled from "styled-components";
import { Container } from "../utils/globalStyles";
import React from "react";
import HeroSection from "../components/landingPageComponents/HeroSection";
import Services from "../components/landingPageComponents/Services";
import Testimonials from "../components/landingPageComponents/Testimonials";
import Footer from "../components/landingPageComponents/Footer";
const LandingPage = () => {
  return (
    <Container>
      <HeroSection />
      <Services />
      <Testimonials />
      <Footer />
    </Container>
  );
};

export default LandingPage;
