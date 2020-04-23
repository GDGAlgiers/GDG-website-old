import React from 'react'
import { logos } from "./images"
export default function PageLoader({loadingText}) {


    return (
       
        <div
          key={`loader`}
          id="___loader"
          style={{
            alignItems: "center",
            backgroundColor: "inherit",
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
          <img width="100px" height="100px" src={logos.PhoneGDGLogo} style={{ margin: 0 }} alt="gdg-logo" />
          <p
            style={{
              fontSize: 18,
              fontFamily: "sans-serif",
              margin: 0,
              opacity: 0.5,
            }}
          >
            {loadingText}
          </p>
         <img src={logos.loading} width="100px" style={{ margin:"0 auto" , fontFamily:"sans-serif" , color:"#fafafa" , fontSize:14}} alt="loading..."></img>
        </div>
    )
}
