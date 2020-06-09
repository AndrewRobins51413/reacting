import React, {Component} from "react"

const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component {
  state = {
    theme: "dark"
  }
  toggleTheme = () => {
    this.setState(prevState => {
      return{
        theme: prevState.theme === "light" ? "dark" : "light"
            }
      })
  }
  render(){
    const light = {
      backgroundColor: "whitesmoke",
      color: "black"
    }
    const dark ={
      backgroundColor: "black",
      color: "whitesmoke"
    }
    return (
      <Provider value={this.state.theme}>
        {this.props.children}
        <button style={light} onClick={this.toggleTheme}>Switch it!</button>
      </Provider>
    )
  }
}
export {ThemeContextProvider, Consumer as ThemeContextConsumer}
