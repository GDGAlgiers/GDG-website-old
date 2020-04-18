 import React from 'react';
const ExternalLink = ({url , icon, text}) => {
    return <a href={url} target="_blank" rel="noopener noreferrer" >
      {icon ? <img src={icon} alt ={text}></img> : text}
    </a>
  }

const Emoji =({data})=>{
  return <span role="img">{data}</span>
}
export {ExternalLink , Emoji}  