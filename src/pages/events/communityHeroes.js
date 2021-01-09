import React from "react"
import styled from "styled-components"
import Typeform from "../../components/common/TypeForm"
import SEO from "../../components/layout/seo"
function CommunityHeroes() {
  return (
    <>
      <SEO title="Community Heroes registration" />
      <Wrapper>
        <Typeform
          title="register-community-heroes"
          src="https://nassim780857.typeform.com/to/Kpc3Crm4"
        />
      </Wrapper>
    </>
  )
}

export default CommunityHeroes

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`
