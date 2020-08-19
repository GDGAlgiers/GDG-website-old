import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import { dropShadow } from "../common/effects"
import { logos, Menu as m } from "../common/images"
import ContextConsumer from "../../context/Context"

const activeStyle = {
  opacity: 1,
}
const links = [
  <Link to="/#about" activeStyle={activeStyle}>
    {" "}
    About{" "}
  </Link>,
  <Link to="/#events" activeStyle={activeStyle}>
    {" "}
    Events{" "}
  </Link>,
  <Link to="/#partners" activeStyle={activeStyle}>
    {" "}
    Partners{" "}
  </Link>,
  <Link to="/#sponsors" activeStyle={activeStyle}>
    {" "}
    Sponsors{" "}
  </Link>,
  <Link to="/#contact" activeStyle={activeStyle}>
    {" "}
    Contact{" "}
  </Link>,
  <a href="#" target="_blank">Code of conduct</a>
]
/// scroll watchers
let scrollTimeout
let toggled
const Header = () => {
  const [isNavVisible, setNavVisible] = useState(false)
  const toggleNav = () => {
    toggled = true
    setNavVisible(!isNavVisible)
  }
  useEffect(() => {
    window.addEventListener('scroll',(e)=>{
      HandleScroll()
    },{
      capture : true ,
      passive : true,
    })

    // Get the header
    let header = document.getElementById("header")

    // Get the offset position of the navbar
    let sticky = header.offsetTop

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function HandleScroll() {
      if (window.pageYOffset > sticky) {
        header.classList.add("des")
        window.clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          header.classList.remove("des")
          if (toggled) {
            setNavVisible(false)
            toggled = false
          }
        }, 3000)
      }
    }
    return () => {
      window.clearTimeout(scrollTimeout)
    }
  }, [])
  return (
    <ContextConsumer>
      {({ data }) => {
        return (
          <StyledHeader isNavVisible={isNavVisible} id="header">
            <Link
              to="/#"
              style={{
                margin: "auto 0",
              }}
            >
              <Brand
                alt="brand"
                loading="eager"
                src={data.isMobile ? logos.PhoneGDGLogo : logos.GDGLogo}
                width={data.isMobile ? "10vw" : "18vw"}
              ></Brand>
            </Link>

            <CSSTransition
              in={!data.isMobile || isNavVisible}
              timeout={200}
              classNames="NavAnimation"
              unmountOnExit
            >
              <StyledNav>{links}</StyledNav>
            </CSSTransition>
            <Menu onClick={toggleNav}>
              <img alt="menu" src={!isNavVisible ? m.menu : m.close}></img>
            </Menu>
          </StyledHeader>
        )
      }}
    </ContextConsumer>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0; /* Stick it to the top */
  min-height: 10vh;
  transform: translateY(-10vh);
  &.des {
    transform: translateY(0vh) !important ;
  }
  transition: transform 1s ease-out;
  width: 100vw;
  display: grid;
  background-color: inherit;
  grid-template-areas: "logo nav";
  font-family: var(--font), sans-serif;
  font-weight: 600;
  font-size: 16px;
  z-index: 10;
  ${dropShadow}
  @media screen and (max-width: 768px) {
    transform: translateY(-50vh);
    grid-template-areas: "logo burger" "nav nav";
    .NavAnimation-enter {
      opacity: 0;
    }
    .NavAnimation-enter-active {
      opacity: 1;

      transition: opacity 500ms;
    }
    .NavAnimation-exit {
      opacity: 1;
    }
    .NavAnimation-exit-active {
      opacity: 0;

      transition: opacity 500ms;
    }
  }
`

const StyledNav = styled.nav`
  margin-right: 3%;
  grid-area: nav;
  display: grid;

  grid-template-columns: repeat(6, auto);
  align-items: center;
  justify-items: center;
  transition: height 1s ease-in;

  a {
    color: inherit;
    opacity: 0.4;
    text-decoration-line: none;
    transition: 0.5s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(${links.length}, auto);
    grid-template-columns: none;
    grid-row-gap: 20px;
    padding-bottom: 10%;
  }
`
const Brand = styled.img`
  grid-area: logo;
  min-width: 80px;
  max-width: 300px;
  width: ${({ width }) => width};
  margin: auto 0 auto 3%;
  cursor: pointer;
`

const Menu = styled.button`
  display: none;
  grid-area: burger;
  margin: auto 0;
  margin-left: auto;
  margin-right: 10px;
  background-color: transparent;
  border: 2px solid var(--green);
  padding: 10px;
  border-radius: 10px;
  opacity: 0.7;
  transition: 0.5s ease-in-out;
  width: 60px;
  height: 60px;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  outline: none;
  img {
    height: 100%;
    margin: 0;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`

export default Header
