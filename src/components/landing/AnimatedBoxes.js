import React from "react"
import styled, { css } from "styled-components"
import {BoxIcons} from '../common/images'
import { bounce } from "../common/animation/animations"
export default function AnimatedBoxes() {
  return (
    <Boxes>
      <BoxRow>
        <Box
          color="#8CD5FF"
          id="light-blue"
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
          <img src={BoxIcons.icon2} alt="light-blue" />
        </Box>
      </BoxRow>
      <BoxRow>
        <Box
          color="#FFAA9C"
          id="light-red"
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
          <img src={BoxIcons.cross} alt="light-red" />
        </Box>
        <Box
          color="#0D9D58"
          id="green"
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
          <img src={BoxIcons.losange} alt="green" />
        </Box>
      </BoxRow>
      <BoxRow>
        <Box
          color="#212121"
          id="black"
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
          <img src={BoxIcons.arrow} alt="black" />
        </Box>
        <Box
          color="#EA4334"
          id="red"
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
          <img src={BoxIcons.triangle} alt="red" />
        </Box>
        <Box
       
          color="#7DE9D0"
          id="light-green"
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
          <img src={BoxIcons.plus} alt="light-green" />
        </Box>
      </BoxRow>
      <BoxRow>
        <Box
          color="#F2E877"
          id="light-yellow"
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
          <img src={BoxIcons.icon1} alt="light-yellow" />
        </Box>
        <Box
          color="#4285F4"
          id="blue"
          className="box"
          transform={css`
            transform: translateX(-100vw) translateY(0px) rotateZ(90deg);
          `}
          mountAnimation={css`
            transform-origin: left bottom;
            animation: shoot7 1s 1s ease-out forwards 1;
          `}
        >
          <img src={BoxIcons.icon3} alt="blue" />
        </Box>
        <Box
          color="#E0E0E0"
          id="grey"
          className="box"
          transform={css`
            transform: translateX(-100vw) translateY(0px) rotateZ(90deg);
          `}
          mountAnimation={css`
            transform-origin: left bottom;
            animation: shoot7 1s 0.5s ease-out forwards 1;
          `}
        >
          <img src={BoxIcons.percentage} alt="grey" />
        </Box>
        <Box
          color="#FCBC05"
          id="yellow"
          className="box"
          transform={css`
            transform: translateX(-100vw) translateY(0px) rotateZ(90deg);
          `}
          mountAnimation={css`
            transform-origin: left bottom;
            animation: shoot7 1s ease-out forwards 1;
          `}
        >
          <img src={BoxIcons.dots} alt="yellow" />
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
