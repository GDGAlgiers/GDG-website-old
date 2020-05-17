import React from "react"
import styled from "styled-components"
import Contact from "./contact.js"
import Form from "./form.js"
import NewsLetter from "./newsLetter.js"

const ContactUS = ({content}) => (
  <StyledSection id="contact">
    <BigTitle>{content.title}</BigTitle>
    <div className="wrapper">
      <div className="discription">
        <p>
         {content.description}
        </p>
      </div>
      <div className="contact">
        <Contact content={content.contacts}></Contact>
      </div>

      <div className="form">
        <Form></Form>
      </div>

      <div>
        <img
          className="email"
          alt="email"
          src={require("../../../images/icons/email.svg")}
        ></img>
      </div>
    </div>
    <NewsLetter content={content.newsletter}></NewsLetter>
  </StyledSection>
)
const StyledSection = styled.div`
    margin: 0 auto;
    width: 90%;
  .form {
    float: left;
    width: 38%;
  }
  .contact {
    float: right;
    width: 30%;
    margin-right: 6%;
    margin-top: 2vw;
  }

  .email {
    float: left;
    width: 12%;
    margin-left: 6%;
    padding-top: 5vw;
    animation : floating 2s alternate infinite ease-out ; 
    @keyframes floating {
      from{
        transform : translateY(0);
      }
      to {
        transform : translateY(-3vh);
      }
    }
  }
  .wrapper:after {
    content: "";
    display: table;
    clear: both;
  }
  .discription {
    padding-left: 2%;
    width: 50%;
  }

  @media (max-width: 768px) {
    margin-left: 5%;
    margin-right: 5%;
    .wrapper {
      margin-bottom : 20%;
    }
    .email {
      display: none;
    }
    .form {
      width: 90%;
      margin-left: 5%;
    }
    .contact {
      width: 100%;
    }
    .discription {
      margin-left: 5%;
      margin-right: 5%;
      width: 95%;
    }
  }
`
const BigTitle = styled.h1`
  font-family: var(--font-header);
  font-size: 3.5rem;
  margin-left: 2%;
  @media screen and (max-width: 768px) {
    padding: 1rem;
    font-size: 0.5;
  }
`
export default ContactUS
