import React from "react"
const ExternalLink = ({ url, icon, text }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {icon ? <img src={icon} alt={text}></img> : text}
    </a>
  )
}

const Emoji = ({ data }) => {
  return <span role="img">{data}</span>
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
export { ExternalLink, Emoji, validateEmail }
