import React from "react";
import styled from "styled-components";
import Icon1 from "../../assets/Icon1.svg";
import Icon2 from "../../assets/Icon2.svg";
import Icon3 from "../../assets/Icon3.svg";

const Services = ({ id }) => {
  return (
    <>
      <ServicesContainer id={id}>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Breeding</ServicesH2>
            <ServicesP>
              We offer assistance with breeding your animals, or we can do it
              for you.{" "}
            </ServicesP>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Pet Washing</ServicesH2>
            <ServicesP>
              Our pets need to be pamperd to, we offer a range of services to
              get your pet looking and smelling thier best
            </ServicesP>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Horse Agistment</ServicesH2>
            <ServicesP>
              Limited grazing areas for your horses, let us help feed you
              animals{" "}
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;

const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(142 90 170);
  /* background: radial-gradient(circle, rgba(157,40,185,1) 0%, rgba(142,91,170,1) 42%, rgba(105,60,98,1) 100%); */

  @media screen and (max-width: 768px) {
    height: 1300px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

const ServicesWrapper = styled.div`
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

const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

const ServicesH1 = styled.h1`
  font-size: 3.5rem;
  line-height: 1.1;
  font-weight: 600;
  font-family: "Slabo 13px", serif;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
