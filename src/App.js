import React, { Component } from 'react';
import {connect} from 'react-redux';
import Response from './components/response/response';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Redux, are you my friend or not?</h1>
        </header>
        <Response response={this.props.response} />
      </div>
    );
  }
}

const connectStateToProps = state => {
  return {
    response: state.response,
  }
}

export default connect(connectStateToProps)(App);
