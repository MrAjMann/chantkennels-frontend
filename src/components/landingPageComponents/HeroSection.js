import React from 'react'
import styled from 'styled-components'
import {theme} from '../../utils/globalStyles'
import landingImage from '../../assets/Pug.png'
const HeroSection = () => {
    return (
        <div>
        <Container>
          <LeftSection>
            <Header>Accomodation for all your pets</Header>

            <Text>
            From big to small, we look after them all.
            </Text>

            <FormDiv>
              
              <Button >
                Book Now
              </Button>
            </FormDiv>
          </LeftSection>
          <RightSection>
            <BackgroundBox>
                <Image src={landingImage} />
            </BackgroundBox>
          </RightSection>
        </Container>
      </div>
    )
}

export default HeroSection


const Container = styled.div`
  display: grid;
  height:90vh;
  width:80vw;
  grid-template-columns:1fr 1fr;
  grid-template-areas: 'left right';
`;
const LeftSection = styled.div`
 grid-area: left;
 display:flex;
 width:100%;
 flex-direction:column;
 justify-content:center;
 align-items: left;
 @media only screen and (max-width: 768px) {
     width: 100%;
    }
    `;
    const Header = styled.h1`
    font-size: 45px;
    font-weight:400;
    font-family: 'Slabo 13px', serif;
    color: ${(props) => theme.PrimaryTxt};
    margin: 0.5rem 7rem;
    @media only screen and (max-width: 960px) {
        font-size: 20px;
        text-align: left;
    }
    @media only screen and (max-width: 768px) {
        font-size: 18px;
        text-align: left;
    }
    `;
    const Text = styled.p`
    font-size: 24px;
    margin: 3rem 0rem 0rem 7rem;
    font-family: 'Montserrat', sans-serif;
    color: ${theme.PrimaryTxt};
    max-width: 550px;
    
    @media only screen and (max-width: 960px) {
        font-size: 16px;
        text-align: left;
    }
    @media only screen and (max-width: 768px) {
        text-align: left;
        font-size: 14px;
    }
    `;
    const Image = styled.img`
    max-height:50%;
    position:absolute;
    top:225px;
    right:22%;
    background:none;
    
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
    `;
    
    const RightSection = styled.div`
    grid-area:right;
    display:flex;
    align-items: center;
    justify-content:center;
    @media only screen and (max-width: 768px) {
        margin-bottom: 1rem;
  }
`;

const BackgroundBox =styled.div`
width:570px;
height 380px;
overflow:visible;
z-index:5;
border-radius:10px;
background:#D5A8ED;
box-shadow: 4px 3px 7px rgba(0, 0, 0, 0.2)
`;


const Button = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 5px;
  font-size: 24px;
  font-weight: 400;
  margin:0rem 7rem;
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

const FormDiv = styled.div`
  display: flex;
  margin-top: 2.5rem;
  @media only screen and (max-width: 960px) {
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
`;
