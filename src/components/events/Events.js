import React, { Component } from "react"
import EventCard from "./eventCard"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import GDGBtn from "../common/button/GDGButton"
const events = [
  {
    title: "GDG School",
    date: "10-11 January 2020",
    content:
      "GDG DevFests are large community-run developer events happening around the globe focused on community building and learning about Google’s technologies. \n We organize DevFest 2019 in its 7th edition to offer speaker sessions, cdelabs, workshops and a Hackathon.",
    img: "https://gdgalgiers.com/assets/header_1.jpg",
  },
  {
    title: "GDG School",
    date: "10-11 January 2020",
    content:
      "GDG DevFests are large community-run developer events happening around the globe focused on community building and learning about Google’s technologies. \n We organize DevFest 2019 in its 7th edition to offer speaker sessions, cdelabs, workshops and a Hackathon.",
    img: "https://gdgalgiers.com/assets/header_1.jpg",
  },
  {
    title: "GDG School",
    date: "10-11 January 2020",
    content:
      "GDG DevFests are large community-run developer events happening around the globe focused on community building and learning about Google’s technologies. \n We organize DevFest 2019 in its 7th edition to offer speaker sessions, cdelabs, workshops and a Hackathon.",
    img: "https://gdgalgiers.com/assets/header_1.jpg",
  },
  {
    title: "GDG School",
    date: "10-11 January 2020",
    content:
      "GDG DevFests are large community-run developer events happening around the globe focused on community building and learning about Google’s technologies. \n We organize DevFest 2019 in its 7th edition to offer speaker sessions, cdelabs, workshops and a Hackathon.",
    img: "https://gdgalgiers.com/assets/header_1.jpg",
  },
  {
    title: "GDG School",
    date: "10-11 January 2020",
    content:
      "GDG DevFests are large community-run developer events happening around the globe focused on community building and learning about Google’s technologies. \n We organize DevFest 2019 in its 7th edition to offer speaker sessions, cdelabs, workshops and a Hackathon.",
    img: "https://gdgalgiers.com/assets/header_1.jpg",
  },
]

const SlideGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const renderEvents = events.map(event => (
  <EventCard height="50vh" event={event} key={event.title}></EventCard>
))

const BigTitle = styled.h1`
  font-family: var(--font-header);
  font-size: 64px;
`
const Wrapper = styled.section`
  width: 100%;
  height: 80vh;
  background-color: white;
  padding: 0 4rem;
`
export default class Events extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      slide: "SlideGrid",
      adaptiveHeight: true,
    }
    return (
      <Wrapper>
        <BigTitle>Upcoming events</BigTitle>
        <div style={{ padding: "0 2rem 2rem 2rem" }}>
          <Slider {...settings}>{renderEvents}</Slider>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <GDGBtn title="Previous Events" outlined></GDGBtn>
        </div>
      </Wrapper>
    )
  }
}
