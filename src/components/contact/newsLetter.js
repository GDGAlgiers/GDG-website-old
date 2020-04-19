import React from "react"
import styled from "styled-components"
const NewsLetter = () => (
  <StyledDiv>
    <h1 className="title">Be a part of our community</h1>
    <p className="info">Sign up for to GDG Algiers newsletter.</p>
    <div>
      <input name="email" placeholder="Email" type="email" id="emailAdr" />
      <StyledButton type="submit">SIGN UP</StyledButton>
    </div>
  </StyledDiv>
)
const StyledDiv = styled.div`
  font-family: var(--font);
  height: auto;
  width: 100%;
  text-align: center;
  color: #212121;
  margin-top: 2vw;
  padding-top: 3vw;
  padding-bottom: 6vw;
  margin-bottom: -2.4vw;
  input[type="email"] {
    height: 3vw;
    width: 26vw;
    border: solid 1px #ea4334;
    color: #9d9c9c;
    padding-left: 1vw;
    vertical-align: middle;
  }
  .title {
    font-size: 3rem;
  }
  .info {
    font-size: 1.1rem;
    margin-bottom: 1.4rem;
  }
  @media (max-width: 768px) {
    text-align: left;
    padding-left: 4vw;
    padding-right: 4vw;
    padding-bottom: 12vw;
    input[type="email"] {
      height: 8vw;
      width: 100%;
      border: solid 1px #ea4334;
      color: #9d9c9c;
      padding-left: 4vw;
      border-radius: 1.6vw;
      margin-bottom: 3vw;
    }

    .title {
      font-size: 2.8rem;
      margin-bottom: 3vw;
    }
    .info {
      font-size: 0.8rem;
      margin-bottom: 1.2vw;
    }
  }
`
const StyledButton = styled.button`
  font-family: Montserrat;
  height: 3vw;
  width: 8vw;
  color: #ffff;
  background-color: #ea4334;
  border: none;
  vertical-align: middle;
  @media (max-width: 768px) {
    height: 8vw;
    width: 38%;
    border-radius: 1.6vw;
  }
`
export default NewsLetter
