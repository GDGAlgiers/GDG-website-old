import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  width: 100%;
  padding: 5vh;
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

const partners = [
  {
    img: "wtm.png",
    alt: "WTM Algiers",
  },
]

const sponsors = [
  {
    img: "GitHubEducation.svg",
    alt: "Github Education",
  },
]

const GreyImg = styled.img`
  filter: grayscale(100%);
  max-width: 30vw;
  object-fit: contain;
  padding: 0 1vw;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.6, 1);
  &:hover {
    filter: none;
  }
  @media screen and (max-width: 768px) {
    max-width: 80vw;
  }
`

const renderPartners = partners.map(featuredin => (
  <GreyImg
    src={require(`../../images/partners/${featuredin.img}`)}
    alt={featuredin.alt}
  ></GreyImg>
))

const renderSponsors = sponsors.map(featuredin => (
  <GreyImg
    src={require(`../../images/sponsors/${featuredin.img}`)}
    alt={featuredin.alt}
  ></GreyImg>
))

const BigTitle = styled.h1`
  font-family: var(--font-header);
  font-size: 3.5rem;
  align-self: flex-start;
  @media screen and (max-width: 768px) {
    padding: 1rem;
    font-size: 2.5rem;
  }
`

const Line = styled.div`
  &:after {
    content: " ";
    display: block;
    align-self: flex-start;
    border-top: 2px solid var(--green);
    border-bottom: 2px solid var(--green);
    border-radius: 2px;
  }
`
const Partners = () => {
  return (
    <div>
      <Wrapper>
        <BigTitle>Our community partners</BigTitle>
        <Flex style={{ marginBottom: "3vh" }}>
          <Line style={{ width: "30%", marginRight: "1vw" }}></Line>
          <Line style={{ width: "10%", marginRight: "1vw" }}></Line>
          <Line style={{ width: "5%" }}></Line>
        </Flex>
        <Flex style={{ justifyContent: "space-evenly" }}>{renderPartners}</Flex>
        <Flex>
          <BigTitle>Our Sponsors</BigTitle>
        </Flex>

        <Flex style={{ justifyContent: "space-evenly" }}>{renderSponsors}</Flex>
      </Wrapper>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6397.405219325686!2d3.172649597364618!3d36.70568361550312!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e522f19b578df%3A0xd6e74be7191a6758!2sGDG%20Algiers!5e0!3m2!1sen!2sdz!4v1587142697549!5m2!1sen!2sdz"
        width="100%"
        style={{ height: "50vh" }}
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  )
}

export default Partners