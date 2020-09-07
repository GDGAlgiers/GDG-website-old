import React from "react"
import styled from "styled-components"
import Button from "../../common/button/GDGButton"
import { navigate } from "gatsby"
import AnimatedBoxes from "./AnimatedBoxes"
import { logos } from "../../common/images"
import Fade from "react-reveal/Fade"
export default function Landing({ content }) {
  const { PhoneGDGLogo } = logos
  return (
    <Wrapper>
      <Content>
        <img
          src={PhoneGDGLogo}
          alt="gdg algiers"
          title="GDG Algiers"
          className="brand"
          loading="eager"
        ></img>

        <h1 className="landing-title">{content.title}</h1>

        <Fade top delay={1000}>
          <Buttons>
            <Button
              title={content.buttonLeft.text}
              outlined={true}
              onClick={e => {
                e.preventDefault()
                navigate(content.buttonLeft.link)
              }}
            ></Button>
            <div className="gap"></div>

            <Button
              title={content.buttonRight.text}
              outlined={false}
              onClick={e => {
                e.preventDefault()
                navigate(content.buttonRight.link)
              }}
            ></Button>
          </Buttons>
        </Fade>
      </Content>
      <Canvas>
        <AnimatedBoxes></AnimatedBoxes>
      </Canvas>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  padding-left: 10%;
  display: flex;
  background-color: inherit;
  .landing-title {
    font-size: 5rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 0;
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
  @media screen and (max-width: 768px) {
    padding: 0 !important;
  }
  @media screen and (max-width: 370px) {
    padding: 0;
    padding-left: 0;

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
  position: relative;
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
`
const Content = styled.div`
  position: relative;
  z-index: 4;
  width: 60%;
  .brand {
    position: relative;
    margin: 0;
    max-width: 100px;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;
    margin-top: 2vh;
    text-align: center;
    .brand {
    }
  }
`
const Canvas = styled.div`
  width: 100vw;
  margin-top: 2vh;

  z-index: 3;
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
  opacity: 1;
`
