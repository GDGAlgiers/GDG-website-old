import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import styled from "styled-components";
import Button from '../components/common/button/GDGButton'
import {navigate} from 'gatsby'
import {Emoji} from "../components/common/utils" 
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFoundWrapper>
      <h1>404</h1>
      <h2>We could'nt find the page you are looking for <Emoji data="🥺"></Emoji></h2>
      <Button title="TAKE ME BACK" outlined={true} onClick={()=> navigate("/")}></Button>
    </NotFoundWrapper>
  </Layout>
)

const NotFoundWrapper = styled.div`
display : flex;
flex-direction : column;
justify-content : flex ;
align-items : center;
height : 100vh;
h1 {
  font-size : 20rem;
}
h2 {
  font-size : 2rem;
  color : var(--green)
}
`
export default NotFoundPage
