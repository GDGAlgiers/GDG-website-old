import React from "react"
import styled from "styled-components"
import ReactFormInputValidation from "react-form-input-validation"
import Modal from "../common/modal/Modal"
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      fields: {
        name: "",
        email: "",
        message: "",
      },
      errors: {},
      modalMsg: "",
    }
    this.form = new ReactFormInputValidation(this)
    this.form.useRules({
      name: "required",
      email: "required|email",
      message: "required",
    })
    this.form.onFormSubmit = fields => {
      if (this.hasError()) {
        this.setState({
          showModal: true,
          modalMsg: "Please fix the errors before submiting",
        })
      } else if (this.state.fields.message === "") {
        this.setState({ showModal: true, modalMsg: "fill all form please" })
      } else {
        console.log(fields)
        this.setState({
          showModal: true,
          modalMsg: "Thank you for submiting , we will reach out to you ",
        })
      }
    }
  }
  hasError() {
    return (
      this.state.errors.name ||
      this.state.errors.message ||
      this.state.errors.email
    )
  }
  render() {
    return (
      <div style={{ backgroundColor: "inherit" }}>
        <StyledForm
          className="contact-form"
          name="contact-form"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          onSubmit={e => {
            e.preventDefault()
            this.form.onFormSubmit(this.state.fields)
          }}
        >
          <input type="hidden" name="bot-field" />
          <div className="input-row ">
            <input
              className={`${this.state.errors.name ? "error-border" : ""}`}
              name="name"
              placeholder="Name"
              type="text"
              id="name"
              onBlur={this.form.handleBlurEvent}
              onChange={this.form.handleChangeEvent}
              value={this.state.fields.name}
            />
          </div>
          <p className="error">
            {this.state.errors.name ? this.state.errors.name : ""}
          </p>
          <div className="input-row ">
            <input
              className={`${this.state.errors.email ? "error-border" : ""}`}
              name="email"
              placeholder="Email"
              type="email"
              id="email"
              onBlur={this.form.handleBlurEvent}
              onChange={this.form.handleChangeEvent}
              value={this.state.fields.email}
            />
          </div>
          <p className="error">
            {this.state.errors.email ? this.state.errors.email : ""}
          </p>
          <div>
            <textarea
              className={`textarea ${
                this.state.errors.message ? "error-border" : ""
              }`}
              name="message"
              rows="5"
              placeholder="Type something..."
              id="message"
              onBlur={this.form.handleBlurEvent}
              onChange={this.form.handleChangeEvent}
              value={this.state.fields.message}
            />
          </div>
          <p className="error">
            {this.state.errors.message ? this.state.errors.message : ""}
          </p>
          <div>
            <StyledButton className="button-row" type="submit">
              Send
            </StyledButton>
          </div>
        </StyledForm>
        {this.state.showModal && (
          <Modal
            error={this.hasError() || this.state.fields.message === ""}
            close={e => this.setState({ showModal: false })}
          >
            {this.state.modalMsg}
          </Modal>
        ) }
      </div>
    )
  }
}

const StyledForm = styled.form`
  font-family: var(--font);
  input[type="text"],
  textarea,
  input[type="email"] {
    width: 100%;
    padding-left: 2vw;
    font-size: 20px;
    border: solid 2px #e0e0e0;
    background-color: inherit;
    resize: none;
    color: #9d9c9c;
    border-radius: 0.5vw;
    transition: border-color 1s ease;
    &:focus {
      border-color: var(--green);
    }
    &.error-border {
      border-color: var(--red);
    }
  }

  input[type="text"],
  input[type="email"] {
    height: 3vw;
    margin-bottom: 0;
  }

  .error-border {
    border-color: var(--red);
  }
  .textarea {
    height: 16vw;
    padding-top: 1vw;
    margin-bottom: 0;
  }

  input:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  width: 40vw;
  height: 38vw;
  font-size: 2vw;
  line-height: 1.22;
  margin: 0 auto;
  padding: 2vw;
  top: "";

  .input-row,
  .textarea-row,
  .button-row {
    margin-bottom: 1vw;
  }
  .error {
    font-size: 14px;
    color: var(--red);
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

    width: 80vw;
    height: 80vw;
    font-size: 3vw;

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
  font-family: var(--font-header);
  font-size: 20px;
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
