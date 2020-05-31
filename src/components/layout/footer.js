import React from "react"
import styled from "styled-components"
import { ExternalLink } from "../common/utils"
import { navigate } from "gatsby"
import { emojis } from "../common/images"
const Footer = ({content}) => (
  <StyledFooter>
    <div className="row1">
      <div className="content">
        <p>About</p>
        <div>
          <ExternalLink
            url="https://www.wtm-algiers.tech/"
            text="WTM Algiers"
          ></ExternalLink>
          <ExternalLink
            url="https://developers.google.com/community/gdg"
            text="Google Developers Group"
          ></ExternalLink>
          <ExternalLink
            url="https://www.womentechmakers.com/"
            text="Women Techmakers"
          ></ExternalLink>
        </div>
      </div>
      <div className="content">
        <p>Information</p>
        <div>
          <ExternalLink url="#" text="Join Us"></ExternalLink>
          <ExternalLink url="#" text="Sponsorship"></ExternalLink>
          <ExternalLink url="#" text="Submit Talk"></ExternalLink>
          <ExternalLink url="#" text="Code of Conduct"></ExternalLink>
        </div>
      </div>
      <div className="social-media">
        <p>Follow Us</p>
        <div className="sm">
          {content.socialmedia.map(item => <ExternalLink
            url={item.url}
            icon={require(`../../images/icons/${item.icon}`)}
            text={item.alt}
          />)}
        </div>
      </div>
    </div>
    <div className="row2">
      <h2>
        Made with {emojis.HeartEmoji} and {emojis.CoffeeEmoji}
      </h2>
      <p>
        <span role="img" aria-label="copyright">
          ©️
        </span>{" "}
        GDG ALGIERS 2020
      </p>
    </div>
    <div className="row3">
      <h2>Intrested in sponsoring GDG Algiers ?</h2>
      <StyledButton
        onClick={e => {
          e.preventDefault()
          navigate("#contact")
        }}
      >
        GET IN TOUCH
      </StyledButton>
    </div>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  width: 100vw;
  min-height: 10vh;
  padding-top: 24px;
  position: relative;
  z-index: 100;
  background: inherit;
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
    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      h2 {
        text-align: center;
        margin-bottom: 20px;
      }
      align-items: center;
      button {
        margin-top: 20px;
      }
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
    flex-wrap: wrap;
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
        a {
          display: block;
          cursor: pointer;
          text-decoration: none;
          margin-bottom: 10px;
          color: inherit;
          font-family: inherit;
          font-size: 100%;
          font-weight: 550;
          &:visited {
            color: var(--grey);
          }
        }
      }
    }
    .social-media {
      display: flex;
      width: 33%;
      p {
        margin: 0;
        font-size: 100%;
        color: var(--green);
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
      width: 100%;
      .content {
        margin-bottom: 10%;
        align-items: center;
        justify-content: start;
        width: 50%;
        flex-direction: column;
        p {
          text-align: left;
          margin-bottom: 5%;
          font-size: 100%;
        }
        div {
          a {
            text-align: center;
          }
        }
      }
      .social-media {
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
        .sm {
          margin: 0;
          margin-left: 20px;
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

  background: #0d9d58;
  box-shadow: 12px 12px 29px #0b844a, -12px -12px 29px #0fb666;
  color: white;
  border: none;
  cursor: pointer;
  outline: none;
  transition : background 0.2s ease-in;
  &:hover {
    background :#11c16c;
  }
`

export default Footer
