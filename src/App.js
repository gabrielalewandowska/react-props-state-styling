import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
    state = {
      names: [
        {username: "Gaby"},
        {username: "Emma"},
        {username: "Jane"}
      ]
    }

    usernameChangedHandler = (event) => {
      this.setState({
        names: [
          { username: event.target.value },
          { username: "Emma" },
          { username: "Jane" }
        ]
      })
    }

    render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <UserInput changed={this.usernameChangedHandler} currentName={this.state.names[0].username}/>
        <UserOutput username={this.state.names[0].username}/>
        <UserOutput username={this.state.names[1].username}/>
        <UserOutput username={this.state.names[2].username}/>
      </div>
    );
  }
  }


export default App;
