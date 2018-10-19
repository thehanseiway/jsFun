import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/layouts/Header';
import Featured from './components/featured';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: "1550px", background: "#115522"}}>
        <Header />
        <Featured />
      </div>
    );
  }
}

export default App;
