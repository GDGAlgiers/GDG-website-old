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
  arrows: false,
  adaptiveHeight: true,
  lazyLoad: "ondemand",
}
const mobileSettings = {
  ...settings,
  slidesToShow: 1,
  slidesToScroll: 1,
}
/// #1Gold , #2Silver ,#3Bronze
const rankingColors = ["#FFD700", "#C0C0C0", "#CD7F32"]

const Submissions = ({ submissionsData }) => {
  const [dataInitilized, setDataInitialized] = useState(false)
  const sortedData = submissionsData.sort(
    (item1, item2) => item1.rank - item2.rank
  )
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
                      {sortedData.map((item, index) => {
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
      {({ set }) => {
        return (
          <SubWrapper>
            <h1
              className="rank"
              style={{ color: `${rankingColors[data.rank - 1]}` }}
            >{`#${data.rank}`}</h1>
            <img
              className="sub-logo"
              src={require(`../../../images/events/fastandhack20/submissions/${data.image}`)}
              alt={data.alt}
            />
            <h2 className="sub-team">{data.name}</h2>

            <p className="sub-desc">{data.brief}</p>

            <div className="links">
              {data.youtubeId ? (
                <button
                  title="see details & video"
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
                </button>
              ) : null}
              {data.githubLink ? (
                <a
                  title="see github"
                  target="_blank"
                  rel="noopener noreferrer"
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
          <h1
            className="rank"
            style={{ color: `${rankingColors[data.rank - 1]}` }}
          >{`#${data.rank}`}</h1>
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
          <img
            className="sub-logo"
            src={require(`../../../images/events/fastandhack20/submissions/${data.image}`)}
            alt={data.alt}
          />
          <h2 className="sub-team">
            {data.name} by - {data.teamName}
          </h2>
          <div className="content">
            <div>
              <h3 className="title">Description</h3>
              <p className="text">{data.desc}</p>
              <div className="github-repo">
                {data.githubLink ? (
                  <a
                    title="see github"
                    target="_blank"
                    rel="noopener noreferrer"
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
  .rank {
    position: relative;
    top: 0;
    left: -40%;
    font-size: 4.5rem;
    margin: 0;
    font-family: "Reem Kufi", sans-serif;
    color: #ce9138;
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
    max-width: 60px;
    max-height: 60px;
    background: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.4) !important;
    @media screen and (max-width: 768px) {
      max-width: 50px;
      max-height: 50px;
    }
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
    max-width: 200px;
    max-height: 60px;
    flex: 1;
  }
  .sub-team {
    color: #ce9138;
    text-align: center;
    flex: 1;
  }
  .sub-desc {
    width: 100%;
    text-align: center;
    max-width: 100%;
    flex: 2;
  }
  .links {
    display: flex;
    flex: 1;
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
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent !important; /* make scrollbar transparent */
  }
  position: fixed;
  top: 2%;
  height: 80vh;
  min-width: 90%;
  z-index: 99999;
  overflow-y: auto;
  overflow-x: hidden;
  font-family: "Reem Kufi", sans-serif;
  display: flex;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.24);
  flex-direction: column;
  background: #fafafa;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  .rank {
    position: fixed;
    font-size: 10rem;
    display: flex;
    top: 10%;
    left: 10%;
  }
  .sub-logo {
    max-width: 300px;
    max-height: 160px;
    margin: 0;
    margin-bottom: 1rem;
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
    position: fixed;
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
    width: 95%;
    .text {
      width: 60%;
      margin: 0 auto;
      max-width: 100%;
      color: var(--grey);
    }
    .video {
      margin-left: 10%;
    }
    @media screen and (max-width: 1300px) {
      flex-direction: column;

      .video {
        width: 100%;
        margin: auto;
      }
    }
  }

  @media screen and (max-width: 1300px) {
    height: 95vh;
    .sub-logo {
      max-width: 20vw;
      max-height: 10%;
      margin-top: 0px;
    }
    .rank {
      position: fixed;
      font-size: 4rem;
      display: flex;
      top: 1%;
      left: 1%;
    }
    .content {
      .text {
        margin: auto;
      }
    }
    top: 2%;
    .btn {
      position: relative;
      top: -20%;
    }
  }
  @media screen and (max-width: 768px) {
    height: 95vh;
    left: 0;
    .sub-logo {
      max-width: 30vw;
      margin-top: 200px;
    }
    .rank {
      position: fixed;
      font-size: 4rem;
      display: flex;
      top: 3%;
      left: 3%;
    }
    .content {
      .text {
        margin: auto;
      }
      .title {
        font-size: 2rem;
      }
    }

    top: 2%;
    .btn {
      position: relative;
      top: -20%;
    }
  }
  @media screen and (max-width: 360px) {
    .rank {
      font-size: 3rem;
    }
  }
`

export default Submissions
