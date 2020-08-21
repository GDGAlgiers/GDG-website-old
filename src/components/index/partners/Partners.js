import React from "react"
import styled from "styled-components"
import Line from "../../common/Line"
import Zoom from "react-reveal/Zoom"
const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
  }
`

const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const Img = styled.img`
  max-height: 350px;
  max-width: 350px;
  object-fit: contain;
  margin: auto 0;
  flex: 1;
  cursor: pointer;
  padding: 10px 1vw;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.6, 1);
  @media screen and (max-width: 768px) {
    margin: 20px;
  }
`

const BigTitle = styled.h1`
  font-family: var(--font-header);
  font-size: 3.5rem;
  align-self: flex-start;
  @media screen and (max-width: 768px) {
    padding: 1rem;
    font-size: 2.5rem;
  }
`
const Partners = ({ content }) => {
  return (
    <div>
      <Wrapper id="partners" className="section">
        <BigTitle>{content.title}</BigTitle>
        <Flex style={{marginLeft : "20px", marginBottom: "3vh" }}>
          <Line style={{ width: "30%", marginRight: "1vw" }}></Line>
          <Line style={{ width: "10%", marginRight: "1vw" }}></Line>
          <Line style={{ width: "5%" }}></Line>
        </Flex>
        <Flex style={{ justifyContent: "space-evenly" }}>
          {content.items.map(item => (
            <Zoom>
              <a href={item.link} target="_blank" rel="noreferrer">
                <Img
                  src={require(`../../../images/partners/${item.image}`)}
                  alt={item.alt}
                  loading="lazy"
                  width="100%"
                  height="100%"
                  title={item.alt}
                ></Img>
              </a>
            </Zoom>
          ))}
        </Flex>
        <Flex id="sponsors">
          <BigTitle>{content.sponsors.title}</BigTitle>
          <Flex style={{marginLeft : "20px", marginBottom: "3vh"  }}>
            <Line style={{ width: "10%", marginRight: "1vw" }}></Line>
            <Line style={{ width: "20%", marginRight: "1vw" }}></Line>
            <Line style={{ width: "20%" }}></Line>
          </Flex>
        </Flex>

        <Flex style={{ justifyContent: "space-evenly" }}>
          {content.sponsors.items.map((item, index) => (
            <Zoom>
              <Img
                src={require(`../../../images/sponsors/${item.image}`)}
                alt={item.alt}
                loading="lazy"
                width="100%"
                title={item.alt}
                height="100%"
              ></Img>
            </Zoom>
          ))}
        </Flex>
      </Wrapper>
    </div>
  )
}

export default Partners
