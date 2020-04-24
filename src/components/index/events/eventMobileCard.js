import React, { Component } from "react"
import styled from "styled-components"
import {navigate} from 'gatsby'
const Flex = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${props => props.height};
  overflow: auto;
  justify-content: center;
  cursor: pointer;
`
const LogoCard = styled.div`
  background-size: cover !important;
  background: ${props => `url("${props.img}")`} center;
  height: 100%;
  width: 100%;
`

const LogoHolder = styled.div`
  position: absolute;
  height: 30%;
  width: 70%;
  top: 0;
  left: 15%;
  padding: 1rem;
  border-radius: 16px;
  box-shadow: 0 5px 6px -3px rgba(0, 0, 0, 0.2),
    0 9px 12px 1px rgba(0, 0, 0, 0.14), 0 3px 16px 2px rgba(0, 0, 0, 0.12);
  background: white;
`

const TextHolder = styled.div`
  margin: 20% 0 0 0;
  height: 100%;
  width: 100%;
  background-color: #f7f7f7;
  border-radius: 16px;
  color :#212121;
  padding: 35% 1rem 0 1rem;
  display: flex;
  flex-direction: column;
`

const Seperator = styled.div`
  height: 1px;
  width: 80%;
  border-bottom: 1px solid black;
  align-self: center;
`

const Details = styled.h4`
  padding: 0.4rem;
  margin: 0.5rem 0 0.5rem 0;
  align-self: end;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
    transition: background 0.3s cubic-bezier(0.4, 0, 0.6, 1);
  }
`

export default class eventMobileCard extends Component {
  render() {
    const event = this.props.event
    return (
      <Flex height={this.props.height} onClick={e=> {
        e.preventDefault()
        navigate(this.props.event.url)
      }}>
        <LogoHolder>
          <LogoCard img={event.logo}></LogoCard>
        </LogoHolder>
        <TextHolder>
          <h2 style={{ marginBottom: "0.5rem" }}>{event.title}</h2>
          <p
            style={{
              fontSize: "0.9rem",
            }}
          >{`${event.date.days} ${event.date.month} ${event.date.year}`}</p>
          <p
            style={{
              fontSize: "0.9rem",
              whiteSpace: "pre-line",
              overflow: "auto",
              flexGrow: 1,
            }}
          >
            {event.content}
          </p>
          <Seperator></Seperator>
          <Details>More details ></Details>
        </TextHolder>
      </Flex>
    )
  }
}
