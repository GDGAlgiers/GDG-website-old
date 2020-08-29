import React, { useState } from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import GDGBtn from "../../common/button/GDGButton"
import ConsumerContext from "../../../context/Context"
import EventShowcase from "./EventShowcase"
import EventMobileShowcase from "./EventMobileShowcase"
import Fade from "react-reveal/Fade"
const Events = ({ content }) => {
  const [previousSelected, setPreviousSelected] = useState(true)
  const toggleEvents = e => {
    setPreviousSelected(!previousSelected)
  }
  const events = previousSelected ? content.previous : content.upcoming

  const renderEvents = (events, isMobile, { mobile, desktop }) => {
    if (!isMobile) {
      return (
        <Slider {...settings} style={{
          padding : 0
        }}>
          {events.map(event => (
            <Fade>
              <desktop.Component
                key={event.title}
                event={event}
              ></desktop.Component>
            </Fade>
          ))}
        </Slider>
      )
    } else {
      return (
        <Slider {...settingsMobile}>
          {events.map(event => (
            <Fade>
              <mobile.Component
                event={event}
                key={event.title}
              ></mobile.Component>
            </Fade>
          ))}
        </Slider>
      )
    }
  }
  return (
    <Wrapper id="events" className="section">
      <BigTitle>
        {previousSelected ? content.titlePrevious : content.titleUpcoming}
      </BigTitle>
      <ConsumerContext>
        {({ data: { isMobile } }) => {
          return (
            <div className="slider-show">
              {renderEvents(events,isMobile,{
                mobile :{
                  Component : EventMobileShowcase
                },
                desktop : {
                  Component : EventShowcase
                }
              })}
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
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    padding: 1rem;
    font-size: 0.5;
  }
`
const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: inherit;
  padding: 0 4rem;
  .slider-show {
    margin-bottom : 64px;
  }
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
