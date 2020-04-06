import React, { Component } from "react"
import styled from "styled-components"
import Ripple from "../Ripple"

const GDGBtn = styled.button`
  position: relative;
  overflow: hidden;
  font-family: var(--font);
  font-weight: 600;
  font-size: 16px;
  background: ${props =>
    props.outlined ? "transparent" : "var(--green-light)"};
  border-style: none;
  background-image: ${props =>
    props.outlined
      ? "url(" +
        `"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='7' ry='7' stroke='%230d9d58ff' stroke-width='5' stroke-dasharray='10%2c 20' stroke-dashoffset='50' stroke-linecap='square'/%3e%3c/svg%3e"` +
        ")"
      : "none"};

  border-radius: 7px;
  height: 48px;
  min-width: 64px;
  padding: 0 16px;
  transition: background-image 0.2s ease-in-out;
  border-radius: 7px;
  color: var(--green);
  &:hover {
    background-image: ${props =>
      props.outlined
        ? `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='7' ry='7' stroke='%230d9d58ff' stroke-width='5' stroke-dasharray='0' stroke-dashoffset='50' stroke-linecap='square'/%3e%3c/svg%3e")`
        : "none"};
    transition: background-image 0.2s ease-in-out;
  }
`

export class GDGButon extends Component {
  render() {
    return (
      <GDGBtn outlined={this.props.outlined}>
        {this.props.title.toUpperCase()}
        <Ripple />
      </GDGBtn>
    )
  }
}

export default GDGButon
