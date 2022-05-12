import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import SimpleMap from "./Map";
import logo from "../../assets/Logo.svg";

import {
  FaFacebook,
  FaYoutube,
  FaPhone,
  FaLinkedin,
  FaTwitter,
  FaSitemap,
  FaEnvelope,
} from "react-icons/fa";
const FooterContainer = styled.footer`
  background: #101522;
`;

const FooterWrapper = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 300px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
const FooterMapArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 460px;
  height: 200px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 1000px) {
    display: none;
    margin: 0;
    padding: 10px;
    /* width: 70%; */
    /* height: 300px;
    width: 420px; */
  }
`;

const FooterLinkTitle = styled.h1`
  font-size: 18px;
  margin-bottom: 16px;
`;

const FooterLink = styled(LinkS)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  letter-spacing: 2px;
  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;
const FooterText = styled.div`
  color: #fff;
  letter-spacing: 2px;
  /* cursor: pointer; */
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  /* &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  } */
`;
const ExternalFooterLink = styled.a`
  color: #fff;
  letter-spacing: 2px;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;
// const Map = styled.img``;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const SocialLogo = styled.a`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

const LogoImage = styled.img`
  margin: auto;
  justify-self: center;
  height: 90%;
`;
const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 240px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Details</FooterLinkTitle>
              <FooterLink>
                {" "}
                <FaPhone /> 0447074186
              </FooterLink>
              <FooterLink>
                <FaEnvelope /> chantkennels@hotmail.com
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              {/* <FooterText></FooterText> */}
              <FooterLink to="services">Services</FooterLink>
              <FooterLink to="about">About</FooterLink>
              <FooterLink to="testimonials">Testimonials</FooterLink>
              <FooterLink to="terms">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterMapArea>
              <FooterLinkTitle>Location</FooterLinkTitle>
              <SimpleMap />
            </FooterMapArea>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <ExternalFooterLink
                href="https://www.facebook.com/chantkennels/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Facebook
              </ExternalFooterLink>
              <ExternalFooterLink
                href="https://www.instagram.com/chantkennels/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Instagram
              </ExternalFooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo
              href="https://www.chantkennels.com.au/"
              target="_blank"
              aria-label="Website"
            >
              <LogoImage src={logo} alt="Chant Kennels Logo" />
            </SocialLogo>

            <WebsiteRights>
              Website by{" "}
              <ExternalFooterLink
                href="http://amwebsolutions.com.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                AM Website Solutions
              </ExternalFooterLink>
            </WebsiteRights>
            <WebsiteRights>
              &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>

            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/amwebsitesol"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>

              {/* <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink> */}
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
