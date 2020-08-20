import React, { useState } from "react"
import styled from "styled-components"
import Modal from "../../common/modal/Modal"
import Fade from 'react-reveal/Fade';
/// messages 
const INVALID_EMAIL = "Please put a valid email"
const REGISTERING = "Registering..."
const THANKS = "Newsletter not setup yet , please send your email to gdg.algiers@esi.dz"
const NewsLetter = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState({
    isError: true,
    msg: INVALID_EMAIL,
  })
  const [showModal, setShowModal] = useState({ show: false, msg: "" })
  const validEmail = () => {
    let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    if (!valid) setError({ isError: true, msg: INVALID_EMAIL })
    return valid
  }
  const handleSubmit = async e => {
    e.preventDefault()

    if (!validEmail()) {
      setShowModal({ show: true, msg: error.msg })
    } else {
      /// async request to endpoint

      setShowModal({ show: true, msg: REGISTERING })
      setTimeout(() => {
        setError({ isError: false })
        setShowModal({ show: true, msg: THANKS })
      }, 1000)
      setTimeout(() => reset(), 5000)
    }
  }
  const reset = () => {
    setEmail("")
    setError({ isError: true, msg: INVALID_EMAIL })
    setShowModal({ show: false, msg: "" })
  }
  return (
    <StyledDiv>
      <Fade bottom>
      {showModal.show ? (
        <Modal
          error={error.isError}
          close={e => setShowModal(false)}
        >
          {showModal.msg}
        </Modal>
      ) : <div></div>}
      <h1 className="title">Be a part of our community</h1>
      <p className="info">Sign up for to GDG Algiers newsletter.</p>
      <div>
        <input
          name="email"
          placeholder="Email"
          type="email"
          id="emailAdr"
          value={email}
          onChange={e => {
            e.preventDefault()
            setEmail(e.target.value)
          }}
        />
        <StyledButton onClick={handleSubmit}>SIGN UP</StyledButton>
      </div>
      </Fade>
    </StyledDiv>
  )
}
const StyledDiv = styled.div`
  font-family: var(--font);
  height: auto;
  width: 100%;
  text-align: center;
  margin-top: 2vw;
  padding-top: 3vw;
  padding-bottom: 6vw;
  margin-bottom: -2.4vw;
  input[type="email"] {
    height: 3vw;
    width: 26vw;
    background-color: inherit;
    outline-color: transparent;
    border: solid 1px #ea4334;
    color: #9d9c9c;
    padding-left: 1vw;
    vertical-align: middle;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    &:focus {
      background : transparent;
      outline : none;
    }
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
      outline-color: none;
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
  font-family: var(--font-header);
  height: 3vw;
  width: 8vw;
  color: #ffff;
  background-color: #ea4334;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  outline: none;
  vertical-align: middle;
  @media (max-width: 768px) {
    height: 8vw;
    width: 38%;
    border-radius: 1.6vw;
  }
`
export default NewsLetter
