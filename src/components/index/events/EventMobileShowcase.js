import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
function EventMobileShowcase({event}) {
    return (
        <StyledWrapper>
            <EventLogo src={require(`../../../images/events/${event.logo}`)} alt={event.title}></EventLogo>
            <Link to={event.url}>See details 🠖</Link>
        </StyledWrapper>
    )
}


/// styled components 


const StyledWrapper = styled.div`
    display : flex;
    justify-content : space-around;
    align-items : center;
    flex-direction : column;
    margin :20px;
    border-radius : 20px;
    height : 400px;
    box-shadow: 0 5px 6px -3px rgba(0, 0, 0, 0.1),
    0 9px 12px 1px rgba(0, 0, 0, 0.14), 0 3px 16px 2px rgba(0, 0, 0, 0.12);
    background-image : url(${props => props.bg});
    padding: 10px;
    transition : 280ms ease-in;
    &:hover {
        box-shadow: 0 5px 6px -3px rgba(0, 0, 0, 0.2),
    0 9px 12px 1px rgba(0, 0, 0, 0.14), 0 3px 16px 2px rgba(0, 0, 0, 0.12);
    }
    a {
        text-decoration : none;
        font-family : var(--font);
        font-weight : 200;
        font-size : 1rem;
        padding : 10px;
        border : 1px solid var(--green);
        border-radius : 5px;
        color : var(--green)
    }
`
const EventLogo = styled.img`
    max-height :100%;
    max-width :100%;
    padding : auto;
    border-radius : 20px;
`
export default EventMobileShowcase
