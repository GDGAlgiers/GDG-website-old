import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Landing from "../components/landing/landing"
import Events from "../components/events/Events"

// example of using styled components ( writing CSS-in-JS )

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing></Landing>
    <Events></Events>
    {
      // TODO : ADD ABOUT SECTION with id : #about
      // TODO : ADD EVENTS SECTION with id : #events
      // TODO : ADD PARTNERS SECTION with id : #partners
      // TODO : ADD SPONSORS  SECTION with id : #sponsors
      // TODO : ADD LOCATION (using iframe google maps)
      // TODO : ADD CONTACT US SECTION with id : #contact
      // TODO : ADD NEWSLETTER
    }
  </Layout>
)

export default IndexPage
