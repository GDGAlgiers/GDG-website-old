import React, { ReactElement } from "react"

function Typeform({ title, src, ...rest }) {
  return (
    <>
      <iframe
        title={title}
        id="typeform-full"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="camera; microphone; autoplay; encrypted-media;"
        src={src}
      ></iframe>
      <script
        defer
        type="text/javascript"
        src="https://embed.typeform.com/embed.js"
      ></script>
    </>
  )
}

export default Typeform
