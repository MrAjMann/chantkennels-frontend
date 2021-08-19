import React from 'react'
import styled from 'styled-components'
import { SectionContainer} from '../../utils/globalStyles'
import {ServiceCardA, ServiceCardB, ServiceCardC} from '../ServiceCards'

const Services = ({title}) => {
    return (
        <SectionContainer>
                <Title>Services</Title>
            <CardContainer>
                <ServiceCardA />
                <ServiceCardB />
                <ServiceCardC />
            </CardContainer>
        </SectionContainer>
    )
}

export default Services


const CardContainer = styled.div`
max-height:100%;
display: flex;
justify-content:center;
  flex-wrap:wrap;


`;



const Title = styled.h1`
font-size:84px;
margin:5rem 15rem;
font-family: 'Slabo 13px', serif;
font-weight:400;
letter-spacing:6px;
`;