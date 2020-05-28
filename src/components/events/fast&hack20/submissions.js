import React, { useState } from "react"
import styled from "styled-components"
import Slider from "react-slick"
import PropTypes from "prop-types"
import Consumer, {
  SubmissionContextProviderComponent,
} from "../../../context/SubmissionContext"
import GlobalContext from "../../../context/Context"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Youtube from "react-youtube"
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  slide: "SlideGrid",
  adaptiveHeight: true,
  lazyLoad: "ondemand",
}
const mobileSettings = {
  ...settings,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Submissions = ({ submissionsData }) => {
  const [dataInitilized, setDataInitialized] = useState(false)
  const getSettings = isMobile => {
    return isMobile ? mobileSettings : settings
  }
  return (
    <GlobalContext>
      {({ data: gctx }) => {
        let s = getSettings(gctx.isMobile)
        return (
          <SubmissionContextProviderComponent>
            <Consumer>
              {({ data: ctx, set }) => {
                if (!dataInitilized) {
                  set({
                    submissions: submissionsData,
                    currentSub: submissionsData[0],
                    showSubmission: false,
                  })
                  setDataInitialized(true)
                }
                return (
                  <SubimissionsWrapper>
                    <Slider {...s} className="slider">
                      {submissionsData.map((item, index) => {
                        let key = `submission-${index}`

                        return <Submission data={item} key={key}></Submission>
                      })}
                    </Slider>
                    {ctx.showSubmission ? (
                      <SubmissionDetails
                        data={ctx.currentSub}
                      ></SubmissionDetails>
                    ) : null}
                  </SubimissionsWrapper>
                )
              }}
            </Consumer>
          </SubmissionContextProviderComponent>
        )
      }}
    </GlobalContext>
  )
}

Submissions.propTypes = {
  submissions: PropTypes.array.isRequired,
}

const Submission = ({ data }) => {
  return (
    <Consumer>
      {({ data: ctx, set }) => {
        return (
          <SubWrapper>
            <img className="sub-logo" src={data.image} alt={data.alt} />
            <h2 className="sub-team">{data.teamName}</h2>
            <p className="sub-desc">{data.brief}</p>
            <div className="links">
              {data.youtubeId ? (
                <a
                  className="btn"
                  onClick={e => {
                    set({ showSubmission: true, currentSub: data })
                  }}
                >
                  <img
                    className="icon"
                    src={require("../../../images/icons/youtube.svg")}
                    alt="youtube video"
                  ></img>
                </a>
              ) : null}
              {data.githubLink ? (
                <a
                  target="_blank"
                  rel="noopener noreferer"
                  className="btn"
                  href={data.githubLink}
                >
                  <img
                    className="icon"
                    src={require("../../../images/events/fastandhack20/icons/github.svg")}
                    alt="github"
                  ></img>
                </a>
              ) : null}
            </div>
          </SubWrapper>
        )
      }}
    </Consumer>
  )
}

const SubmissionDetails = ({ data }) => {
  const [closing, setClosing] = useState(false)
  const vidopts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
  const _onReady = e => {
    e.target.pauseVideo()
  }
  return (
    <Consumer>
      {({ set }) => (
        <SubDetails className={`${closing ? "shrinkin" : "growin"}`}>
          <button
            id="closebtn"
            onClick={e => {
              setClosing(true)
              setTimeout(() => {
                set({ showSubmission: false })
              }, 1500)
            }}
          >
            <img
              className="icon"
              src={require("../../../images/events/fastandhack20/icons/close.png")}
              alt="close"
            ></img>
          </button>
          <img className="sub-logo" src={data.image} alt={data.alt} />
          <h2 className="sub-team">{data.teamName}</h2>
          <div className="content">
            <div>
              <h3 className="title">Description</h3>
              <p className="text">{data.desc}</p>
              <div className="github-repo">
                {data.githubLink ? (
                  <a
                    target="_blank"
                    rel="noopener noreferer"
                    href={data.githubLink}
                  >
                    Check out github repository of the project{" "}
                    <img
                      className="icon btn"
                      src={require("../../../images/events/fastandhack20/icons/github.svg")}
                      alt="github"
                    ></img>
                  </a>
                ) : null}
              </div>
            </div>
            <Youtube
              videoId={data.youtubeId}
              opts={vidopts}
              onReady={_onReady}
              className="video"
            ></Youtube>
          </div>
        </SubDetails>
      )}
    </Consumer>
  )
}
/// styled components

const SubimissionsWrapper = styled.div`
  font-family: "Reem Kufi", sans-serif;
  .slider {
    width: 90vw;
  }
  margin-bottom: 10%;
  .growin {
    transform: scaleX(0);
    animation: grow 0.5s ease forwards;
    @keyframes grow {
      from {
        transform: scaleX(0);
      }
      to {
        transform: scaleX(1);
      }
    }
  }
  .shrinkin {
    transform: scaleX(1);
    animation: shrink 0.3s ease-in-out forwards;
    @keyframes shrink {
      from {
        transform: scaleX(1);
      }
      to {
        transform: scaleX(0);
      }
    }
  }

  position: relative;
  .btn {
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    border: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  .icon {
    max-width: 60px;
    max-height: 60px;
    padding: 10px;
    margin: 0;
    @media screen and (max-width: 768px) {
      max-height: 50px;
      max-width: 50px;
    }
  }
`
const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 10%;
  font-family: "Reem Kufi", sans-serif;
  padding: 10%;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  .sub-logo {
    max-width: 10vw;
  }
  .sub-team {
    color: #ce9138;
  }

  .links {
    display: flex;
    width: 90%;
    justify-content: space-evenly;
  }

  &:hover {
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.24);
  }
  @media screen and (max-width: 768px) {
    .sub-logo {
      max-width: 30vw;
    }
  }
`

const SubDetails = styled.div`
  position: fixed;
  width: 90%;
  top: 10%;
  z-index: 99999;
  overflow-y: auto;
  font-family: "Reem Kufi", sans-serif;
  display: flex;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.24);
  flex-direction: column;
  background: #fafafa;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  .sub-logo {
    max-width: 15vw;
    margin: 0;
  }
  .sub-team {
    color: #ce9138;
  }
  .github-repo a {
    display: flex;
    text-align: cetner;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: var(--grey);
    .icon {
      margin-left: 20px;
      padding: 0;
    }
  }
  #closebtn {
    position: absolute;
    top: 2%;
    border-radius: 50%;
    background: transparent;
    outline: none;
    border: 2px solid rgba(128, 128, 128, 1);
    opacity: 0.3;
    cursor: pointer;
    right: 2%;
    .icon {
      position: relative;
      top: 5px;
    }
    transition: 0.5s ease;
    &:hover {
      opacity: 1;
    }
  }
  .content {
    display: flex;

    text-align: center;
    width: 90%;
    .text {
      width: 100%;
      max-width: 100%;
      color: var(--grey);
    }
    .video {
      margin-left: 10%;
    }
    @media screen and (max-width: 1300px) {
      flex-direction: column;

      margin: 10%;
      .video {
        width: 100%;
        margin: auto;
      }
    }
  }
  @media screen and (max-width: 1300px) {
    .sub-logo {
      max-width: 30vw;
    }
    .content {
      .text {
        margin: 20px 0px;
      }
    }
    top: 0%;
    .btn {
      position: relative;
      top: -20%;
    }
  }
`

export default Submissions
