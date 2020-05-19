import React, { useEffect, useState } from "react"
import moment from "moment"
import styled from "styled-components"
import { colors } from "../../constants/theme"
export default function Countdown(props) {
  let interval = undefined
  const [countdown, setCountDown] = useState({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  })
  const { timeTillDate, timeFormat, onFinish, reversedClock } = props
  useEffect(() => {
    interval = setInterval(() => {
      const then = moment(timeTillDate, timeFormat)
      const now = moment()

      const diff = moment.duration(then.diff(now))
      const days = diff.days().toString()
      const hours = diff.hours().toString()
      const minutes = diff.minutes().toString()
      const seconds = diff.seconds().toString()
      // countdown finished
      if (seconds < 0) {
        onFinish()
      }
      setCountDown({ days, hours, minutes, seconds })
    }, 1000)
    /// cleanup function
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [])
  const { days, hours, minutes, seconds } = countdown
  /// reversedClock reverses the direction of the ticking clock
  const daysRadius = !reversedClock
    ? mapNumber(days, 30, 0, 0, 360)
    : 360 - mapNumber(days, 30, 0, 0, 360)
  const hoursRadius = !reversedClock
    ? mapNumber(hours, 24, 0, 0, 360)
    : 360 - mapNumber(hours, 24, 0, 0, 360)
  const minutesRadius = !reversedClock
    ? mapNumber(minutes, 60, 0, 0, 360)
    : 360 - mapNumber(minutes, 60, 0, 0, 360)
  const secondsRadius = !reversedClock
    ? mapNumber(seconds, 60, 0, 0, 360)
    : 360 - mapNumber(seconds, 60, 0, 0, 360)

  if (!seconds) {
    // not done
    return (
      <img
        src={require("../../images/icons/loading.svg")}
        alt="loading countdown"
        title="loading countdown"
        width="100px"
        style={{ margin: 0 }}
      ></img>
    )
  }
  return (
    <Wrapper className={props.className}>
      {days && (
        <div className="countdown-item" style={{ color: colors.blue }}>
          <SVGCircle radius={daysRadius} fill={colors.blue} />
          {days}
          <span>days</span>
        </div>
      )}
      {hours && (
        <div className="countdown-item" style={{ color: colors.red }}>
          <SVGCircle radius={hoursRadius} fill={colors.red} />
          {hours}
          <span>hours</span>
        </div>
      )}
      {minutes && (
        <div className="countdown-item" style={{ color: colors.green }}>
          <SVGCircle radius={minutesRadius} fill={colors.green} />
          {minutes}
          <span>minutes</span>
        </div>
      )}
      {seconds && (
        <div className="countdown-item" style={{ color: colors.yellow }}>
          <SVGCircle radius={secondsRadius} fill={colors.yellow} />
          {seconds}
          <span>seconds</span>
        </div>
      )}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .countdown-item {
    font-size: 40px;
    display: flex;
    font-family: var(--font-header);
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 30px;
    margin: 10px;
    padding: 10px;

    position: relative;
    width: 100px;
    height: 100px;
    box-shadow: 0 4px 1px rgba(0, 0, 0, 0.1), 0 6px 10px rgba(0, 0, 0, 0.22);
    border-radius: 50%;
  }

  .countdown-item span {
    color: inherit;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .countdown-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
  }
`

const SVGCircle = ({ radius, fill }) => (
  <svg className="countdown-svg">
    <path
      fill="none"
      stroke={fill}
      stroke-width="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
)

/// utility functions

// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  }
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle)
  var end = polarToCartesian(x, y, radius, startAngle)

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ")

  return d
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
  return ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
