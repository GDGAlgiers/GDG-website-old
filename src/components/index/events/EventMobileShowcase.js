import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
function EventMobileShowcase({ event }) {
  const [showContent, setShowContent] = useState(false)
  const toggleContent = () => setShowContent(!showContent)
  return (
    <StyledWrapper>
      <EventLogo
        src={require(`../../../images/events/${event.logo}`)}
        alt={event.title}
      ></EventLogo>
      <EventDescription className={showContent && "show__content"}>{event.content}</EventDescription>

      <button onClick={toggleContent}>See details</button>
    </StyledWrapper>
  )
}

/// styled components

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  min-height: 50vh;
  border-radius: 20px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  background-image: url(${props => props.bg});
  padding: 10px;
  transition: 280ms ease-in;

  button {
    text-decoration: none;
    background-color: transparent;
    font-family: var(--font-header);
    font-weight: 400;
    font-size: 1rem;
    padding: 15px;
    border: none;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    color: var(--green);
    outline : none;
    &:focus{
        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
        outline : none;
        border : none;
    }
  }
`
const EventLogo = styled.img`
  max-height: 300px;
  max-width: 300px;
  margin: 0;
`
const EventDescription = styled.p`
  margin-top: 20%;
  padding: 0 18px;
  max-height : 0px;
  transition: 280ms ease-in;
  overflow-y: hidden;
  font-family: var(--font-header);
  &::-webkit-scrollbar {
    display: none;
  }
  &.show__content {
    max-height: 400px;
    overflow-y: scroll;
  }
`
export default EventMobileShowcase
