import React from "react"
import styled from "styled-components"
const Contact = () => (
  <StyledDiv>
    <div className="row">
      <div className="img-container">
        <img
          className="img2"
          src={require("../../images/icons/ic-email-48-px.svg")}
        ></img>
      </div>
      <div className="info-container">
        <p className="title">Email</p>
        <p className="info">gdg.algiers@esi.dz</p>
      </div>
    </div>
    <div className="row2">
      <div className="img-container">
        <img className="img2" src={require("../../images/icons/gps.svg")}></img>
      </div>
      <div className="info-container">
        <p className="title">Adresse</p>
        <p className="info">
          BP 68M Oued Smar,
          <span className="br"></span>
          El Herrach Algiers,
          <span className="br"></span>
          16309
        </p>
      </div>
    </div>
    <div className="row">
      <div className="img-container-cl">
        <img
          className="img1"
          src={require("../../images/icons/call.svg")}
        ></img>
      </div>
      <div className="info-container">
        <p className="title">Telephone</p>
        <p className="info">+213 123 456 789</p>
      </div>
    </div>
  </StyledDiv>
)
const StyledDiv = styled.div`
  width: 22vw;
  height: 26vw;
  background-color: #f8f8f8;
  border-radius: 0.5vw;
  margin-bottom: 14vw;
  padding-top: 2.2vw;
  margin-left: 20vw;
  color: #212121;

  .row {
    height: 6vw;
  }
  .row,
  .row2 {
    margin-left: 4vw;
  }
  .row2 {
    height: 8vw;
  }
  .row,
  .row2:after {
    content: "";
    display: table;
    clear: both;
  }
  .title {
    font-size: 1.2rem;
    margin-bottom: 0vw;
  }
  .info {
    font-size: 0.6rem;
    margin-bottom: 0vw;
  }
  .br {
    display: block;
    margin-bottom: -0.4em;
  }
  .img-container {
    float: left;
  }
  .info-container {
    padding-top: 0.5vw;
    margin-left: 1vw;
    float: left;
  }

  .img-container-cl {
    margin-left: 1vw;
    float: left;
  }
  .img1 {
    width: 2vw;
  }
  .img2 {
    width: 3vw;
  }
  @media (max-width: 750px) {
    width: 60vw;
    height: 70vw;
    background-color: #ffff;
    margin-bottom: 14vw;
    padding-top: 7vw;
    padding-left: 4vw;
    margin-left: 20vw;

    .row {
      height: 10vw;
    }
    .row,
    .row2 {
      margin-left: 4vw;
    }
    .row2 {
      height: 22vw;
    }
    .title {
      font-size: 6vw;
      margin-bottom: 2vw;
    }
    .info {
      font-size: 3vw;
    }
    .br {
      display: block;
      margin-bottom: -0.3em;
    }
    .img-container {
      float: left;
    }
    .info-container {
      padding-top: 1vw;
      margin-left: 4vw;
      float: left;
    }

    .img-container-cl {
      margin-left: 1vw;
      float: left;
    }
    .img1 {
      width: 7vw;
    }
    .img2 {
      width: 9vw;
    }
  }
`
export default Contact
