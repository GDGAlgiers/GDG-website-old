import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import { BoxIcons } from "../../common/images"
import Draggable from "react-draggable"
import ContextConsumer from '../../../context/Context'
const DraggableBox = ({
  initTransform,
  animationDurationMs,
  animationDelayMs = 0,
  color,
  id,
  className,
  imageSrc,
  altImg,
}) => {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      setMounted(true)
    }, animationDelayMs + animationDurationMs + 100)
  })
  let keyFrameName = `${id}-animtion`
 return <ContextConsumer>
    {({data})=> {
      if(data.isMobile) {
        return <Box
        color={color}
        id={id}
        className={className}
        transform={initTransform}
        mountAnimation={css`
          transform-origin: left bottom;
          opacity : 0;
          animation: ${keyFrameName} ${animationDurationMs + "ms"}
            ${animationDelayMs + "ms"} ease-out forwards 1;
          @keyframes ${keyFrameName} {
            from {
              opacity : 0;
              ${initTransform}
            }
            to {
              transform: translateX(0px) translateY(0) rotateZ(0deg);
              opacity : 1;
            }
          }
        `}
      >
        <img src={imageSrc} alt={altImg} />
      </Box>
      }else {
        return  mounted ? (
          <Draggable>
            <Box
              color={color}
              id={id}
              className={className}
              style={{
                cursor: "move",
                position: "relative",
                zIndex: 99999,
              }}
            >
              <img src={imageSrc} alt={altImg} />
            </Box>
          </Draggable>
        ) : <Box
        color={color}
        id={id}
        className={className}
        transform={initTransform}
        mountAnimation={css`
          transform-origin: left bottom;
          animation: ${keyFrameName} ${animationDurationMs + "ms"}
            ${animationDelayMs + "ms"} ease-out forwards 1;
          @keyframes ${keyFrameName} {
            from {
              ${initTransform}
            }
            to {
              transform: translateX(0px) translateY(0) rotateZ(0deg);
            }
          }
        `}
      >
        <img src={imageSrc} alt={altImg} />
      </Box>
      }
    }}
  </ContextConsumer>
  ;
}
export default function AnimatedBoxes() {
  return (
    <Boxes>
      <BoxRow>
        <DraggableBox
          id="light-blue"
          className="box"
          color="#8CD5FF"
          initTransform={css`
            transform: translateX(-100vw) translateY(200px) rotateZ(-90deg);
          `}
          animationDurationMs={1000}
          animationDelayMs={4200}
          imageSrc={BoxIcons.icon2}
          altImg="light-blue"
        ></DraggableBox>
      </BoxRow>
      <BoxRow>
        <DraggableBox
          color="#FFAA9C"
          id="light-red"
          className="box"
          initTransform={css`
            transform: translateX(-100vw) translateY(-200px) rotateZ(-90deg);
          `}
          animationDurationMs={1000}
          animationDelayMs={4000}
          imageSrc={BoxIcons.cross}
          altImg="light-red"
        ></DraggableBox>

        <DraggableBox
          color="#0D9D58"
          id="green"
          className="box"
          initTransform={css`
            transform: translateX(-100vw) translateY(400px) rotateZ(-90deg);
          `}
          animationDurationMs={1000}
          animationDelayMs={3500}
          imageSrc={BoxIcons.losange}
          altImg="green"
        ></DraggableBox>
      </BoxRow>
      <BoxRow>
        <DraggableBox
          color="#212121"
          id="black"
          className="box"
          initTransform={css`
            transform: translateX(-100vw) translateY(-400px) rotateZ(90deg);
          `}
          animationDurationMs={1000}
          animationDelayMs={3000}
          imageSrc={BoxIcons.arrow}
          altImg="black"
        ></DraggableBox>
        <DraggableBox
          color="#EA4334"
          id="red"
          className="box"
          initTransform={css`
            transform: translateX(0px) translateY(-100vh) rotateZ(40deg);
          `}
          animationDurationMs={1000}
          animationDelayMs={2500}
          imageSrc={BoxIcons.triangle}
          altImg="red"
        ></DraggableBox>
        <DraggableBox
          color="#7DE9D0"
          id="light-green"
          className="box"
          initTransform={css`
            transform: translateX(100vw) translateY(400px) rotateZ(90deg);
          `}
          animationDurationMs={1000}
          animationDelayMs={2000}
          imageSrc={BoxIcons.plus}
          altImg="light-green"
        ></DraggableBox>
      </BoxRow>
      <BoxRow>
        <DraggableBox
          color="#F2E877"
          id="light-yellow"
          className="box"
          initTransform={css`
            transform: translateX(-100vw) translateY(0px) rotateZ(90deg);
          `}
          animationDurationMs={1000}
          animationDelayMs={1500}
          imageSrc={BoxIcons.icon1}
          altImg="light-yellow"
        ></DraggableBox>
        <DraggableBox
          color="#4285F4"
          id="blue"
          className="box"
          initTransform={css`
            transform: translateX(-100vw) translateY(0px) rotateZ(90deg);
          `}
          animationDurationMs={1000}
          animationDelayMs={1000}
          imageSrc={BoxIcons.icon3}
          altImg="blue"
        ></DraggableBox>
        <DraggableBox
          color="#E0E0E0"
          id="grey"
          className="box"
          initTransform={css`
            transform: translateX(-100vw) translateY(0px) rotateZ(90deg);
          `}
          animationDurationMs={1000}
          animationDelayMs={500}
          imageSrc={BoxIcons.percentage}
          altImg="blue"
        ></DraggableBox>
        <DraggableBox
          color="#FCBC05"
          id="yellow"
          className="box"
          initTransform={css`
            transform: translateX(-100vw) translateY(0px) rotateZ(90deg);
          `}
          animationDurationMs={1000}
          animationDelayMs={0}
          imageSrc={BoxIcons.dots}
          altImg="yellow"
        ></DraggableBox>
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
  opacity: 1;
  transition: box-shadow 0.5s ease;
  display: flex;

  img {
    margin: auto;
    max-width: 50%;
    transition: transform 0.5s ease;
    
  }
  ${props => props.transform}
  ${props => props.mountAnimation}
  &:hover {
    
    -webkit-box-shadow: 10px 10px 22px 0px rgba(0,0,0,0.2);
-moz-box-shadow: 10px 10px 22px 0px rgba(0,0,0,0.2);
box-shadow: 10px 10px 22px 0px rgba(0,0,0,0.2);

    img{
      transform : scale(1.1)
    }
   
  }

  background-color: ${props => props.color || "var(--green)"};
  @media screen and (max-width: 1024px) {
    height: 25vw;
    width: 25vw;
  }
`
