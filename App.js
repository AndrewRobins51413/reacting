import React from 'react';
import logo from './logo.svg';
import './App.css';
import Component1 from "./component1"
import Header from "./Header"
import UserContext from './userContext';

function App() {
  return (

    <div className="App">
      <Header />
      <main>
        <UserContext.Consumer>
          {username => (
            <p>nothing here {username} </p>
          )}
        </UserContext.Consumer>

        <Component1 />
      </main>
    </div>
  );
}

export default App;
