import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import styled from "styled-components"
import { colors } from "../constants/theme"

// example of using styled components ( writing CSS-in-JS )
const Center = styled.div`
  margin: auto;
  height: fit-content;
  width: fit-content;
`
const RedH1 = styled.h1`
  background: var(--blue);
  color: ${colors.red_light};
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Center>
      <img src={require("../images/gdg_algiers.png")} alt="" />
      <RedH1 className="flex justifyCenter">test</RedH1>
    </Center>

    {
      // TODO : ADD LANDING
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
