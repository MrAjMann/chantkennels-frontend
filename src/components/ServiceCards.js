import React from 'react'
import styled from 'styled-components'
import {theme} from '../utils/globalStyles'




export function ServiceCardA() {
    return (
        <Container>
        <CardContainer>
            <Title>Pet Washing</Title>
            <Description>Our pets need to be pamperd to, we offer a range of services to get your pet looking and smelling thier best</Description>
            <PricingContainer>
                <OptionName>Standard Hydrobath</OptionName>
                <OptionPrice>$20.00</OptionPrice>
            </PricingContainer>
            <PricingContainer>
                <OptionName>Hydrobath/cologne</OptionName>
                <OptionPrice>$25.00</OptionPrice>
            </PricingContainer>
            <PricingContainer>
                <OptionName>Hydrobath/cologne/nail clip</OptionName>
                <OptionPrice>$30.00</OptionPrice>
            </PricingContainer>
            <ButtonContainer>
                <Button>Book Now</Button>
            </ButtonContainer>
        </CardContainer>
        </Container>
    )

}


export function ServiceCardB() {
    return (
        <Container>
        <CardContainer>
            <Title>Horse Agistment</Title>
            <Description>Limited grazing areas for your horses, let us help feed you animals </Description>
            <PricingContainer>
                <NoOptionOption>Prices start at $30.00 per horse, per week</NoOptionOption>
                
            </PricingContainer>

            <ButtonContainer>
                <Button>Book Now</Button>
            </ButtonContainer>
        </CardContainer>
        </Container>
    )

}
export function ServiceCardC() {
    return (
        <Container>
            <CardContainer>
            <Title>Breeding Services</Title>
            <Description>We offer assistance with breeding your animals, or we can do it for you. </Description>
            <PricingContainer>
                <NoOptionOption>Please send us a message to find out more.</NoOptionOption>
            </PricingContainer>
      
            <ButtonContainer>
                <Button>Contact Now</Button>
            </ButtonContainer>
        </CardContainer>
        </Container>
    )

}


const Container = styled.div`
width: 400px;
padding:0;
height:100%;
display:flex;
flex-direction:column;
justify-content:flex-start;
margin:2rem 2rem;
background:#5E436D;
`;

const CardContainer =styled.div`

display:flex;
flex-direction:column;
border-radius:5px;
font-family: 'Montserrat', sans-serif;
color: ${theme.PrimaryTxt}
`;

const Title = styled.h1`
text-align:center;
margin:2rem 0;
font-size: 2rem;
`;

const Description = styled.p`
padding:0.5rem 1rem;
text-align:center;
margin: 0.5rem 0;
`;

const PricingContainer = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
grid-template-areas:"name price";
// justify-content:space-evenly;
// align-items:left;
place-items:center;
// height:100%;
margin: 0.5rem 2rem;
// margin-right: 2rem;

`;

const OptionName = styled.li`
color: ${theme.LightTxt};
grid-area: name;
list-style:none;
`;
const OptionPrice = styled.li`
grid-area: price;
list-style:none;
color: ${theme.LightTxt};
`;

const NoOptionOption = styled.p`
color: ${theme.LightTxt};
padding: 15px 0;
grid-area: 1/3;
align-self:center;
`;


const ButtonContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
// margin: 0.5rem -0.5rem;
justify-content:flex-end;
margin-top: auto;
`;

const Button = styled.button`
  width: 150px;
  height: 30px;
  margin: 1rem 3rem;    
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  background: ${(props) => theme.AccentBG};
  cursor: pointer;
  &:hover {
    font-weight: bold;
    box-shadow: 3px 3px 5px #333;
  }

  @media only screen and (max-width: 800px) {
    width: 8rem;
    font-size: 14px;
  }
  @media only screen and (max-width: 768px) {
    // margin-left: 1.4rem;
    text-align: center;
    font-size: 14px;
    max-width: 80%;
    width: 100%;
  }
`;