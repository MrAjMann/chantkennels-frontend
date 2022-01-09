import React from 'react'
import styled from 'styled-components'
import { SectionContainer} from '../../globalStyles'
import  {TestimonialCard}  from '../TestimonialCard'


const Testimonials = () => {
    return (
        <SectionContainer>
            <Title>Testimonials</Title>
            <CardContainer>
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </CardContainer>
        </SectionContainer>
    )
}

export default Testimonials


const CardContainer = styled.div`
max-height:100%;
display: flex;
justify-content:center;
flex-wrap:wrap;

@media (max-width: 768px) {
width: 100%;
}
`;



const Title = styled.h1`
font-size:36px;
/* margin:5rem 15rem; */
font-family: 'Slabo 13px', serif;
font-weight:400;
letter-spacing:6px;
`;