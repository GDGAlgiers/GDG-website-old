import React from "react"
import styled from "styled-components"
function SocialMedia() {
  return (
    <WrapperSM>
      <a className="item" href="https://www.facebook.com/GDGAlgiers/" target="_blank" rel="noreferrer">
        <img
          src={require("../../images/icons/facebook.svg")}
          alt="facebook"
          title="facebook"
        />
      </a>
      <a className="item" href="https://twitter.com/gdg_algiers" target="_blank" rel="noreferrer">
        <img
          src={require("../../images/icons/twitter.svg")}
          alt="twitter"
          title="twitter"
        />
      </a>
      <a className="item" href="https://www.instagram.com/gdg_algiers/" target="_blank" rel="noreferrer">
        <img
          src={require("../../images/icons/instagram.svg")}
          alt="instagram"
          title="instagram"
        />
      </a>
      <a className="item" href="https://www.linkedin.com/company/gdg-algiers/" target="_blank" rel="noreferrer">
        <img
          src={require("../../images/icons/linkedin.svg")}
          alt="linkedin"
          title="linkedin"
        />
      </a>
    </WrapperSM>
  )
}

const WrapperSM = styled.div`
  display: flex;
  margin : auto;
 justify-content : flex-start;
 align-items : center;
  .item {
    margin-right: 10px;
  }
  a.item {
    img {
      width: 40px;
      padding: 10px;
      border-radius: 16px;
      border: 1px solid #4285f4;
    }
  }
  @media screen and (max-width: 768px) {
    justify-content : center;
  }
`
export default SocialMedia
