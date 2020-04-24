import React from "react"
import styled from "styled-components"
import heroImage from "../../../images/heroimage.jpg"
import { navigate } from "gatsby"

const desc = `GDG Algiers is a local community located at the National Higher School of Computer Science, Algiers, Algeria.
It is part of the big global community of developers "Google Developers Group" (960 communities worldwide)
Our community is made up of passionate developers and motivated young students.
It has started from the simple status of GTUG (Google Technology User Group) in 2011 to become today one of the most active GDGs in the MENA region.
GDG Algiers Chapter hosts a variety of technical activities for developers through the different events we organize, aiming to help the developers community get the latest technology updates.`

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

export default function Description({ id }) {
  return (
    <Wrapper id="about">
      <DescDiv>
        <div>
          <BiggerH1>About</BiggerH1>
          <BiggerH1>GDG Algiers</BiggerH1>
        </div>
        <p
          style={{
            whiteSpace: "pre-line",
            lineHeight: 1.45,
          }}
        >
          {desc}
        </p>
      </DescDiv>
      <HeroCard img={heroImage} onClick={
        e => {
          e.preventDefault()
          navigate('/community')
        }
      }>
        <h1 style={{ width: "100%", textAlign: "center" }}>
          GDG Algiers in numbers
        </h1>
        <StatsHolder>
          <Column>
            <h1>2000</h1>
            <h2>participants</h2>
          </Column>
          <Column>
            <h1>88</h1>
            <h2>events</h2>
          </Column>
          <Column>
            <h1>280</h1>
            <h2>members</h2>
          </Column>
          <Column>
            <h1>20</h1>
            <h2>tracks</h2>
          </Column>
        </StatsHolder>
      </HeroCard>
    </Wrapper>
  )
}
