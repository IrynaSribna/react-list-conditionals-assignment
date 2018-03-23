import React, { Component } from 'react';
import './App.css';
import Char from './Char/Char'
import Validation from './Validation/Validation'

class App extends Component {
  state = {
    text: ''
  }
  
  inputHandler = (inputText) => {
    this.setState(
      {
        text: inputText
      })
  }

  deleteCharHandler = (charIndex) => {
    const currentText = this.state.text
    const updatedText = currentText.slice(0, charIndex) 
                        + currentText.slice(charIndex+1)
    this.setState({text: updatedText})
  }

  render() {
    const style = {
      color: 'blue',
      font: 'inherit',
      border: '1px solid magenta',
      padding: '8px',
      margin: '20px'
    }
    
    let charList = this.state.text.split('')
        .map((ch, charIndex) => 
          <Char char={ch} 
                clicked={() => this.deleteCharHandler(charIndex)}
                key={charIndex}/>);
    
    return (
      <div className="App">
        <input style={style} onChange={(event) => 
          this.inputHandler(event.target.value)} 
          type="text"
          value={this.state.text}/>
        
        <Validation textLength={this.state.text.length}/>
        {charList}
      </div>  
    );
  }
}

export default App;
