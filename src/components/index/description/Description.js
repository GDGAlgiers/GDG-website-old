import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import Fade from "react-reveal/Fade"
export default function Description({ content }) {
  return (
    <Wrapper id="about">
      <DescDiv>
        <Fade top>
          <div className="header">
            <h2 className="title__header">{content.header.text1}</h2>
            <img src={require("../../../images/gdg_algiers.png")} alt="gdg" />
          </div>
        </Fade>

        <p
          className="description"
          style={{
            whiteSpace: "pre-line",
            lineHeight: 1.45,
          }}
        >
          <Fade>{content.description}</Fade>
        </p>
      </DescDiv>
     
      <Fade>
        <HeroCard
          img={require(`../../../images/${content.hero.image}`)}
          onClick={e => {
            e.preventDefault()
            navigate(content.hero.link)
          }}
        >
          <h1 style={{ width: "100%", textAlign: "center" }}>
            {content.hero.title}
          </h1>
          <StatsHolder>
            {content.hero.numbers.map(item => {
              return (
                <Column>
                  <h1>{item.data}</h1>
                  <h2>{item.title}</h2>
                </Column>
              )
            })}
          </StatsHolder>
        </HeroCard>
      </Fade>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  background-color: inherit;
`

const BiggerH1 = styled.h1`
  font-size: 3.5rem;
  font-weight: 500;
  font-family: var(--font);
  color: var(--grey);
`

const HeroCard = styled.div`
  width: 100vw;
  height: 40vh;
  background-image: ${props =>
    `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("${props.img}");`};
  background-position: center;
  background-size: cover;
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white !important;
  min-height: 40vh;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    height: 60vh;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white !important;
`
const DescDiv = styled.div`
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  box-shadow : 0px 0px 16px rgba(0,0,0,0.1);
  padding: var(--sectionPadding);
  .header {
    display : flex;
    margin: 0 auto;
    justify-content :center;
    align-items :center;
    width :100%;
    padding-top: 50px;
    .title__header {
      font-weight : 500;
      margin-right : 10px;
      color : var(--grey)
    }
    img {
      max-height: 40px;
    }
  }
  .description {
    flex: 1;
    padding :50px;
    text-align :center;
    width : 70%;
    margin : auto;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: var(--mobileSectionPadding);
    .header {
      margin: 0;
      padding-top: 20px;
      flex-wrap : wrap;
    }
    .description {
      width : 100%;
      padding :20px;
    }
  }
`

const StatsHolder = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
`
