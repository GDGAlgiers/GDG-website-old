import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"


export default function Description({ content }) {
  return (
    <Wrapper id="about">
      <DescDiv>
        <div>
  <BiggerH1>{content.header.text1}</BiggerH1>
  <BiggerH1>{content.header.text2}</BiggerH1>
        </div>
        <p
          style={{
            whiteSpace: "pre-line",
            lineHeight: 1.45,
          }}
        >
          {content.description}
        </p>
      </DescDiv>
      <HeroCard img={require(`../../../images/${content.hero.image}`)} onClick={
        e => {
          e.preventDefault()
          navigate(content.hero.link)
        }
      }>
        <h1 style={{ width: "100%", textAlign: "center" }}>
          {content.hero.title}
        </h1>
        <StatsHolder>
          {
            content.hero.numbers.map(item => {
              return <Column>
              <h1>{item.data}</h1>
              <h2>{item.title}</h2>
            </Column>
            })
          }
        </StatsHolder>
      </HeroCard>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  background-color: inherit;
`

const BiggerH1 = styled.h1`
  font-size: 3.5rem;
`

const HeroCard = styled.div`
  width: 100vw;
  height: 40vh;
  background-image: ${props => `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("${props.img}");`};
  background-position: center;
  background-size: cover;
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;
  cursor : pointer;
  color: white;
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
`
const DescDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: var(--sectionPadding);
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding : var(--mobileSectionPadding)
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
