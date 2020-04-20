import React from "react"
import styled from "styled-components"
const Form = () => (
  <div>
    <StyledForm>
      <form
        className="contact-form"
        name="contact-form"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="bot-field" />
        <div className="input-row">
          <input name="name" placeholder="Name" type="text" id="name" />
        </div>
        <div className="input-row">
          <input name="email" placeholder="Email" type="email" id="email" />
        </div>
        <div>
          <textarea
            className="textarea"
            name="message"
            rows="5"
            placeholder="Type something..."
            id="message"
          />
        </div>
        <div>
          <StyledButton className="button-row" type="submit">
            Send
          </StyledButton>
        </div>
      </form>
    </StyledForm>
  </div>
)
const StyledForm = styled.form`
  font-family: var(--font);
  input[type="text"],
  textarea,
  input[type="email"] {
    width: 100%;
    padding-left: 2vw;
    font-size : 20px;
    border: solid 2px #e0e0e0;
    background-color: #ffffff;
    resize: none;
    color: #9d9c9c;
    border-radius: 0.5vw;
    transition : border-color 1s ease;
    &:focus{
      border-color : var(--green);
    }
  }

  input[type="text"],
  input[type="email"] {
    height: 3vw;
  }

  .textarea {
    height: 16vw;
    padding-top: 1vw;
  }

  input:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  .contact-form {
    width: 40vw;
    height: 38vw;
    font-size: 2vw;
    line-height: 1.22;
    margin: 0 auto;
    padding: 2vw;
    top: "";
  }

  .input-row,
  .textarea-row,
  .button-row {
    margin-bottom: 1vw;
  }

  @media (max-width: 768px) {
    input[type="text"],
    input[type="email"] {
      height: 8vw;
      border-radius: 5vw;
    }

    textarea {
      border-radius: 2vw;
    }

    .textarea {
      height: 35vw;
      padding-top: 1vw;
    }

    .contact-form {
      width: 80vw;
      height: 80vw;
      font-size: 3vw;
    }

    .input-row,
    .textarea-row,
    .button-row {
      margin-bottom: 3vw;
    }
  }
`
const StyledButton = styled.button`
  width: 100%;
  height: 3vw;
  border: none;
  background-color: #0d9d58;
  font-family: Montserrat;
  font-size : 20px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  margin-top: 1vw;
  border-radius: 3vw;
  @media (max-width: 768px) {
    height: 8vw;
    border-radius: 5vw;
  }
`
export default Form
