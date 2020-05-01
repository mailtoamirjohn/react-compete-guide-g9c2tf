import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div>
        <h1> Hello React</h1>
        <Person />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
