import React from "react"
import styled from "styled-components"
import {featuredIn} from '../common/images'
const Wrapper = styled.section`
  width: 100%;
  padding-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding : var(--mobileSectionPadding);
  }
`

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const features = [
  {
    img: featuredIn.hive,
    alt: "Hive Digit",
  },
  {
    img: featuredIn.radio,
    alt: "Radio Algerie",
  },
]

const GreyImg = styled.img`
  filter: grayscale(100%);
  max-height: 150px;
  max-width: 300px;
  object-fit: contain;
  padding: 0 1vw;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.6, 1);
  &:hover {
    filter: none;
  }
`

const renderFeatures = features.map(featuredin => (
  <GreyImg
    src={featuredin.img}
    alt={featuredin.alt}
  ></GreyImg>
))

const Featured = () => {
  return (
    <Wrapper>
      <h1 style={{ textAlign: "center" }}> We’ve been featured in</h1>
      <Flex>{renderFeatures}</Flex>
    </Wrapper>
  )
}

export default Featured
