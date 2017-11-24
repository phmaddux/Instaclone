import React, { Component } from 'react';
import Posts from './components/Posts';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    const style = {
      background: "rgba(249,249,249, 1)",
      fontFamily: "Open Sans"
<<<<<<< HEAD
    };
=======
    }
>>>>>>> starter-code
    return (
      <div style={style}>
        <Navbar />
        <Posts />
      </div>
    );
  }
}

export default App;
