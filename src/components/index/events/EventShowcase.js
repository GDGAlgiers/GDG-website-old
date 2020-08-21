import React from "react"
import styled from "styled-components"
import Button from "../../common/button/GDGButton"
import { navigate } from "gatsby"
import Line from '../../common/Line'
function EventShowcase({ event }) {
  return (

   
    <StyledWrapper bg={require(`../../../images/events/${event.img}`)}>
      <div className="content">
        <div className="content__text">
          <h1>{event.title}</h1>
          <div
              style={{ display: "flex", marginBottom: "20px" }}
            >
              <Line style={{ width: "30%", marginRight: "1vw" }}></Line>
              <Line style={{ width: "10%", marginRight: "1vw" }}></Line>
              <Line style={{ width: "60%" }}></Line>
            </div>
          <p style={{display : "flex"}}>
            <span style={{marginRight : 20}}>
              <img
                src={require("../../../images/icons/gps.svg")}
                alt="location"
                width="20px"
              />
            </span>{" "}
            {event.location}
          </p>
        </div>

        <Button
          title="See details 🠖"
          outlined={true}
          onClick={e => {
            e.preventDefault()
            navigate(event.url)
          }}
        ></Button>
      </div>
    </StyledWrapper>
  
  )
}

///Styled Components

//linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),
const StyledWrapper = styled.div`
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  box-shadow : 0px 5px 16px rgba(0,0,0,0.4);
  height: 100%;
  min-height: 60vh;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  margin: 20px;
  .content {
    flex: 1;
    border-radius: 16px;
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%;
    opacity: 0;
    transition: opacity 280ms ease-in;
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000;
    -webkit-transform: translate3d(0, 0, 0);
    -webkit-transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000;
    transform: translate3d(0, 0, 0);
    transform: translateZ(0);
    .content__text {
      p {
        margin: 0;
        color: white;
      }
    }
    button {
      align-self: flex-end;
    }
  }

  .content:hover,
  .content:focus {
    opacity: 1;
    backdrop-filter: blur(4px);
    background : linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) );
  }
`

export default EventShowcase