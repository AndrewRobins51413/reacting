import React, {Component} from "react"
import { render } from "@testing-library/react"

const {Provider, Consumer} = React.createContext()

class UserContextProvider extends Component{

  render(){
    return(
      <Provider value="Andy567">
        {this.props.children}
      </Provider>
    )
  }
}
export {UserContextProvider, Consumer as UserContextConsumer}
