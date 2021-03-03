import React, { Component } from 'react';
import './App.css';
import Resume from './components/Resume';

class App extends Component {
  render() {
    return (
      <div>
        <div className='col-lg-8 mx-auto text-center'>
          <h1>
            <b>Resume Generator!</b>
          </h1>
        </div>
        <Resume />
      </div>
    );
  }
}

export default App;
