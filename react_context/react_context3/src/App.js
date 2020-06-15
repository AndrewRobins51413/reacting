import React, {Component} from 'react';
import Header from "./Header"
import {UserContextConsumer} from "./userContext"

import './App.css';


class App extends Component {
  state = {
    newUserName:""
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState ({[name]: value})
  }

  render(){
    return (
      <div className="App">
        <Header />
        <main>
          <UserContextConsumer>
            {({username, changeUsername}) => (
              <>
              <p className="main">No new notes, {username} !</p>
              <input
                type="text"
                name="newUsername"
                placeholder="New Username"
                value={this.state.newUsername}
                onChange={this.handleChange}
              />
              <button onClick={() => changeUsername(this.state.newUsername)}> Change Username</button>
              </>
            )}
          </UserContextConsumer>
        </main>

      </div>
    )
  }
}

export default App;
