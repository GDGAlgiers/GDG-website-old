import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Landing from "../components/landing/landing"
import Events from "../components/events/Events"
import Description from "../components/description/Description"
import Featured from "../components/featured/Featured"
import Partners from "../components/partners/Partners"
// example of using styled components ( writing CSS-in-JS )

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing></Landing>
    <Description></Description>
    <Featured></Featured>
    <Events></Events>
    <Partners></Partners>
    {
      // TODO : ADD PARTNERS SECTION with id : #partners
      // TODO : ADD SPONSORS  SECTION with id : #sponsors
      // TODO : ADD LOCATION (using iframe google maps)
      // TODO : ADD CONTACT US SECTION with id : #contact
      // TODO : ADD NEWSLETTER
    }
  </Layout>
)

export default IndexPage
