import React from "react"
import styled from "styled-components"
import Button from "../common/button/GDGButton"
import { navigate } from "gatsby"
import AnimatedBoxes from "./AnimatedBoxes"
const Wrapper = styled.section`
  width: 100%;
  height: 90vh;
  padding-top: 10%;
  padding-left: 10%;
  display: flex;
  background-color: white;
  .landing-title {
    font-size: 5rem;
    animation : enter 1s ease forwards;
    @keyframes enter {
      from {
        transform : translateX(-100%);
      }
      to{
        transform : translateX(0%)
      }
    }
    .matter {
      opacity :0;
      animation : fadeIn 1s 2.5s ease forwards;
    @keyframes fadeIn {
      from {
        
        opacity : 0;
      }
      to{
        
        opacity : 1;
      }
    }
    }
    .matter:hover {
      border-bottom: 5px solid var(--yellow);
    }
  }

  @media screen and (max-width: 1024px) {
    padding-left: 0;
    padding-top: 0%;
    justify-content: flex-end;
    flex-direction: column-reverse;

    .landing-title {
      width: 90%;
      margin: 20px auto;
      text-align: center;
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 370px) {
    padding-left: 0;
    padding-top: 4vh;
    justify-content: flex-end;
    flex-direction: column-reverse;

    .landing-title {
      width: 90%;
      margin: 20px auto;
      text-align: center;
      font-size: 2rem;
    }
  }
`
const Buttons = styled.div`
  display: flex;

  .gap {
    width: 40px;
    visibility: hidden;
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
    margin: auto;
    justify-content: center;
    .gap {
      width: 5%;
    }
  }
  transform : translateY(-100vh);
  animation : enterandbounce 1s 2s ease forwards;
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
`
const Content = styled.div`
  position: relative;
  z-index: 3;
  width: 60%;
  @media screen and (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;
  }
`
const Canvas = styled.div`
  width: 100vw;
  padding-top: 10vh;

  z-index: 1;
  position: absolute;
  background: transparent;
  opacity: 1;
  top: 10%;
  @media screen and (max-width: 1024px) {
    padding-top: 0;
    position: relative;
    width: 100%;
    top: -3vh;
    min-height: 60%;
  }
  opacity : 0;
  animation : fadeIn 1s 2s ease forwards;
    @keyframes fadeIn {
      from {
        opacity : 0;
      }
      to{
        opacity : 1;
      }
    }
`

export default function Landing({ id }) {
  return (
    <Wrapper>
      <Content>
        <h1 className="landing-title">
          We do cool things that <span className="matter">matter</span>
        </h1>
        <Buttons>
          <Button
            title="ABOUT US"
            outlined={true}
            onClick={() => navigate("#about")}
          ></Button>
          <div className="gap"></div>
          <Button
            title="UPCOMING EVENTS"
            outlined={false}
            onClick={() => navigate("#events")}
          ></Button>
        </Buttons>
      </Content>
      <Canvas>
        <AnimatedBoxes></AnimatedBoxes>
      </Canvas>
    </Wrapper>
  )
}
