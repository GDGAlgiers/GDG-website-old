import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"

const links = [
  <Link to="/#about"> About </Link>,
  <Link to="/#events"> Events </Link>,
  <Link to="/#partners"> Partners </Link>,
  <Link to="/#sponsors"> Sponsors </Link>,
  <Link to="/#contact"> Contact </Link>,
]

const StyledHeader = styled.header`
  position: fixed;
  top: 0; /* Stick it to the top */
  min-height : 10vh;
  width: 100vw;
  display: grid;
  background-color :  white;
  grid-template-areas: "logo nav";
  font-family: "Lato", sans-serif;
  font-weight: 700;
  -webkit-box-shadow: -1px 1px 23px 10px rgba(221, 221, 221, 1);
  -moz-box-shadow: -1px 1px 23px 10px rgba(221, 221, 221, 1);
  box-shadow: -1px 1px 23px 10px rgba(221, 221, 221, 1);
  transition: height 1s ease-in , border-radius 0.5s linear;
  @media screen and (max-width: 700px) {
    grid-template-areas: "logo burger" "nav nav";
    border-bottom-left-radius: ${props =>
      props.isNavVisible ? "50px" : "0px"};
    border-bottom-right-radius: ${props =>
      props.isNavVisible ? "50px" : "0px"};
  }
  .NavAnimation-enter{
    opacity : 0;
    transform : translateY(-100%) scaleY(0);
  }
  .NavAnimation-enter-active {
    opacity : 1 ;
    transform : translateY(0) scaleY(1);
    transition : opacity 350ms , transform 350ms;
  } 
  .NavAnimation-exit {
    opacity : 1;

  }
  .NavAnimation-exit-active{
    opacity : 0 ;
    transform : translateY(-100%) scaleY(0);
    transition : opacity 350ms , transform 350ms;
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
    color: #9e9e9e;
    text-decoration-line: none;
    transition: 0.5s ease-in-out;
    &:hover {
      color: #212121;
    }
  }
  @media screen and (max-width: 700px) {
    grid-template-rows: repeat(${links.length}, auto);
    grid-template-columns: none;
    grid-row-gap: 20px;
    padding-bottom: 10%;
  }
`
const Header = ({ siteTitle }) => {
  const [isNavVisible, setNavVisible] = useState(false)
  const toggleNav = () => {
    setNavVisible(!isNavVisible)
  }
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width : 700px)")
    mediaQuery.addListener(handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery)

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange)
    }
  }, [])

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  }

  return (
    <StyledHeader isNavVisible={isNavVisible}>
      <Brand
        src={
          isSmallScreen
            ? require("../../images/icons/phonelogo.png")
            : require("../../images/gdg_algiers.png")
        }
        width={isSmallScreen ? "100px" : "400px"}
      ></Brand>
     
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={400}
        classNames="NavAnimation"
        unmountOnExit
      >
        <StyledNav>{links}</StyledNav>
      </CSSTransition>
      <Menu onClick={toggleNav}>
        <img
          src={
            !isNavVisible
              ? require("../../images/icons/menu.svg")
              : require("../../images/icons/close.svg")
          }
        ></img>
      </Menu>
    </StyledHeader>
  )
}

const Brand = styled.img`
  grid-area: logo;
  width: ${({ width }) => width};
  margin: auto 0 auto 3%;
`

const Menu = styled.button`
  display: none;
  grid-area: burger;
  margin: auto 0;
  margin-left: auto;
  margin-right: 10px;
  background-color: transparent;
  border: 2px solid #0d9d58;
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
  @media screen and (max-width: 700px) {
    display: block;
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header