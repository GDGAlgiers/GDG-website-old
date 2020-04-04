import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const links =[
  <Link to="/#about"> About </Link>,
  <Link to="/#events"> Events </Link>,
  <Link to="/#partners"> Partners </Link>,
  <Link to="/#sponsors"> Sponsors </Link>,
  <Link to="/#contact"> Contact </Link>,
  <Link to="/#sponsors"> Sponsors </Link>
]
const Header = ({ siteTitle }) => (
  <header>
    {// TODO : CREATE & ADD NAVBAR Component : LOGO + LINKS (use above links)
    }
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
