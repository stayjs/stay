import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  test(){
    console.log(this)
    console.log(this.refs.header)
  }
  render(props) {
    console.log(this.props.name)
    return (
      <div className="App">
        <header ref='header' className="App-header">
          <h1 onClick={()=>{this.test()}} className="App-title">Welcome to React</h1>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
