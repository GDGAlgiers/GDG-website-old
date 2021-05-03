import React from "react"
import SEO from "../components/layout/seo"
import Landing from "../components/index/landing/landing"
import Events from "../components/index/events/Events"
import Location from "../components/index/location/Location"
import ContactUS from "../components/index/contact/ContactUs"
import Description from "../components/index/description/Description"
import Featured from "../components/index/featured/Featured"
import Partners from "../components/index/partners/Partners"
import ReactNotification from "react-notifications-component"
import "react-notifications-component/dist/theme.css"

// Content
import index from "../content/index.json"
///

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <ReactNotification />
      <Landing content={index.landing}></Landing>
      <Description content={index.description}></Description>
      <Featured content={index.featured}></Featured>
      <Events content={index.events}></Events>
      <Partners content={index.partners}></Partners>
      <Location></Location>
      <ContactUS content={index.contactUs}></ContactUS>
    </>
  )
}

export default IndexPage
