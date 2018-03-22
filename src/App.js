import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharComponent from './CharComponent/CharComponent'
import ValidationComponent from './ValidationComponent/ValidationComponent'

class App extends Component {
  state = {
    len: 0
  }
  
  inputHandler = (inputLenght) => {
    this.setState({len: inputLenght})
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
        <input style={style} onChange={(event) => 
          this.inputHandler(event.target.value.length)} 
          type="text"/>
        <p>{this.state.text}</p>  
        <p>Lenght: {this.state.len}</p>
        <CharComponent char="aaaa"/>
        <ValidationComponent textLength={this.state.len}/>
      </div>  
    );
  }
}

export default App;
