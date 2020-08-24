const React = require("react")
const Layout = require("./src/components/layout/layout").default
const { ContextProviderComponent } =require("./src/context/Context")
const ContextConsumer =require("./src/context/Context").default
//require('./src/firebase/firebase')
exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  
  return   <Layout {...props} >{element}</Layout>

 

    }

  exports.wrapRootElement = ({ element }) => {
      return (
        <ContextProviderComponent >
          {element}
        </ContextProviderComponent>
      )
}