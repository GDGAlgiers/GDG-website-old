/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"


import Header from "./header"
import Footer from "./footer"
import "../../styles/layout.css"
import "../../styles/main.css"

import styled from "styled-components"


const Main = styled.main`
  padding-top: 10vh;
  @media screen and (max-width: 768px) {
    padding-top: 13vh;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <Main>{children}</Main>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Layout
