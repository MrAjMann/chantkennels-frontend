import React from 'react'
import styled from 'styled-components'
import { SectionContainer} from '../../globalStyles'
import {ServiceCardA, ServiceCardB, ServiceCardC} from '../ServiceCards'

const Services = ({title}) => {
    return (
        <>
                <Title>Services</Title>
         <Wrapper>
            <InnerWrapper>
                <ServiceCardA />
                {/* <ServiceCardB /> */}
                {/* <ServiceCardC /> */}
            </InnerWrapper>
            </Wrapper>
            </>
    )
}

export default Services


const Wrapper = styled.div`
display:flex;
min-height: 70vh;
/* flex-direction:column; */
align-items:center;
justify-content:center;
/* max-width:1090px; */
width:80%;

margin: auto;
justify-content: space-between;
`;

const Title = styled.h3`
font-size:36px;
`;
// const Service = styled.div`
// width: calc(33% - 20px);
// `;

const InnerWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
min-height: 100vh;
/* background: #647df9; */
padding: 20px;
`;



// const Title = styled.h1`
// font-size:84px;
// color:#fff;
// /* margin:5rem 15rem; */
// font-family: 'Slabo 13px', serif;
// font-weight:400;
// letter-spacing:6px;
// `;