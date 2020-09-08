import React from "react"
import SEO from "../../components/layout/seo"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
/// remove the loader when you implement this page

const speakers = [
  {
    name: "Yacine Rezgui",
    image: require("../../images/events/android11meetup/yacine.webp"),
    role: "Android Developer Advocate at Google",
    type: "Talk",
    topic: "What is new about Android 11?",
  },
  {
    name: "Azzedine Chenine",
    image: require("../../images/events/android11meetup/azzedine.webp"),
    role: "Software Engineer & Researcher at InstaDeep",
    type: "Workshop",
    topic: "MLKit for Android",
  },
  {
    name: "Murat Yener",
    image: require("../../images/events/android11meetup/murat.webp"),
    role: "Android Developer Advocate at Google",
    type: "Talk",
    topic: "Modern Android Development",
  },
]

export default function android11meetup() {
  return (
    <>
      <SEO title="ANDROID11 MEETUP" />
      <Wrapper>
        <Fade top>
          <div className="header">
            <img
              src={require("../../images/events/android11meetup/logo.webp")}
              alt="android meetup 11"
            />
            <h1>
              Android 11 <span id="meetup">Meetup</span>
            </h1>
          </div>
        </Fade>
        <div className="body">
          <Fade top>
            <div className="description">
              <p>
                This is a global series of community-led online events
                connecting you with other developers near you to learn what you
                need to know to prepare for the next release of Android. Come
                together to learn about what's new in Android 11 and how to make
                your app compatible.
              </p>
            </div>
          </Fade>

          <div className="featuring">
            <h1>Featuring</h1>

            <ul>
              {speakers.map(speaker => {
                return (
                  <Fade bottom>
                    <li key={speaker.name} className="speaker">
                      <img src={speaker.image} alt={speaker.name} />
                      <h3>{speaker.name}</h3>
                      <h5>{speaker.role}</h5>
                      <div className="talk">
                        <p className="type">{speaker.type}</p>
                        <p>{speaker.topic}</p>
                      </div>
                    </li>
                  </Fade>
                )
              })}
            </ul>
          </div>
          <div className="register">
            <a
              href="https://gdg.community.dev/events/details/google-gdg-algiers-presents-android-11-meetup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the event
            </a>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  padding-top: 50px;
  .header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    img {
      margin-bottom: 1rem;
    }
    h1 {
      font-family: "Roboto", Montserrat, sans-serif;
      color: #3cd984;
      #meetup {
        color: #072f41;
      }
    }
  }
  .body {
    max-width: 960px;
    margin: auto;
    text-align: center;
    .description {
      padding: 30px;
      padding-top: 1rem;
      color: #072f41;
      p {
        font-family: "Roboto", Montserrat, sans-serif;
      }
    }
    .featuring {
      h1 {
        font-family: "Roboto", Montserrat, sans-serif;
        color: #072f41;
      }
      ul {
        margin: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        .speaker {
          flex: 1;
          padding: 20px;
          box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
          border-radius: 20px;
          margin: 10px;
          .talk {
            font-family: "Roboto", Montserrat, sans-serif;
            .type {
              font-weight: 500;
              color: #3cd984;
            }
            p {
              font-family: "Roboto", Montserrat, sans-serif;
            }
          }
          img {
            border-radius: 50%;
            max-width: 100px;
          }

          h3,
          h5 {
            font-family: "Roboto", Montserrat, sans-serif;
          }
          h3 {
          }
          h5 {
            font-weight: 400;
            color: #072f41;
            letter-spacing: 1px;
          }
        }
        @media screen and (max-width: 768px) {
          flex-direction: column;
          .speaker {
            margin: 5%;
          }
        }
      }
    }
    .register {
      padding: 64px;
      a {
        border: 2px solid #3cd984;
        color: #072f41;
        font-family: "Roboto", Montserrat, sans-serif;
        background-color : #3cd984;
        padding: 10px;
        font-weight : bolder;
        text-decoration: none;
        border-radius: 5px;
      &::focus {
        background-color : #3cd984;
      }
      }
    }
  }
`
