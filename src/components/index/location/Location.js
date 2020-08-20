import React from "react"
import locationIllustration from "../../../images/icons/map.svg"
import OnlineMeeting from "../../../images/icons/online.svg"
import styled from "styled-components"
import Line from "../../common/Line"
import Fade from "react-reveal/Fade"
import SocialMedia from "../../common/SocialMedia"
function Location({ location }) {
  return (
    <StyledWrapper id="location" className="section">
      <Fade>
        <BigTitle>Where to find us? </BigTitle>
        <div style={{ display: "flex", margin: "0 30px" }}>
          <Line style={{ width: "30%", marginRight: "1vw" }}></Line>
          <Line style={{ width: "10%", marginRight: "1vw" }}></Line>
          <Line style={{ width: "5%" }}></Line>
        </div>
        <Content>
          <Fade left>
            <a
              href="https://goo.gl/maps/FzizsYwgo6uHdrdaA"
              target="_blank"
              rel="noopener noreferrer"
              title="go to map"
            >
              <img src={locationIllustration} alt="map" />
            </a>
          </Fade>

          <div>
            <Fade right>
              <h1>We are part of the GDG MENA Community</h1>
              <p>One of the most active gdg communities in Algeria...</p>
              <p>We are mostly active in the capital Algiers.</p>
              <br />
              <p>
                Looking for exact coordinates?{" "}
                <span>
                  <a
                    href="https://goo.gl/maps/FzizsYwgo6uHdrdaA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    find us here 🠖
                  </a>
                </span>
              </p>
            </Fade>
          </div>
        </Content>

        <Content direction="reversed">
          <Fade right>
            <a
              href="https://gdg.community.dev/gdg-algiers/"
              target="_blank"
              rel="noopener noreferrer"
              title="go to map"
            >
              <img src={OnlineMeeting} alt="online" />
            </a>
          </Fade>

          <div>
            <Fade left>
              <h1 style={{ color: "var(--blue)" }}>
                We are actively present online
              </h1>
              <p>
                One of the most active gdg communities on the internet in
                Algeria
              </p>
              <div>
                <p>We are present on on all social media platform</p>
                <SocialMedia></SocialMedia>
              </div>

              <br />
              <p>
                Looking to join us online?
                <span>
                  <a
                    href="https://gdg.community.dev/gdg-algiers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color : "var(--blue)"}}
                  >
                    {" "}Join the platform
                  </a>
                </span>
              </p>
            </Fade>
          </div>
        </Content>
      </Fade>
    </StyledWrapper>
  )
}

/// styled components

const StyledWrapper = styled.section`
  font-family: var(--font-header);
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
const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: ${props =>
    props.direction === "reversed" ? "row-reverse" : "row"};
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  h1 {
    font-weight: 500;
    color: #f50057;
  }
  img {
    max-width: 500px;
    max-height: 500px;
    transition: 500ms ease-in;
    &:hover {
      transform: translateY(-10px);
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    margin-top: 20px;
    #contentDivider {
      display: none !important ;
    }
    img {
      max-height: 300px;
      max-width: 300px;
    }
  }
  a {
    text-decoration: none;
    color: #f50057;
  }
`
export default Location
