import React, { useState } from "react"
import styled from "styled-components"
import Modal from "../../common/modal/Modal"
import Fade from "react-reveal/Fade"
import useForm from "../../../hooks/useForm"


const initForm = {
  name :"",
  email:"",
  message:""
}
const sendEmail = emailData =>
  fetch("http://localhost/api/v1/contact", {
    method: "POST",
    headers: [["Content-Type", "application/json"]],
    body: JSON.stringify(emailData),
  })

function hasError(errors) {
  return errors.name || errors.message || errors.email
}

const FormFun = props => {
  const [values,setValues] =useState(initForm)
  const [errors,setErrors] = useState(initForm)
  const [showModal, setShowModal] = useState(false)
  const [modalMsg, setModalMsg] = useState("")
  const [submited, setSubmited] = useState(false)

  /// handlers
  const handleChange = e => setValues({...values, [e.target.name]:e.target.value})
  const resetValues = ()=> setValues(initForm)
  const resetErrors = ()=> setErrors(initForm)
  const handleSubmit = e => {
    e.preventDefault()
    let err = {
      name : "",
      email : "",
      message :""
    }
    if (!values.name) {
      err.name = "The name field is required"
    }
    if (!values.email) {
      err.email = "The email field is required"
   
    }
    if (!values.message) {
      err.message = "The message field is required"
    }

    if (hasError(err)) {
      setErrors(err)
      setModalMsg("Please fix the errors before submiting")
      setSubmited(false)
      setShowModal(true)
    } else {
      /// no errors so can send
      setSubmited(false)
      setModalMsg("We are sending your email !")
      setShowModal(true)
      sendEmail(values)
        .then(res => {
          setSubmited(true)
          setModalMsg("Your email was sent correctly, Thank you!")
          setShowModal(true)
        })
        .catch(err => {
          setSubmited(true)
          setModalMsg(`Looks like an error occured while sending your email here is the error message, it might help:
            ${err.message}`)
          setShowModal(true)
        })
        .finally(() => {
          resetValues()
          resetErrors()
        })

    }
  }
  return (
    <div style={{ backgroundColor: "inherit" }}>
      <StyledForm
        className="contact-form"
        name="contact-form"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <Fade bottom>
          <input type="hidden" name="bot-field" />
          <div className="input-row ">
            <input
              className={`${errors.name ? "error-border" : ""}`}
              name="name"
              placeholder="Name"
              type="text"
              id="name"
              onChange={handleChange}
              value={values.name}
            />
          </div>
          <p className="error">{errors.name ? errors.name : ""}</p>
          <div className="input-row ">
            <input
              className={`${errors.email ? "error-border" : ""}`}
              name="email"
              placeholder="Email"
              type="email"
              id="email"
              onChange={handleChange}
              value={values.email}
            />
          </div>
          <p className="error">{errors.email ? errors.email : ""}</p>
          <div>
            <textarea
              className={`textarea ${errors.message ? "error-border" : ""}`}
              name="message"
              rows="5"
              placeholder="Type something..."
              id="message"
              onChange={handleChange}
              value={values.message}
            />
          </div>
          <p className="error">{errors.message ? errors.message : ""}</p>
          <div>
            <StyledButton className="button-row" type="submit">
              send message
            </StyledButton>
          </div>
        </Fade>
      </StyledForm>
      {showModal && (
        <Modal
          error={!submited}
          close={e => setShowModal(false)}
        >
          {modalMsg}
        </Modal>
      )}
    </div>
  )
}
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
      errors: {
        name: "",
        email: "",
        message: "",
      },
      modalMsg: "",
      submited: false,
    }
  }
  onFormSubmit = fields => {
    let errors = {
      name: "",
      email: "",
      message: "",
    }
    if (!fields.name) {
      errors = { ...errors, name: "The name field is required" }
    }
    if (!fields.email) {
      errors = { ...errors, email: "The email field is required" }
    }
    if (!fields.message) {
      errors = { ...errors, message: "The message field is required" }
    }

    if (hasError(errors)) {
      this.setState({
        errors: errors,
        showModal: true,
        submited: false,
        modalMsg: "Please fix the errors before submiting",
      })
    } else if (fields.message === "") {
      this.setState({
        submited: false,
        showModal: true,
        modalMsg: "fill all form please",
      })
    } else {
      sendEmail({
        name: this.state.fields.name,
        email: this.state.fields.email,
        message: this.state.fields.message,
      })
        .then(res => {
          console.log(res)
          this.setState({
            fields: {
              name: "",
              email: "",
              message: "",
            },
            errors: {
              name: "",
              email: "",
              message: "",
            },
            submited: true,
            showModal: true, // thank you
            modalMsg: "Your email was sent correctly, Thank you!",
          })
        })
        .catch(err => {
          this.setState({
            fields: {
              name: "",
              email: "",
              message: "",
            },
            errors: {
              name: "",
              email: "",
              message: "",
            },
            submited: true,
            showModal: true, // thank you
            modalMsg: `Looks like an error occured while sending your email here is the error message, it might help:
                    ${err.message}
                `,
          })
        })
    }
  }

  handleChange(e) {
    this.setState({
      fields: { ...this.state.fields, [e.target.name]: [e.target.value] },
      errors: { ...this.state.errors, [e.target.name]: "" },
    }) // removing the error
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
            this.onFormSubmit(this.state.fields)
          }}
        >
          <Fade bottom>
            <input type="hidden" name="bot-field" />
            <div className="input-row ">
              <input
                className={`${this.state.errors.name ? "error-border" : ""}`}
                name="name"
                placeholder="Name"
                type="text"
                id="name"
                onChange={e => this.handleChange(e)}
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
                onChange={e => this.handleChange(e)}
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
                onChange={e => this.handleChange(e)}
                value={this.state.fields.message}
              />
            </div>
            <p className="error">
              {this.state.errors.message ? this.state.errors.message : ""}
            </p>
            <div>
              <StyledButton className="button-row" type="submit">
                send message
              </StyledButton>
            </div>
          </Fade>
        </StyledForm>
        {this.state.showModal && (
          <Modal
            error={!this.state.submited}
            close={e => this.setState({ showModal: false })}
          >
            {this.state.modalMsg}
          </Modal>
        )}
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

  width: 90%;
  font-size: 2vw;
  line-height: 1.22;
  margin: 0 auto;
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
      padding: 20px 30px;
    }

    textarea {
      border-radius: 2vw;
    }

    .textarea {
      height: 35vw;
      padding: 30px;
    }

    width: 100%;
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
  display: block;
  width: 100%;
  margin: auto;
  font-family: var(--font-header);
  font-size: 1.3rem;
  color: #ffff;
  background-color: var(--green);
  border: none;
  text-transform: uppercase;
  padding: 5px 10px;
  border-radius: 16px;
  text-decoration: none;
  box-shadow: 0px 5px 16px rgba(14, 157, 89, 0.5);
  cursor: pointer;
  outline: none;
  vertical-align: middle;
`
export default FormFun
