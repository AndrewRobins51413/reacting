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
            {username => (
              <p className="main">No new notes, {username} !</p>
            )}
          </UserContextConsumer>
        </main>
        <input
          type="text"
          name="username"
          placeholder="New Username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button> Change Username</button>
      </div>
    )
  }
}

export default App;
