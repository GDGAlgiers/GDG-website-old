import React from "react"
import styled from "styled-components"

const Footer = () => (
  <StyledFooter>
    <div className="row1">
      <div className="content">
        <p>About</p>
        <div>
          <p>WTM Algiers</p>
          <p>Google Developers Group</p>
          <p>Women Techmakers Algiers</p>
        </div>
      </div>
      <div className="content">
        <p>Information</p>
        <div>
          <p>Join Us</p>
          <p>Sponsorship</p>
          <p>Submit Talk</p>
          <p>Code of Conduct</p>
        </div>
      </div>
      <div className="social-media">
        <p>Follow Us</p>
        <div className="sm">
          <a>
            <img
              src={require("../../images/icons/instagram.svg")}
              alt="facebook link"
            />
          </a>
          
          <a>
            <img
              src={require("../../images/icons/twitter.svg")}
              alt="facebook link"
            />
          </a>
          <a>
            <img
              src={require("../../images/icons/facebook.svg")}
              alt="facebook link"
            />
          </a>
        </div>
      </div>
    </div>
    <div className="row2">
      <h2>Made with ❤️ and ☕</h2>
      <p>©️ GDG ALGIERS 2020</p>
    </div>
    <div className="row3">
      <h2>Intrested in sponsoring GDG Algiers ?</h2>
      <StyledButton>GET IN TOUCH</StyledButton>
    </div>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  width: 100vw;
  min-height: 10vh;
  padding-top: 24px;
  background: #fafafa;
  font-family: var(--font), sans-serif;
  border-top: 10px solid var(--green);
  justify-content: start;
  display: flex;
  flex-direction: column;

  align-items: center;

  .row3 {
    overflow-x: hidden;
    padding: 50px;
    justify-content: space-evenly;
    display: flex;
    width: 100%;
    background-color: var(--green);
    h2 {
      margin: 0;
      color: white;
      font-family: inherit;
    }
  }
  .row2 {
    margin-top: 20px;
    text-align: center;
    font-family: inherit;
    font-size: 100%;
    font-weight: 550;
  }
  .row1 {
    display: flex;
    width: 80%;
    justify-content: space-evenly;
    .content {
      align-items: flex-start;
      width: 33%;
      display: flex;
      justify-content: space-evenly;
      p {
        margin: 0;
        font-size: 100%;
        color: var(--green);
        font-family: inherit;
        font-size: 100%;
        font-weight: 550;
      }
      div {
        p {
          margin-bottom: 10px;
          color: var(--grey-dark);
          font-family: inherit;
          font-size: 100%;
          font-weight: 550;
        }
      }
    }
    .social-media {
      display: flex;
      width: 33%;
      p {
        margin: 0;
        font-size: 100%;
        color:var(--green);
        font-family: inherit;
        font-size: 100%;
        font-weight: 550;
      }
      .sm {
        margin-left: 10%;
        a {
          opacity: 0.6;
          margin-right: 20px;
          cursor: pointer;
          width: 20%;
          transition: 1s ease;
          &:hover {
            opacity: 1;
          }
          img {
            margin: 0;
            width: 20px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .row1 {
      flex-direction: column;
      width: 100%;
      .content {
        margin-bottom: 10%;
        align-items: center;
        width: 100%;
        flex-direction: column;
        p {
          text-align: center;
          margin-bottom: 5%;
          font-size: 100%;
        }
        div {
          p {
            text-align: center;
          }
        }
      }
      .social-media {
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        .sm {
          margin: 0;
          margin-left: 20px;
          margin-top: 20px;
        }
      }
    }
  }
`
const StyledButton = styled.button`
  padding: 10px 30px;
  border-radius: 50px;
  font-family: inherit;
  font-weight: bold;
  background-color: white;
  color: var(--green);
  border: none;
  cursor: pointer;
  outline: none;
  transition: 1s ease;
  &:hover {
    transform: scale(1.2);
  }
`

export default Footer
