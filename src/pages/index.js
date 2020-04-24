import React from "react"
import SEO from "../components/layout/seo"
import Landing from "../components/index/landing/landing"
import Events from "../components/index/events/Events"

import ContactUS from "../components/index/contact/ContactUs"
import Description from "../components/index/description/Description"
import Featured from "../components/index/featured/Featured"
import Partners from "../components/index/partners/Partners"
import PageTransition from 'gatsby-plugin-page-transitions'
// example of using styled components ( writing CSS-in-JS )

const IndexPage = () => (
    <PageTransition>
    <SEO title="Home" />
    <Landing></Landing>
    <Description></Description>
    <Featured></Featured>
    <Events></Events>
    <Partners></Partners>
    <ContactUS></ContactUS>

    {
      // TODO : ADD CONTACT US SECTION with id : #contact
      // TODO : ADD NEWSLETTER
    }
 </PageTransition>
)

export default IndexPage
