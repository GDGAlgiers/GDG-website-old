import React, { useState } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
function EventMobileShowcase({ event }) {
  const [showContent, setShowContent] = useState(false)
  const toggleContent = () => setShowContent(!showContent)
  const gotoEvent = path => navigate(path)
  return (
    <StyledWrapper>
      <EventLogo
        src={require(`../../../images/events/${event.logo}`)}
        alt={event.title}
      ></EventLogo>
      <p className="date">{event.date.days} {event.date.month} {event.date.year}</p>
      <EventDescription className={showContent && "show__content"}>
        {event.content}
      </EventDescription>

      <div style={{ display: "flex" }}>
        <button
          style={{
            marginRight: 10,
            backgroundColor: "var(--green)",
            color: "white",
          }}
          onClick={() => gotoEvent(event.url)}
        >
          Go To Event
        </button>
        <button onClick={toggleContent}>See details</button>
      </div>
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
  .date {
      font-family : var(--font-header);
      font-weight : 500;
  }
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
    outline: none;
    &:focus {
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
      outline: none;
      border: none;
    }
  }
`
const EventLogo = styled.img`
  max-height: 300px;
  max-width: 300px;
  margin: 0;
`
const EventDescription = styled.p`
  padding: 0 18px;
  max-height: 0px;
  margin : 0;
  transition: 280ms ease-in;
  overflow-y: hidden;
  font-family: var(--font-header);
  &::-webkit-scrollbar {
    display: none;
  }
  &.show__content {
    max-height: 400px;
    margin-bottom: 1rem ;
    overflow-y: scroll;
  }
`
export default EventMobileShowcase
