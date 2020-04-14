import React from "react"
import styled from "styled-components"
import Button from '../common/button/GDGButton'
import {navigate} from 'gatsby'
const Wrapper = styled.section`
  width: 100%;
  height: 90vh;
  padding-top : 10%;
  padding-left : 10%;
  display : flex ;
  background-color: white;
  .landing-title {
    font-size : 5rem;
    .matter:hover {
      border-bottom : 5px solid var(--yellow);
    }
  }

  @media screen and (max-width: 768px) {
    padding-left : 0;
    justify-content : flex-end;
    flex-direction : column-reverse;

  .landing-title {
    width : 90%;
    margin : 20px auto;  
    text-align : center; 
    font-size : 2rem;
  }
  }
`
const Buttons = styled.div`

display : flex ; 

.gap {
  width : 40px;
  visibility : hidden;
}

@media screen and (max-width: 768px) {
  width : 90%;
  margin : auto;
  justify-content : center;
  .gap {
  width : 5%;
}
}
`
const Content = styled.div`
  position : relative;
  z-index : 3 ;
  width : 60%;
  @media screen and (max-width: 768px) {
    width : 90%;
    margin :0 auto;
  }
`
const AnimatedBoxes =styled.canvas`
  width : 100vw;
  height: 100vh;
  
  z-index : 1;
  position : absolute;
  background : transparent;
  opacity : 0.1;
  top : 0px;
  @media screen and (max-width: 768px) {
    position : relative;
    width : 100%;
    height : 60%;
    
  }
`;

export default function Landing({ id }) {

  const canvas = <AnimatedBoxes></AnimatedBoxes>

  return <Wrapper>
   
    <Content>
    <h1 className="landing-title">
      We do cool things that <span className="matter">matter</span>
    </h1>
    <Buttons>
      <Button title="ABOUT US" outlined={true} onClick={()=> navigate("#about")}></Button>
      <div className="gap"></div>
      <Button title="UPCOMING EVENTS" outlined={false} onClick={()=> navigate("#events")}></Button>
    </Buttons>
    </Content>
    {canvas}
  </Wrapper>
}
