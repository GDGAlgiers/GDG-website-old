import React from "react"
import content from '../../content/events/fast&hack.json'
import SEO from "../../components/layout/seo"
import PageTransition from 'gatsby-plugin-page-transitions'
import Countdown from '../../components/common/Countdown'
import styled from 'styled-components'
import Faq from "react-faq-component";
/// remove the loader when you implement this page
export default function fastAndHack20() {
  return (
    <PageTransition>
      <SEO title="FAST&HACK20" />
     
      <Wrapper>
        <h1><span className="fast">FAST</span> & <span className="hack">HACK</span>2020</h1>
      <Countdown
      className ="countdown"
      timeTillDate={content.date} 
      timeFormat={content.date_format}
      ></Countdown>
      <h2 className="title">What is it ?</h2>
  <p className="description">{content.description}</p>
      <a href={content.slack_url} target="_blank" rel="noopener noreferrer"  ><img className="btn" src={require('../../images/icons/slack-new-logo.svg')} alt="slack workspace" title="join slack workspace"></img></a>
      <div className="faq">
        <Faq data={content.faq} styles ={faqStyles} config={{animate : true}}></Faq>
      </div>
      </Wrapper>
    </PageTransition>
  )
}
const faqStyles ={
  bgColor: 'inherit',
   titleTextColor: "var(--green)",
   rowTitleColor: "var(--green)",
  rowContentColor: 'inherit',
  arrowColor: "var(--red)",
}
const Wrapper = styled.div`
display : flex ;
justify-content :flex-start; 
align-items : center;

flex-direction : column;
padding : 64px;
h1 {
  font-size : 5rem;
  text-align : center ;
  font-family : Caveat, sans-serif;
  .fast {
    color : var(--green)
  }
  .hack{
    color :var(--red)
  }
}
a img {
  width : 100px;
  height :100px;
  cursor : pointer;
}
.btn {
  transition : transform 0.5s ease;
  &:hover {
    transform : scale(1.1)
  }
}
.countdown {
  margin-top : 0%;
}
.faq {
  margin-top : 10%;
  background-color : inherit;
  width: 100%;
  font-family : var(--font-header);
  h2 {
    margin-top : 10px;
    font-family : Caveat, sans-serif
  }
}
.styles_faq-row-wrapper__3Hsch {
  background-color : inherit !important;
  color : inherit !important;
  .styles_row-body__8wIE9 .styles_faq-row__2Rd2Y .styles_row-content__TVd0Y {
    color : inherit !important;
  }
}
p{
  font-style : italic;
  font-family : var(--font);
  text-align : center;
  max-width : 50%;

}
.title{
  color : var(--blue);
  margin-top :5%;
  font-size : 48px;
  font-family : Caveat, sans-serif
}
@media screen and (max-width: 768px) {
  padding : 32px;
  p{
    max-width : 90%;
  }
}

`