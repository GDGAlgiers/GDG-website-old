// State management
import React from "react"

const defaultContextValue = {
  data: {
    // set your initial data shape here
    isMobile : false
  },
  set: () => {},
}

const { Provider, Consumer } = React.createContext(defaultContextValue)

class ContextProviderComponent extends React.Component {
  constructor() {
    super()

    this.setData = this.setData.bind(this)
    this.state = {
      ...defaultContextValue,
      set: this.setData,
    }
  }
  componentDidMount() {
    const handleMediaChange = mediaQuery => {
    
        if(mediaQuery.matches) {
          this.state.set({isMobile : true })
        }else {
          this.state.set({isMobile : false })
        
      }
    }
    const mediaQuery = window.matchMedia("(max-width : 768px)")
    mediaQuery.addListener(handleMediaChange)
    this.setState({data: {isMobile : mediaQuery.matches }})
  }

 
  setData(newData) {
    this.setState(state => ({
      data: {
        ...state.data,
        ...newData,
      },
    }))
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

/**
 * Consume state like this 
 * <Consumer>
 * {
 * data to read , set to modify 
 * ({data,set}) => {
 *  state management stuufff 
 * return component(data)
 * }
 * }
 * </Consumer>
 * 
 */
export { Consumer as default, ContextProviderComponent }