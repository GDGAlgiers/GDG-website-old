import React, { useState } from "react"
import styled from "styled-components"
import Modal from "../../common/modal/Modal"
import Fade from "react-reveal/Fade"

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




/// Styled components : 

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
  font-weight : 300;
  color: #ffff;
  background-color: var(--green);
  border: none;
  text-transform: uppercase;
  padding: 10px 10px;
  border-radius: 16px;
  text-decoration: none;
  box-shadow: 0px 5px 16px rgba(14, 157, 89, 0.5);
  cursor: pointer;
  outline: none;
  vertical-align: middle;
`
export default FormFun
