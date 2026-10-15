import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/NavBar';
import News from './Components/News';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      newsType: 'general'
    };
  }

  changeCategory = (type) => {
    this.setState({
      newsType: type
    });
  };

  render() {
    return (
      <div>
        <Navbar changeCategory={this.changeCategory} />
        <News newsType={this.state.newsType} />
      </div>
    );
  }
}