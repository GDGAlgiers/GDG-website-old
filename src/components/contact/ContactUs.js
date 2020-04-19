import React from "react"
import styled from "styled-components"
import Contact from "./contact.js"
import Form from "./form.js"
import NewsLetter from "./newsLetter.js"

const ContactUS = () => (
  <StyledSection>
    <BigTitle>Contact us</BigTitle>
    <div className="wrapper">
      <div className="discription">
        <p>
          We are always happy to offer advice and further information so if you
          have any questions, complete the form below and a member of the team
          will be in touch very soon.
        </p>
      </div>
      <div className="contact">
        <Contact></Contact>
      </div>

      <div className="form">
        <Form></Form>
      </div>

      <div>
        <img
          className="email"
          src={require("../../images/icons/email.svg")}
        ></img>
      </div>
    </div>
    <NewsLetter></NewsLetter>
  </StyledSection>
)
const StyledSection = styled.div`
  margin-left: 8%;
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
