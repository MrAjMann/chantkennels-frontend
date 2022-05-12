// import styled from "styled-components";
import React from "react";
import {
  heroObjData,
  servicesObjData,
  testimonialObjData,
} from "../components/landingPageComponents/Data";
import HeroSection from "../components/landingPageComponents/HeroSection";
import Services from "../components/landingPageComponents/Services";
import Testimonials from "../components/landingPageComponents/Testimonials";
import Footer from "../components/landingPageComponents/Footer";
const LandingPage = () => {
  return (
    <>
      <HeroSection {...heroObjData} />
      <Services {...servicesObjData} />
      <Testimonials {...testimonialObjData} />
      <Footer />
    </>
  );
};

export default LandingPage;
