import React from "react";

import styled from "styled-components";
import { theme, SectionContainer} from '../../utils/globalStyles'



const Footer = () => {

  return (
    
    <SectionContainer style={{height:"70vh"}}>
    <ThreeColumnContainer>

      <LeftCol>
        <ColHeading>Opening Hours</ColHeading>
          <InnerColumnContainer>
            <ColSubHeading>Mon-Fri</ColSubHeading>
            <ColInnerText>8:00am to 12:00pm</ColInnerText>
            <ColInnerText>1:00pm to 5:00pm</ColInnerText>
          </InnerColumnContainer>
          <InnerColumnContainer>
            <ColSubHeading>Sat-Sun</ColSubHeading>
            <ColInnerText>9:00am to 12:00pm</ColInnerText>

          </InnerColumnContainer>
      </LeftCol>
      <MidCol>
        <ColHeading>Location</ColHeading>
        <MapContainer>
        <ColInnerText>15 Sprott Rd, Ellinthorp QLD 4362</ColInnerText>
          <Map src="https://maps.googleapis.com/maps/api/staticmap?center=15+sprott+rd,Ellinthorp,QLD&zoom=15&size=600x300&maptype=roadmap
              &markers=color:red%7Clabel:S%7C-28.051899011701238,151.9242423
              &key=AIzaSyC10lIxPMbf8-J709s68t6Ngo6ThgveTx8"></Map>
       </MapContainer>

      </MidCol>
      <RightCol>
        <ColHeading>Social Media</ColHeading>
          <SocialsContainer>
              <SocialLink href='https://www.facebook.com/chantkennels-346444793261572' target="_blank">Facebook</SocialLink>
              <SocialLink href='https://www.instagram.com/chantkennels/?hl=en' target="_blank">Instagram</SocialLink>
          </SocialsContainer>
      </RightCol>

    </ThreeColumnContainer>
    <BottomFooterContainer>
    <ColInnerText>&copy; AM Website Solutions</ColInnerText>
    </BottomFooterContainer>
  </SectionContainer>
  
  );
};

export default Footer;


const ThreeColumnContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-areas: "LeftCol MidCol RightCol";
height:90%;
`;
const InnerColumnContainer = styled.div`
margin: 3rem 0;
// height:80%;
`;
const LeftCol = styled.div`

grid-area: LeftCol;
`;
const MidCol = styled.div`

grid-area: MidCol;

`;
const RightCol = styled.div`

grid-area: RightCol;

`;

const ColHeading = styled.h3`
font-size: 36px;
text-align:center;
margin-bottom:25%;
`;
const ColSubHeading = styled.h5`
font-size: 18px;
text-align:center;
`;
const ColInnerText = styled.p`
font-size: 14px;
text-align:center;
color: ${theme.LightTxt}
`;
const MapContainer = styled.div`
display:flex;

flex-direction: column;
justify-content:center;
align-items:center;
`;

const SocialsContainer = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;

`;

const SocialLink = styled.a`
font-size:36px;
margin: 3rem 0;
text-decoration:none;
font-weight:600;
`;

const BottomFooterContainer = styled.div`
display: flex;
justify-content:center;
align-items:center;
width: 100%;
height: 9%;

`;


const Map = styled.img`

`;