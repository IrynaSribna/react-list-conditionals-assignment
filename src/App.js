import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    len: 0
  }
  
  //inputLenght = 0
  inputLengthHandler = (inputLength) => {
    this.setState({len: inputLength})
  }
  render() {
    const style = {
      color: 'blue',
      font: 'inherit',
      border: '1px solid magenta',
      padding: '8px',
      margin: '20px'
    }

    return (
      <div className="App">
        <input style={style} onChange={(event) => this.inputLengthHandler(event.target.value.length)} type="text"/>
        <p>Lenght: {this.state.len}</p>
      </div>  
    );
  }
}

export default App;
