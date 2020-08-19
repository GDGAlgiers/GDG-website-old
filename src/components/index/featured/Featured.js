import React from "react"
import styled from "styled-components"

const Featured = ({content}) => {
  return (
    <Wrapper id="featured" className="section">
      <h1 style={{ textAlign: "center" }}>{content.title}</h1>
      <Flex>{content.items.map(item => 
         <Img
         src={require(`../../../images/featured_in/${item.image}`)}
         alt={item.alt}
         width="100%"
         height="100%"
         loading="lazy"
       ></Img>
      )}</Flex>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content : center;
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


const Img = styled.img`
 
  max-height: 150px;
  max-width: 300px;
  object-fit: contain;
  margin : auto 0 ;

  padding: 10px 1vw;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.6, 1);
  @media screen and (max-width: 768px) {
    margin : 20px;
  }
`


export default Featured
