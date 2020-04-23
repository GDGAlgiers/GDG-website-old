const React = require("react")
const Layout = require("./src/components/layout/layout").default;



exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it

  return <Layout {...props} >{element}</Layout>
}

exports.onInitialClientRender = () => {

  setImmediate(function() {
    let element = document.getElementById("___loader")
    element.style.transition = "opacity 0.5s ease"
    element.style.opacity = "0"
    setTimeout(() => {
      element.style.display = "none"
    }, 500)
  })
  
}
