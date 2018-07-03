import React, { Component } from 'react';
import CommentBox from './components/Comment/CommentBox';
import './App.css';

class App extends Component {
  render() {
    return (
     <CommentBox promise={fetch('/api')}/>
    );
  }
}

export default App;
