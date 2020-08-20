import React from "react"
import SEO from "../components/layout/seo"
import styled from "styled-components"
import Button from "../components/common/button/GDGButton"
import { navigate } from "gatsby"
import { emojis } from "../components/common/images"
import Fade from 'react-reveal/Fade'
const NotFoundPage = () => (
  <>
    <SEO title="Not found" />
    <Fade>
      <NotFoundWrapper>
        <div className="notfound__text">
          <h2 className="number__404">404</h2>
          <h2>We couldn't find the page you are looking for</h2>
        </div>
        <Button
          title="TAKE ME BACK"
          outlined={true}
          onClick={() => navigate("/")}
        ></Button>
      </NotFoundWrapper>
    </Fade>
  </>
)

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  img {
    max-height: 600px;
    max-width: 700px;
  }
  .notfound__text {
    display: flex;
    max-width: 100%;
    position: relative;
    justify-content: baseline;
    align-items: center;
    text-align: center;
  }
  .number__404 {
    padding: 5px 10px;
    border-right: 3px solid rgba(0, 0, 0, 0.2);
    margin-right: 20px;
  }
  h2 {
    font-size: 2rem;
    font-family: var(--font-header);
    color: var(--grey) !important;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    h2 {
      font-size: 1rem;
    }
  }
`
export default NotFoundPage
