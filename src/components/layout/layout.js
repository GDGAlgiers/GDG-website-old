/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../../styles/layout.css"
import "../../styles/main.css"
import styled from "styled-components"
import content from "../../content/layout.json"

const Layout = ({ children }) => {
  // const [theme, setTheme] = useState("light")
  // const [animate, setAnimate] = useState(false)
  // useEffect(() => {
  //   let storedTheme = localStorage.getItem("theme") || "light"
  //   setTheme(storedTheme)
  // }, [])
  return (
    <div className={`light-theme`}>
      <Header />
      <div style={{ backgroundColor: "inherit" }}>
        {/* <ThemeSwitch
          title={theme === "light" ? "switch to dark" : "switch to light"}
          onClick={e => {
            let newdata = theme === "light" ? "dark" : "light"
            setTheme(newdata)

            localStorage.setItem("theme", newdata)

            setAnimate(true)
            setTimeout(() => setAnimate(false), 500)
          }}
        >
          {theme === "dark" ? (
            <img
              className={animate ? "shrink-grow" : null}
              src={require("../../images/icons/sun.svg")}
              alt="sun"
            />
          ) : (
            <img
              className={animate ? "shrink-grow" : null}
              src={require("../../images/icons/moon.svg")}
              alt="moon"
            />
          )}
        </ThemeSwitch> */}
        <Main style={{ backgroundColor: "inherit", minHeight: "100vh" }}>
          <noscript
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
              fontSize: 18,
              fontFamily: "Roboto, sans-serif",
              margin: 0,
              opacity: 1,
              letterSpacing: "3px",
            }}
          >
            Activate JavaScript to see the site correctly
          </noscript>
          {children}
        </Main>
        <Footer content={content.footer}></Footer>
      </div>
    </div>
  )
}

const Main = styled.main`
section {
  padding-top : 10vh;
  @media screen and (max-width: 768px) {
    padding-top:13vh;
  }
}
`
// const ThemeSwitch = styled.button`
//   position: fixed;
//   top: 2.5vh;
//   right: 10px;
//   height: 50px;
//   width: 50px;
//   border: none;
//   z-index: 9999;
//   cursor: pointer;
//   transform: scale(0);
//   outline: none;
//   background-color: transparent;
//   animation: grow 1s ease forwards 1;
//   opacity: 0.5;
//   img {
//     margin: 0;
//   }
//   transition: opacity 1s ease;
//   @keyframes grow {
//     from {
//       transform: scale(0);
//     }
//     to {
//       transform: scale(1);
//     }
//   }
//   img.shrink-grow {
//     animation: shrinkgrow 0.5s ease-out forwards 1 !important;

//     @keyframes shrinkgrow {
//       from {
//         transform: scale(0);
//       }
//       to {
//         transform: scale(1);
//       }
//     }
//   }
//   &:hover {
//     opacity: 1;
//     img {
//       animation: rotate1 2s linear forwards infinite;

//       @keyframes rotate1 {
//         0% {
//           transform: rotateZ(0deg);
//         }
//         25% {
//           transform: rotateZ(30deg);
//         }
//         75% {
//           transform: rotateZ(-30deg);
//         }
//         100% {
//           transform: rotateZ(0deg);
//         }
//       }
//     }
//   }
//   @media screen and (max-width: 768px) {
//     top: 12vh;
//   }
// `

export default Layout
