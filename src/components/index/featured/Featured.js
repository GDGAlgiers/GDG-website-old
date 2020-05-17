import React from "react"
import styled from "styled-components"

const Featured = ({content}) => {
  return (
    <Wrapper>
      <h1 style={{ textAlign: "center" }}>{content.title}</h1>
      <Flex>{content.items.map(item => 
         <GreyImg
         src={require(`../../../images/featured_in/${item.image}`)}
         alt={item.alt}
         width="100%"
         height="100%"
         loading="lazy"
       ></GreyImg>
      )}</Flex>
    </Wrapper>
  )
}

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


export default Featured
