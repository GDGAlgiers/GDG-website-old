import React from "react"
import PageLoader from "../../components/common/loader"
import SEO from "../../components/layout/seo"
/// remove the loader when you implement this page
export default function fastAndHack20() {
  return (
    <>
      <SEO title="CONTRIBUTORS" />
      <PageLoader loadingText="We are building this page"></PageLoader>
    </>
  )
}
