import React from "react"
import styled from "styled-components"
import Fade from 'react-reveal/Fade'
const Contact = ({content}) => (
 
  <StyledDiv>
     <Fade right>
    <div className="row">
      <div className="img-container">
        <img
          className="img2 animated-wigle"
          src={require(`../../../images/icons/${content.email.icon}`)}
          alt="email"
        ></img>
      </div>
      <div className="info-container">
        <p className="title">{content.email.title}</p>
        <a style={{color: "var(--grey)"}} className="info" href={`mailto:${content.email.data?.trim()}`}>{content.email.data}</a>
      </div>
    </div>
    <div className="row2">
      <div className="img-container">
        <img alt="location" className="img2 animated-wigle" src={require(`../../../images/icons/${content.address.icon}`)}></img>
      </div>
      <div className="info-container">
        <p className="title">{content.address.title}</p>
        <p className="info">
         {content.address.data.split(',').map(item =>  <>{item}<span className="br"></span>
         </>)}
        </p>
      </div>
    </div>
    <div className="row">
      <div className="img-container-cl">
        <img
          alt="phone"
          className="img1 animated-wigle"
          src={require(`../../../images/icons/${content.phone.icon}`)}
        ></img>
      </div>
      <div className="info-container">
        <p className="title">{content.phone.title}</p>
        <p className="info">{content.phone.data}</p>
      </div>
    </div>
    </Fade>
  </StyledDiv>
 
)
const StyledDiv = styled.div`
  font-family: var(--font);
  max-width: 28vw;
  height: auto;

  background-color: inherit;
  border-radius: 0.5vw;
  margin-bottom: 14vw;
  padding-top: 2.2vw;

  color: inherit;

  .row {
    height: 6vw;
  }
  .row,
  .row2 {
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
    font-size: 1.6rem;
    margin-bottom: 0.6vw;
  }
  .info {
    font-size: 0.8rem;
    margin-bottom: 0.2vw;
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

  .animated-wigle {
    &:hover {
      animation : wigle 1s alternate infinite linear ; 
    @keyframes wigle {
      0%{
        transform : rotateZ(-10deg);
      }
      50%{
        transform : rotateZ(0deg);
      }
      100% {
        transform : rotateZ(10deg);
      }
    }
    }
    
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
  @media (max-width: 768px) {
    max-width: 60vw;
    height: auto;
    background-color: inherit;
    margin-bottom: 14vw;
    font-family: var(--font);
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
      font-size: 1.6rem;
      margin-bottom: 2vw;
    }
    .info {
      font-size: 0.8rem;
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
      margin-bottom : 20px;
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
