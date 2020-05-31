import React, { useState} from "react"
import EventCard from "./eventCard"
import EventMobileCard from "./eventMobileCard"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import GDGBtn from "../../common/button/GDGButton"
import ConsumerContext from "../../../context/Context"

const Events = ({ content }) => {
  const [previousSelected, setPreviousSelected] = useState(false)
  const toggleEvents = e => {
    setPreviousSelected(!previousSelected)
  }
  const events = previousSelected ? content.previous : content.upcoming
  return (
    <Wrapper id="events">
      <BigTitle>
        {previousSelected ? content.titlePrevious : content.titleUpcoming}
      </BigTitle>
      <ConsumerContext>
        {({ data: { isMobile } }) => {
          return (
            <div style={{ padding: "0 2rem 2rem 2rem" }}>
              {!isMobile ? (
                <Slider {...settings}>
                  {events.map(event => (
                    
                      <EventCard
                        height="60vh"
                        event={event}
                        key={event.title}
                      ></EventCard>
                   
                  ))}
                </Slider>
              ) : (
                <Slider {...settingsMobile}>
                  {events.map(event => (
                    <EventMobileCard
                      height="60vh"
                      event={event}
                      key={event.title}
                    ></EventMobileCard>
                  ))}
                </Slider>
              )}
            </div>
          )
        }}
      </ConsumerContext>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <GDGBtn
          title={previousSelected ? "Upcoming events" : "Previous events"}
          outlined
          onClick={toggleEvents}
        ></GDGBtn>
      </div>
    </Wrapper>
  )
}

const BigTitle = styled.h1`
  font-family: var(--font-header);
  font-size: 3.5rem;
  @media screen and (max-width: 768px) {
    padding: 1rem;
    font-size: 0.5;
  }
`
const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: inherit;
  padding: 0 4rem;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  slide: "SlideGrid",
  adaptiveHeight: true,
}

const settingsMobile = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  slide: "SlideGrid",
  adaptiveHeight: true,
}
export default Events
