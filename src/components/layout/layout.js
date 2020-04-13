/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../../styles/layout.css"
import "../../styles/main.css"

import styled,{ createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

`
const Main = styled.main`
  padding-top : 10vh;
  @media screen and (max-width: 768px) {
    padding-top : 13vh;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <Main>{children}</Main>
        <Footer>
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
