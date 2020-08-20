import React from "react"
import SEO from "../../components/layout/seo"

const IndexPage = () => (
  <>
    <SEO title="WTM20" />
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <a
        href="https://www.wtm-algiers.tech"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          marginTop: "10vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={require("../../images/partners/wtm.png")}
          alt="wtm logo"
          style={{ margin: "auto", maxWidth: "90%" }}
          loading="lazy"
        ></img>
      </a>
    </div>
  </>
)

export default IndexPage
