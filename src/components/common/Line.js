import styled from "styled-components"
export default styled.div`
  &:after {
    content: " ";
    display: block;
    align-self: flex-start;
    border-top: 2px solid var(--green);
    border-bottom: 2px solid var(--green);
    border-radius: 2px;
  }
`
