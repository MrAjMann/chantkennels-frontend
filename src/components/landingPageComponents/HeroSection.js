import React from 'react'
import styled from 'styled-components'
import {theme} from '../../globalStyles'
import {Button} from '../button/buttonStyle'
import landingImage from '../../assets/Pug.png'
const HeroSection = () => {
    return (
        <Wrapper>
          <InnerWrapper>
          <LeftSection>
            <Header>Accomodation for all your pets</Header>
            <Text>
            From big to small, we look after them all.
            </Text>
            <FormDiv>
              <SmallButton >
                Book Now
              </SmallButton>
            </FormDiv>
          </LeftSection>
          <RightSection>
                <Image src={landingImage} />
          </RightSection>
          </InnerWrapper>
      </Wrapper>
    )
}

export default HeroSection

const Wrapper = styled.div`
display:flex;
/* align-items:center; */
flex-wrap:wrap-reverse;
justify-content:center;
/* max-width:1090px; */
min-height: 90vh;
width:100%;
justify-content: space-between;

`;

const InnerWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;

@media only screen and (max-width: 1020px) {
  display: flex;
  flex-direction:column;
  place-content:center;
  width:100%;
}
/* @media only screen and (max-width: 1020px) {
  width: calc(50% - 20px);
  margin-bottom: 40px;
} */
/* @media only screen and (max-width: 689px) {

  width: 100%;
} */
/* width:90%; */
/* padding: 20px; */
`;

// const Container = styled.div`
//   display: grid;
//   max-height:100%;
//   margin:12rem 10rem;
//   grid-template-columns:1fr 1fr;
//   grid-template-areas: 'left right';
//   @media only screen and (max-width: 768px) {
//     display:flex;
//     border:1px solid red;
//     justify-content:center;
//     align-items:center;
//     flex-direction:column-reverse;
//     width:100vw;
//     margin: 5rem 0rem;
    
// }
// `;
const RightSection = styled.div`
/* grid-area:right; */
/* width:100%; */
/* margin-left:15rem; */
@media only screen and (max-width: 768px) {
  margin:0 2rem;
  width:100vw;
  }
`;
const LeftSection = styled.div`
/* grid-area: left; */
/* width:100%; */
/* justify-content:center; */
margin:0 2rem;
@media only screen and (max-width: 768px) {
  
  width:100vw;
  }
  `;
  const Header = styled.h1`
  width: 80%;
  font-size: 45px;
  font-weight:400;
  font-family: 'Slabo 13px', serif;
  color: ${(props) => theme.PrimaryTxt};
  margin: 5rem 7rem;
    @media only screen and (max-width: 768px) {
      width:100%;
      margin: 0.5rem 2rem;
      justify-content:center;
      text-align:center; 
      font-size: 32px;
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
      margin: 0 2rem;
        // text-align: left;
        font-size: 16px;
    }
    `;
    const Image = styled.img`

    /* width:600px; */
    border-radius:10px;
    @media only screen and (max-width: 768px) {
      // border:1px solid red;
      width:100vw;
      align-items: center;
     }
    

    `;
    




const SmallButton = styled(Button)`
  width: 200px;
  height: 50px;
  margin: 0 7rem; 
  @media only screen and (max-width: 768px) {
    margin: 0 ; 
    display:block;
}
`;

const FormDiv = styled.div`
  display: flex;
  margin-top: 2.5rem;
  @media only screen and (max-width: 768px) {
  display:flex;
  width:100vw;
  justify-content:center;
  flex-direction:row;
  align-items:center;
  }
`;
