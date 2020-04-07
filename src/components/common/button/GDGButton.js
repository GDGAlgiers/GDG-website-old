import React, { Component } from "react"
import styled from "styled-components"
import Ripples from "react-ripples"

const GDGBtn = styled.button`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  outline: none;
  font-family: var(--font-header);
  font-weight: 600;
  font-size: 16px;
  background: ${props =>
    props.outlined ? "transparent" : "var(--green-light)"};
  border-style: none;
  background-image: ${props =>
    props.outlined
      ? "url(" +
        `"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='7' ry='7' stroke='%230d9d58ff' stroke-width='3' stroke-dasharray='10%2c 20' stroke-dashoffset='50' stroke-linecap='square'/%3e%3c/svg%3e"` +
        ")"
      : "none"};

  height: 48px;
  min-width: 64px;
  padding: 0 16px;
  transition: background-image 0.2s ease-in-out;
  border-radius: 7px;
  color: var(--green);
  &:hover {
    background-image: ${props =>
      props.outlined
        ? `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='7' ry='7' stroke='%230d9d58ff' stroke-width='3' stroke-dasharray='0' stroke-dashoffset='50' stroke-linecap='square'/%3e%3c/svg%3e")`
        : "none"};
    transition: background-image 0.2s ease-in-out;
  }
`
const rippleColor = props =>
  props.outlined ? "rgba(125, 233, 208, 0.25)" : "rgba(13, 157, 88, 0.25)"
export class GDGButon extends Component {
  render() {
    return (
      <div style={{ borderRadius: "5px", overflow: "hidden" }}>
        <Ripples
          color={
            this.props.outlined
              ? "rgba(125, 233, 208, 0.25)"
              : "rgba(13, 157, 88, 0.25)"
          }
        >
          <GDGBtn outlined={this.props.outlined}>
            {this.props.title.toUpperCase()}
          </GDGBtn>
        </Ripples>
      </div>
    )
  }
}

export default GDGButon
