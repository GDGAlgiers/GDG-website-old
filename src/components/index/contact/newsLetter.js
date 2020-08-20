import React from "react"
import styled from "styled-components"

import Fade from "react-reveal/Fade"

const NewsLetter = () => {
  return (
    <StyledDiv>
      <Fade bottom>
        <h1 className="title">Be a part of our community</h1>
        <p className="info">
          Create an Account & join our
          <strong> CHAPTER </strong>
          on the GDG Community's online platform
        </p>
        <StyledButton
            href="https://gdg.community.dev/gdg-algiers/"
            target="_blank"
          >
            JOIN NOW
          </StyledButton>
      </Fade>
    </StyledDiv>
  )
}
const StyledDiv = styled.div`
  font-family: var(--font);
  height: auto;
  width: 100%;
  text-align: center;
  .title {
    font-size: 3rem;
  }
  .info {
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 2.5rem;
  }
  @media (max-width: 768px) {
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
const StyledButton = styled.a`
  display : block;
  max-width : 250px;
  margin:20px auto;
  font-family: var(--font-header);
  color: #ffff;
  background-color: #ea4334;
  border: none;
  padding: 20px;
  border-radius: 16px;
  text-decoration: none;
  box-shadow: 0px 5px 16px rgb(234, 68, 53, 0.5);
  cursor: pointer;
  outline: none;
  vertical-align: middle;
`
export default NewsLetter
