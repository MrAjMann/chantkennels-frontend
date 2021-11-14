import React from 'react'
import styled from 'styled-components'
import { LoggedInContainer } from '../../globalStyles'
import SideBar from './SideBar'
const DashBoard = () => {
    return (
        <LoggedInContainer>
            <SideBar />
            <DashboardContainer>

            </DashboardContainer>
        </LoggedInContainer>
    )
}

export default DashBoard


const DashboardContainer = styled.div`
grid-area:dashboard;
// border:1px solid red;
border-radius: 0px 5px 5px 0px;
background:#2B242F;
z-index:-10;
border-radius: 15px;
backdrop-filter: blur(335.243px);
box-shadow: inset 79.0667px -79.0667px 79.0667px rgba(98, 58, 120, 0.076), inset -79.0667px 79.0667px 79.0667px rgba(255, 255, 255, 0.076);
width:80%;
height:60vh;
`;