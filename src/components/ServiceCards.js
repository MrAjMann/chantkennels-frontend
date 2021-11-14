import React from "react";
import styled from "styled-components";
import { theme } from "../globalStyles";
import {FaCheck, FaTimes} from 'react-icons/fa'

// export function ServiceCardA() {
//   return (
//     <Container>
//       <CardContainer>
//         <Title>Pet Washing</Title>
//         <Description>
//           Our pets need to be pamperd to, we offer a range of services to get
//           your pet looking and smelling thier best
//         </Description>
//         <Table>
//           <PricingContainer style={{ width: "270px" }}>
//             <OptionName>Standard Hydrobath</OptionName>

//             <OptionPrice>$20.00</OptionPrice>
//           </PricingContainer>
//           <PricingContainer style={{ width: "270px", marginTop: "20px"  }}>
//             <OptionName>Hydrobath/cologne</OptionName>

//             <OptionPrice>$25.00</OptionPrice>
//           </PricingContainer>
//           <PricingContainer style={{ width: "270px", marginTop: "20px" }}>
//             <OptionName>Hydrobath / Cologne / Nail Clip</OptionName>
//             <OptionPrice>$30.00</OptionPrice>
//           </PricingContainer>
//         </Table>
//         <ButtonContainer>
//           <Button>Book Now</Button>
//         </ButtonContainer>
//       </CardContainer>
//     </Container>
//   );
// }

// export function ServiceCardB() {
//   return (
//     <Container>
//       <CardContainer>
//         <Title>Horse Agistment</Title>
//         <Description>
//           Limited grazing areas for your horses, let us help feed you animals{" "}
//         </Description>
//         <Table>
//           <PricingContainer>
//             <NoOptionOption>
//               Prices start at $30.00 per horse, per week
//             </NoOptionOption>
//           </PricingContainer>
//         </Table>
//         <ButtonContainer style={{marginTop:"1rem"}}>
//           <Button>Book Now</Button>
//         </ButtonContainer>
//       </CardContainer>
//     </Container>
//   );
// }
// export function ServiceCardC() {
//   return (
//     <Container>
//       <CardContainer>
//         <Title>Breeding Services</Title>
//         <Description>
//           We offer assistance with breeding your animals, or we can do it for
//           you.{" "}
//         </Description>
//         <Table>
//           <PricingContainer>
//             <NoOptionOption>
//               Please send us a message to find out more.
//             </NoOptionOption>
//           </PricingContainer>
//         </Table>

//         <ButtonContainer style={{marginTop:"1rem"}}>
//           <Button>Contact Now</Button>
//         </ButtonContainer>
//       </CardContainer>
//     </Container>
//   );
// }


export function ServiceCardA() {
  return(
  //  <Container>


    <Wrapper>
      {/* Section A */}
      <Service>
        <PriceSection>
          <PriceArea>
            <InnerArea>
            
              <Text>$ </Text>
              <Price>99</Price>
            </InnerArea>
          </PriceArea>
        </PriceSection>
        <ServiceName></ServiceName>
        <Features>
          <ListItem>
            <ListName>We offer assistance with breeding your animals.</ListName>
            <ListIcon className="check"> <Check /></ListIcon>
          </ListItem>
          <ListItem>
            <ListName>We can do it for you.</ListName>
            <ListIcon className="check"> <Check /> </ListIcon>
          </ListItem>
          <ListItem>
            <ListName>Information and Support available</ListName>
            <ListIcon className="cross"> <Cross /> </ListIcon>
          </ListItem>
        </Features>
        <ButtonContainer><Button>Book Now</Button></ButtonContainer>
      </Service>


{/* Section B */}
      <Service>
        <PriceSection>
          <PriceArea>
            <InnerArea>
              <Text>$ </Text>
              <Price>99</Price>
            </InnerArea>
          </PriceArea>
        </PriceSection>
        <ServiceName></ServiceName>
        <Features>
          <ListItem>
            <ListName>We offer assistance with breeding your animals.</ListName>
            <ListIcon className="check"> <Check /> </ListIcon>
          </ListItem>
          <ListItem>
            <ListName>We can do it for you.</ListName>
            <ListIcon className="check"> <Check /> </ListIcon>
          </ListItem>
          <ListItem>
            <ListName>Information and Support available</ListName>
            <ListIcon > <Cross /> </ListIcon>
          </ListItem>
        </Features>
        <ButtonContainer ><Button>Book Now</Button></ButtonContainer>
      </Service>


{/* Section C */}
      <Service>
        <PriceSection>
          <PriceArea>
            <InnerArea>
              <Text>$ </Text>
              <Price>50</Price>
            </InnerArea>
          </PriceArea>
        </PriceSection>
        <ServiceName></ServiceName>
        <Features>
          <ListItem>
            <ListName>We offer assistance with breeding your animals.</ListName>
            <ListIcon className="check"> <Check /> </ListIcon>
          </ListItem>
          <ListItem>
            <ListName>We can do it for you.</ListName>
            <ListIcon className="check"> <Check /> </ListIcon>
          </ListItem>
          <ListItem>
            <ListName>Information and Support available</ListName>
            <ListIcon > <Cross /> </ListIcon>
          </ListItem>
        </Features>
      <ButtonContainer> <Button>Book Now</Button> </ButtonContainer>
      </Service>
    </Wrapper>
    // {/* </Container> */}


  )
}

// const Container = styled.div`
/* display:flex; */
// align-items:center;
// justify-content:center;
// min-height: 80vh;
// background: #647df9;
// padding: 20px;
// `;


const Wrapper = styled.div`
max-width:1090px;
width:100%;
display:flex;
flex-wrap:wrap;
margin: auto;
justify-content: space-between;
`;

const Service = styled.div`
min-height: 430px;
width: calc(33% - 20px);
padding:30px;
border: 1px solid red;

@media only screen and (max-width: 1020px) {
  width: calc(50% - 20px);
  margin-bottom: 40px;
}
@media only screen and (max-width: 689px) {

  width: 100%;
}
`;


const PriceSection = styled.div`
display:flex;
justify-content:center;
`;


const PriceArea = styled.div`
width: 130px;
height: 130px;
background: #E3C2F4;
border-radius: 50%; 
padding: 3px;
`;

const InnerArea = styled.div`
height: 100%;
width: 100%;
background: #E3C2F4;
border-radius: 50%;
border: 3px solid #fff;
color: #fff;
line-height: 117px;
text-align:center;
position: relative;
`;


const Text = styled.span`
font-size: 25px;
font-weight: 400;
position: absolute;
top:-10px;
left:17px;
`;

const Price = styled.span`
font-size: 45px;
font-weight: 500;
margin-left:15px;
`;

const ServiceName = styled.div`
width: 100%;
height: 2px;
background: #E3C2F4;
margin: 35px 0;
color: #fff;
position: relative;
&:before{
  position: absolute;
  content: "Service";
  left: 50%;
  top: 50%;
  background: #647df9;
  font-size: 25px;
  font-weight: 500;
  padding: 0 15px;
  transform: translate(-50%, -50%)
}
`;


const Features = styled.div``;

const ListItem = styled.li`
margin-bottom: 15px;
list-style: none;
display: flex;
justify-content: space-between;
`;


const ListName = styled.span`
font-size: 17px;
width: 100%;
font-weight: 400;
`;

const ListIcon = styled.span``;


const Check = styled(FaCheck)`
color: #2bd94d;
`;

const Cross = styled(FaTimes) `
  color: #cd3241 !important;
`;

const ButtonContainer =  styled.div`
display:flex;
justify-content:center;
margin-top:35px;
`;


const Button = styled.button`
width:80%;
height: 50px;
color:#fff;
font-size: 20px;
font-weight:500;
border: none;
outline: none;
background: #E3C2F4;
border-radius: 25px; 
cursor: pointer;
`;


//   const CardContainer = styled.div`
//   background: rgba(157,40,185, 0.1);
//   display: flex;
//   flex-direction: column;
//   border-radius: 5px;
//   font-family: "Montserrat", sans-serif;
//   color: ${theme.PrimaryTxt};
// `;

// const Title = styled.h1`
//   text-align: center;
//   margin: 2rem 0;
//   font-size: 2rem;
// `;

// const Table = styled.table`
//   width: 100%;
//   height: 150px;
// `;
// const Description = styled.p`
//   padding: 0.5rem 1rem;
//   text-align: center;
//   margin: 0.5rem 0;
//   // height:90px;
// `;

// const PricingContainer = styled.tr`
//   display: table;
//   // width:100%;
// //   border: 1px solid red;
//   margin: 0rem auto;
//   text-align: center;
// `;

// const OptionName = styled.td`
//   color: ${theme.LightTxt};
// `;
// const OptionPrice = styled.td`
//   color: ${theme.LightTxt};
// `;

// const NoOptionOption = styled.p`
//   color: ${theme.LightTxt};
//   padding: 15px 0;
//   grid-area: 1/3;
//   align-self: center;
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   // margin: 0.5rem -0.5rem;
//   justify-content: flex-end;
//   margin-top: auto;
// `;

// const Button = styled.button`
//   width: 150px;
//   height: 40px;
//   margin: auto;
//   border: none;
//   border-radius: 5px;
//   font-size: 18px;
//   font-weight: 400;
//   color: #fff;
//   background: ${(props) => theme.AccentBG};
//   cursor: pointer;
//   &:hover {
//     font-weight: bold;
//     box-shadow: 3px 3px 5px #333;
//   }

//   @media only screen and (max-width: 800px) {
//     width: 8rem;
//     font-size: 14px;
//   }
//   @media only screen and (max-width: 768px) {
//     // margin-left: 1.4rem;
//     text-align: center;
//     font-size: 14px;
//     max-width: 80%;
//     width: 100%;
//   }
// `;
