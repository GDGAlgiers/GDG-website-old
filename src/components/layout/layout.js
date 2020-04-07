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

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

`

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <main style ={{
          paddingTop:"10vh",
          minHeight : "100vh"
        }}>{children}</main>
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
