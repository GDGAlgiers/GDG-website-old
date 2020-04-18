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
     <img src={require('../images/404.webp')} width="40%"></img>
      <h2>We could'nt find the page you are looking for <Emoji data="🥺"></Emoji></h2>
      <Button title="TAKE ME BACK" outlined={true} onClick={()=> navigate("/")}></Button>
    </NotFoundWrapper>
  </Layout>
)

const NotFoundWrapper = styled.div`
display : flex;
flex-direction : column;
justify-content : center ;
align-items : center;
height : 100vh;
animation : enterandbounce 1s  ease forwards;
    @keyframes enterandbounce {
      0% {
        transform : translateY(-100vh)
      }
      40%{
        transform : translateY(0%)
      }
      80%{
        transform : translateY(-3vh)
      }
      100%{
        transform : translateY(0%)
      }
    }
h2 {
  font-size : 2rem;
  color : var(--green)
}
@media screen and (max-width: 768px) {
  width : 100%;
  h2 {
    font-size : 1rem;
  }
}
`
export default NotFoundPage
