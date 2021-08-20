import React from 'react'
import styled from 'styled-components'
import {theme} from '../utils/globalStyles'
// import Rate from './Review'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


export function TestimonialCard() {
    // const [rating, setRating] = useState(0)
    return (
        <Container>
        <CardContainer>
            <Title>Name Here</Title>
                <RatingBox>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />   
                </RatingBox>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis elit, pellentesque leo, dui aliquam. Euismod interdum pulvinar luctus tellus. Arcu libero integer elit pharetra eu netus enim augue. Egestas quam magna lectus ut non lectus massa sem scelerisque. Mi proin pretium, turpis viverra mauris non massa morbi velit.     
                </Description>
        </CardContainer>
        </Container>
    )
    
}




const Container = styled.div`
width: 400px;
padding:0;
height:100%;
display:flex;
flex-direction:column;
justify-content:flex-start;
margin:2rem 2rem;
background:#E3C2F4;
`;

const CardContainer =styled.div`

display:flex;
flex-direction:column;
border-radius:5px;
font-family: 'Montserrat', sans-serif;

`;

const Title = styled.h1`
text-align:center;
margin:2rem 0;
margin-bottom: 0.5rem;
color: ${theme.DarkTxt};
font-size: 2rem;
`;

const Description = styled.p`
padding:0.5rem 1rem;
text-align:center;
color: ${theme.DarkTxt};
margin: 0.5rem 0;
`;


const RatingBox = styled.div`
display : flex;
justify-content: center;
width:100%;

`;