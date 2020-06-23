const React = require("react")
const Layout = require("./src/components/layout/layout").default
const { ContextProviderComponent } = require("./src/context/Context")

function callAnalyticsAPI() {
  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  gtag("js", new Date())
  gtag("config", "UA-170263587-1")
}
exports.onClientEntry = () => {
  callAnalyticsAPI()
}

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it

  return <Layout {...props}>{element}</Layout>
}

exports.wrapRootElement = ({ element }) => {
  return <ContextProviderComponent>{element}</ContextProviderComponent>
}
