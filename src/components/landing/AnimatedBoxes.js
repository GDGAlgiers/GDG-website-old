import React from "react"
import styled, { css } from "styled-components"
import { bounce } from "../common/animation/animations"

const LightBlueBox = (
  <Box
    color="#8CD5FF"
    id="box1"
    className="box"
    transform={css`
      transform: translateX(-100vw) translateY(200px) rotateZ(-90deg);
    `}
    mountAnimation={css`
      transform-origin: left bottom;
      animation: shoot1 1s 4.2s ease-out forwards 1;
      @keyframes shoot1 {
        from {
          transform: translateX(-100vw) translateY(200px) rotateZ(-90deg);
        }
        to {
          transform: translateX(0px) translateY(0) rotateZ(0deg);
        }
      }
    `}
  >
    <img src={require("../../images/icons/icon2.svg")} alt="" />
  </Box>
)

export default function AnimatedBoxes() {
  return (
    <Boxes>
      <BoxRow>
        <Box
          color="#8CD5FF"
          id="box1"
          className="box"
          transform={css`
            transform: translateX(-100vw) translateY(200px) rotateZ(-90deg);
          `}
          mountAnimation={css`
            transform-origin: left bottom;
            animation: shoot1 1s 4.2s ease-out forwards 1;
            @keyframes shoot1 {
              from {
                transform: translateX(-100vw) translateY(200px) rotateZ(-90deg);
              }
              to {
                transform: translateX(0px) translateY(0) rotateZ(0deg);
              }
            }
          `}
        >
          <img src={require("../../images/icons/icon2.svg")} alt="" />
        </Box>
      </BoxRow>
      <BoxRow>
        <Box
          color="#FFAA9C"
          id="box2"
          className="box"
          transform={css`
            transform: translateX(-100vw) translateY(-200px) rotateZ(-90deg);
          `}
          mountAnimation={css`
            transform-origin: left bottom;
            animation: shoot2 1s 4s ease-out forwards;
            @keyframes shoot2 {
              from {
                transform: translateX(-100vw) translateY(-200px) rotateZ(-90deg);
              }
              to {
                transform: translateX(0px) translateY(0) rotateZ(0deg);
              }
            }
          `}
        >
          <img src={require("../../images/icons/icon2.svg")} alt="" />
        </Box>
        <Box
          color="#7DE9D0"
          id="box3"
          className="box"
          transform={css`
            transform: translateX(-100vw) translateY(400px) rotateZ(-90deg);
          `}
          mountAnimation={css`
            transform-origin: left bottom;
            animation: shoot3 1s 3.5s ease-out forwards 1;
            @keyframes shoot3 {
              from {
                transform: translateX(-100vw) translateY(400px) rotateZ(-90deg);
              }
              to {
                transform: translateX(0px) translateY(0) rotateZ(0deg);
              }
            }
          `}
        >
          <img src={require("../../images/icons/icon2.svg")} alt="" />
        </Box>
      </BoxRow>
      <BoxRow>
        <Box
          color="#212121"
          id="box4"
          className="box"
          transform={css`
            transform: translateX(-100vw) translateY(-400px) rotateZ(90deg);
          `}
          mountAnimation={css`
            transform-origin: left bottom;
            animation: shoot4 1s 3s ease-out forwards 1;
            @keyframes shoot4 {
              from {
                transform: translateX(-100vw) translateY(-400px) rotateZ(90deg);
              }
              to {
                transform: translateX(0px) translateY(0) rotateZ(0deg);
              }
            }
          `}
        >
          <img src={require("../../images/icons/icon2.svg")} alt="" />
        </Box>
        <Box
          color="#EA4334"
          id="box5"
          className="box"
          transform={css`
            transform: translateX(0px) translateY(-100vh) rotateZ(40deg);
          `}
          mountAnimation={css`
            transform-origin: left bottom;
            animation: shoot5 1s 2.5s ease-out forwards 1;
            @keyframes shoot5 {
              from {
                transform: translateX(0px) translateY(-100vh) rotateZ(40deg);
              }
              to {
                transform: translateX(0px) translateY(0) rotateZ(0deg);
              }
            }
          `}
        >
          <img src={require("../../images/icons/icon2.svg")} alt="" />
        </Box>
        <Box
          color="#0D9D58"
          id="box6"
          className="box"
          transform={css`
            transform: translateX(100vw) translateY(400px) rotateZ(90deg);
          `}
          mountAnimation={css`
            transform-origin: left bottom;
            animation: shoot6 1s 2s ease-out forwards 1;
            @keyframes shoot6 {
              from {
                transform: translateX(100vw) translateY(400px) rotateZ(90deg);
              }
              to {
                transform: translateX(0px) translateY(0) rotateZ(0deg);
              }
            }
          `}
        >
          <img src={require("../../images/icons/icon2.svg")} alt="" />
        </Box>
      </BoxRow>
      <BoxRow>
        <Box
          color="#F2E877"
          id="box7"
          className="box"
          transform={css`
            transform: translateX(-100vw) translateY(0px) rotateZ(90deg);
          `}
          mountAnimation={css`
            transform-origin: left bottom;
            animation: shoot7 1s 1.5s ease-out forwards 1;
            @keyframes shoot7 {
              from {
                transform: translateX(-100vw) translateY(0px) rotateZ(90deg);
              }
              to {
                transform: translateX(0px) translateY(0) rotateZ(0deg);
              }
            }
          `}
        >
          <img src={require("../../images/icons/icon1.svg")} alt="" />
        </Box>
        <Box
          color="#4285F4"
          id="box8"
          className="box"
          transform={css`
            transform: translateX(-100vw) translateY(0px) rotateZ(90deg);
          `}
          mountAnimation={css`
            transform-origin: left bottom;
            animation: shoot7 1s 1s ease-out forwards 1;
          `}
        >
          <img src={require("../../images/icons/icon3.svg")} alt="" />
        </Box>
        <Box
          color="#E0E0E0"
          id="box9"
          className="box"
          transform={css`
            transform: translateX(-100vw) translateY(0px) rotateZ(90deg);
          `}
          mountAnimation={css`
            transform-origin: left bottom;
            animation: shoot7 1s 0.5s ease-out forwards 1;
          `}
        >
          <img src={require("../../images/icons/icon2.svg")} alt="" />
        </Box>
        <Box
          color="#FCBC05"
          id="box10"
          className="box"
          transform={css`
            transform: translateX(-100vw) translateY(0px) rotateZ(90deg);
          `}
          mountAnimation={css`
            transform-origin: left bottom;
            animation: shoot7 1s ease-out forwards 1;
          `}
        >
          <img src={require("../../images/icons/icon2.svg")} alt="" />
        </Box>
      </BoxRow>
    </Boxes>
  )
}

const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  position: relative;

  width: 50%;
  left: 40%;
  min-height: 50%;
  top: 10%;

  @media screen and (max-width: 1024px) {
    transform: rotate(180deg);
    width: 100%;
    left: 0%;
    top: 0%;
  }
`

const BoxRow = styled.div`
  height: 25%;
  display: flex;
  justify-content: flex-end;
`

const Box = styled.div`
  position: relative;
  height: 8vw;
  width: 8vw;
  z-index: 1;
  opacity: 0.9;
  transition: opacity 1s ease;
  display: flex;

  img {
    margin: auto;
    max-width: 50%;
  }
  ${props => props.transform}
  ${props => props.mountAnimation}
  &:hover {
    z-index: 99;
    cursor: pointer;
    opacity: 1;
    
    

    /* ${props => {
      if (props.animationOnHover) return props.animationOnHover
      else {
        let defaultAnim = css`
          animation: bounce 0.5s ease infinite alternate;
          ${bounce}
        `
        return defaultAnim
      }
    }} */
  }

  background-color: ${props => props.color || "var(--green)"};
  @media screen and (max-width: 1024px) {
    height: 25vw;
    width: 25vw;
  }
`
