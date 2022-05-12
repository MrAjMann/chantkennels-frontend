import React from "react";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

import reviewerImage from "../../assets/manWithDog.jpg";
// import Icon2 from "../../assets/Icon2.svg";
// import Icon3 from "../../assets/Icon3.svg";

const Testimonials = ({ id }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      <TestimonialContainer id={id}>
        <TestimonialH1>Our Testimonials</TestimonialH1>
        <TestimonialWrapper>
          <TestimonialCard>
            <TestimonialIcon src={reviewerImage} />
            <TestimonialH2>Awesome Cat Person</TestimonialH2>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={32}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <TestimonialP>
              amazing service from Cheryl, looked after my kitties so well they
              didnt want to come home - recommended to everyone ❤
            </TestimonialP>
          </TestimonialCard>

          <TestimonialCard>
            <TestimonialIcon src={reviewerImage} />
            <TestimonialH2>Awesome Cat Person</TestimonialH2>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={32}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <TestimonialP>
              amazing service from Cheryl, looked after my kitties so well they
              didnt want to come home - recommended to everyone ❤
            </TestimonialP>
          </TestimonialCard>

          {/* <TestimonialCard>
            <TestimonialIcon src={Icon2} />
            <TestimonialH2>Pet Washing</TestimonialH2>
            <TestimonialP>
              Our pets need to be pamperd to, we offer a range of services to
              get your pet looking and smelling thier best
            </TestimonialP>
          </TestimonialCard> */}

          {/* <TestimonialCard>
            <TestimonialIcon src={Icon3} />
            <TestimonialH2>Horse Agistment</TestimonialH2>
            <TestimonialP>
              Limited grazing areas for your horses, let us help feed you
              animals{" "}
            </TestimonialP>
          </TestimonialCard> */}

          {/* <TestimonialCard>
            <TestimonialIcon src={Icon3} />
            <TestimonialH2>Horse Agistment</TestimonialH2>
            <TestimonialP>
              Limited grazing areas for your horses, let us help feed you
              animals{" "}
            </TestimonialP>
          </TestimonialCard> */}
        </TestimonialWrapper>
      </TestimonialContainer>
    </>
  );
};

export default Testimonials;

const TestimonialContainer = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: rgb(142 90 170); */
  /* background: radial-gradient(circle, rgba(157,40,185,1) 0%, rgba(142,91,170,1) 42%, rgba(105,60,98,1) 100%); */

  @media screen and (max-width: 768px) {
    height: 1300px;
  }
  @media screen and (max-width: 480px) {
    height: 1000px;
  }
`;

const TestimonialWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    /* grid-template-columns: 1fr 1fr; */
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

const TestimonialCard = styled.div`
  background: #8e5aaa;
  display: flex;
  max-width: 600px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 360px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  /* &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  } */
`;

const TestimonialIcon = styled.img`
  height: 160px;
  width: 160px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const TestimonialH1 = styled.h1`
  font-size: 3.5rem;
  line-height: 1.1;
  font-weight: 600;
  font-family: "Slabo 13px", serif;
  color: #8e5aaa;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const TestimonialH2 = styled.h2`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 10px;
`;

const TestimonialP = styled.p`
  font-size: 1rem;
  color: #fff;
  text-align: center;
`;
