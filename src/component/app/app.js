import React, { Component } from 'react';
import logo from '../../logo.svg';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Uber Price</h1>

        </div>
        <div className="App-childRoutes">
          {this.props.children}
        </div>

      </div>
    );
  }
}

export default App;
