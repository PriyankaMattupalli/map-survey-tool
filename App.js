import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {

    super();

    this.state = { text: 'hello' };
    this.updateText=this.updateText.bind(this)

  }

updateText(ev){
  const value=ev.currentTarget.value
  this.setState({text: value})
}

  render() {
  console.log('render')
    return (
      <div className="App">
       <textarea className="form-control"
          value={this.state.text}
          onChange={this.updateText}

        />
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
