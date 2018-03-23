import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Char from './Char/Char'
import Validation from './Validation/Validation'

class App extends Component {
  state = {
    len: 0,
    text: '',
    show: true
  }
  
  inputHandler = (inputText) => {
    const inputLength = inputText.length
    this.setState(
      {
        len: inputLength, 
        text: inputText
      })
  }

  deleteCharHandler = (char, charIndex) => {
    const currentText = this.state.text
    const updatedText = currentText.slice(0, charIndex) 
                        + currentText.slice(charIndex+1)
    this.setState({text: updatedText, show: false})
  }

  render() {
    const style = {
      color: 'blue',
      font: 'inherit',
      border: '1px solid magenta',
      padding: '8px',
      margin: '20px'
    }
    let seqT = this.state.text.split('');
    return (
      
      <div className="App">
        <input style={style} onChange={(event) => 
          this.inputHandler(event.target.value)} 
          type="text"
          value={this.state.text}/>
        
        <p>Lenght: {this.state.len}</p>
        <Validation textLength={this.state.len}/>
        {seqT.map((ch, charIndex) => 
          <Char char={ch} 
            clicked={() => this.deleteCharHandler(ch, charIndex)}
            key={charIndex}/>)}
      </div>  
    );
  }
}

export default App;
