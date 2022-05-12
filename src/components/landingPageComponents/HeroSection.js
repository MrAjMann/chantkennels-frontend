import React from "react";
import styled from "styled-components";
import { theme } from "../../globalStyles";
import { Button } from "../button/buttonStyle";

import img from "./assets/Pug.png";

const HeroSection = ({
  id,
  imgStart,
  topline,
  headline,
  description,
  buttonLabel,
  alt,
}) => {
  return (
    <>
      <HeroContainer id={id}>
        <InnerWrapper>
          <Row imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topline}</TopLine>
                <Heading>{headline}</Heading>
                <Subtitle>{description}</Subtitle>

                <BtnWrap>
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </Row>
        </InnerWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;

const HeroContainer = styled.div`
  color: #e2e2e2;
  /* background: radial-gradient(circle, rgba(157,40,185,1) 0%, rgba(142,91,170,1) 42%, rgba(105,60,98,1) 100%); */
  /* background: rgb(142 90 170); */
  background: #fefcfa;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: 960px;
  }
`;

const InnerWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  border-bottom: 0px 10%;

  @media screen and (max-width: 768px) {
    height: 860px;
  }
`;

const Row = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  margin-top: 3rem;
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col1 col2'` : `'col1 col2'`};

  @media only screen and (max-width: 768px) {
    margin-top: 0rem;
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'`};
  }
`;

const Column1 = styled.div`
  margin-bottom: 0px;
  padding: 0 15px;
  grid-area: col1;
`;

const Column2 = styled.div`
  margin-bottom: 5px;
  padding: 0 15px;
  grid-area: col2;
`;

const TextWrapper = styled.div`
  max-width: 640px;
  padding-top: 0;
  /* padding-bottom: 60px; */
`;

const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  /* margin-bottom: 16px; */
`;

const Heading = styled.h1`
  /* margin-bottom: 24px; */
  font-size: 3.5rem;
  line-height: 1.1;
  font-weight: 600;
  font-family: "Slabo 13px", serif;
  /* color: ${(props) => theme.PrimaryTxt}; */
  color: #8e5aaa;

  @media only screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => theme.LightTxt};
`;

const BtnWrap = styled.div`
  display: flex;
  height: 100%;
`;

const ImgWrap = styled.div`
  max-width: 755px;
  height: 100%;

  @media screen and (max-width: 468px) {
    margin-bottom: -15rem;
  }
`;

const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
