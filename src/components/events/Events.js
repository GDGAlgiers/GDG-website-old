import React, {  useState, useEffect } from "react"
import EventCard from "./eventCard"
import EventMobileCard from "./eventMobileCard"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import GDGBtn from "../common/button/GDGButton"
import gdgimage from '../../images/event.jpg'
import gdgSchool from '../../images/GDG_School_Logo.png'
const events = [
  {
    title: "GDG School",
    date: {
      days: "10-11",
      month: "January",
      year: "2020",
    },
    content:
      "GDG DevFests are large community-run developer events happening around the globe focused on community building and learning about Google’s technologies. \n We organize DevFest 2019 in its 7th edition to offer speaker sessions, cdelabs, workshops and a Hackathon.",
    img:  gdgimage ,
    logo:
     gdgSchool,
    location: "Higher School Of Computer Science \n (ESI Algiers)",
  },
  {
    title: "GDG School",
    date: {
      days: "10-11",
      month: "January",
      year: "2020",
    },
    content:
      "GDG DevFests are large community-run developer events happening around the globe focused on community building and learning about Google’s technologies. \n We organize DevFest 2019 in its 7th edition to offer speaker sessions, cdelabs, workshops and a Hackathon.",
    img: gdgimage,
    logo:
    gdgSchool,
    location: "Higher School Of Computer Science \n (ESI Algiers)",
  },
  {
    title: "GDG School",
    date: {
      days: "10-11",
      month: "January",
      year: "2020",
    },
    content:
      "GDG DevFests are large community-run developer events happening around the globe focused on community building and learning about Google’s technologies. \n We organize DevFest 2019 in its 7th edition to offer speaker sessions, cdelabs, workshops and a Hackathon.",
    img: gdgimage,
    logo:
    gdgSchool,
    location: "Higher School Of Computer Science \n (ESI Algiers)",
  },
  {
    title: "GDG School",
    date: {
      days: "10-11",
      month: "January",
      year: "2020",
    },
    content:
      "GDG DevFests are large community-run developer events happening around the globe focused on community building and learning about Google’s technologies. \n We organize DevFest 2019 in its 7th edition to offer speaker sessions, cdelabs, workshops and a Hackathon.",
    img: gdgimage,
    logo:
    gdgSchool,
    location: "Higher School Of Computer Science \n (ESI Algiers)",
  },
]



const renderEvents = events.map(event => (
  <EventCard height="60vh" event={event} key={event.title}></EventCard>
))

const renderMobileEvents = events.map(event => (
  <EventMobileCard
    height="60vh"
    event={event}
    key={event.title}
  ></EventMobileCard>
))

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
  background-color: white;
  padding: 0 4rem;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
const Events = () => {
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

  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width : 768px)")
    mediaQuery.addListener(handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery)

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange)
    }
  }, [])

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  }
  return (
    <Wrapper id="events">
      <BigTitle>Upcoming events</BigTitle>
      <div style={{ padding: "0 2rem 2rem 2rem" }}>
        {!isSmallScreen ? (
          <Slider {...settings}>{renderEvents}</Slider>
        ) : (
          <Slider {...settingsMobile}>{renderMobileEvents}</Slider>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <GDGBtn title="Previous Events" outlined></GDGBtn>
      </div>
    </Wrapper>
  )
}

export default Events
