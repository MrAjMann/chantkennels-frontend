// import styled from "styled-components";
import { Container } from "../utils/globalStyles";
import React from "react";
import HeroSection from "../components/landingPageComponents/HeroSection";
import Services from "../components/landingPageComponents/Services";
import Testimonials from "../components/landingPageComponents/Testimonials";
const LandingPage = () => {
  return (
    <Container>
      <HeroSection />
      <Services />
      <Testimonials />
    </Container>
  );
};

export default LandingPage;
