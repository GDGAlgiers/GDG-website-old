import React from "react"
import PropTypes from "prop-types"
import { logos } from "./components/common/images"
export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}

        <div
          key={`loader`}
          id="___loader"
          style={{
            alignItems: "center",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        >
          <img width="100px" src={logos.PhoneGDGLogo} style={{ margin: 0 }} />
          <p
            style={{
              fontSize: 18,
              fontFamily: "sans-serif",
              margin: 0,
              opacity: 0.5,
            }}
          >
            Epicness is on the way
          </p>
         <img src={logos.loading} width="100px" style={{ margin:"0 auto" , fontFamily:"sans-serif" , color:"#fafafa" , fontSize:14}} alt="loading..."></img>
        </div>

 
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />

        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
