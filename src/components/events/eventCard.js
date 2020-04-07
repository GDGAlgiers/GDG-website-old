import React, { Component } from "react"
import styled from "styled-components"

const Card = styled.div`
  height: ${props => props.height};
  border-radius: 16px;
  border: solid 1px #707070;
  font-family: Roboto;
  overflow: hidden;
  margin: 1rem;
  display: flex;
  position: relative;
  cursor: pointer;
  &:hover .backImg {
    width: 100%;
    transition: width 0.5s cubic-bezier(0.4, 0, 0.6, 1);

    &:after {
      opacity: 1;
    }
  }
`

const BackImg = styled.div`
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 50%;
  background: ${props => `url("${props.img}")`};
  transition: width 0.5s cubic-bezier(0.4, 0, 0.6, 1);
  :after {
    content: "\A";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: all 1s;
    -webkit-transition: all 1s;
  }
`
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50%;
  width: 50%;
  padding: 1rem 1rem 0 1rem;
  height: 100%;
  overflow: auto;
`

const Seperator = styled.div`
  height: 1px;
  width: 80%;
  border-bottom: 1px solid black;
  align-self: center;
`

const Details = styled.h4`
  padding: 0.5rem;
  margin: 0.5rem 0 0.5rem 0;
  align-self: center;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
    transition: background 0.3s cubic-bezier(0.4, 0, 0.6, 1);
  }
`

export default class EventCard extends Component {
  render() {
    const event = this.props.event
    return (
      <Card height={this.props.height}>
        <BackImg className="backImg" img={this.props.event.img}></BackImg>
        <Flex>
          <h2 style={{ margin: "0", fontFamily: "var(--font-header)" }}>
            {this.props.event.title}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-header)",
            }}
          >
            {this.props.event.date}
          </p>
          <p style={{ overflow: "auto", flexGrow: 1 }}>
            {this.props.event.content}
          </p>
          <Seperator></Seperator>
          <Details>More details ></Details>
        </Flex>
      </Card>
    )
  }
}
