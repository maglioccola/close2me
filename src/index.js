import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'
import Categories from './components/categories'
import Search from './components/search'
import Results from './components/results'
import Calendar from './components/calendar'
import axios from 'axios';
import ScrollUpButton from 'react-scroll-up-button';

import { properties } from './properties.js';

import './style.scss'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }


  render() {
    return (
      <div className="main">
        <ScrollUpButton />
        <Header company="Close2Me" />
        <Categories onSelect={(url) => this.handleSelect(url)} />
        <Search />
        <Results results={this.state.results} />
        <Calendar />
      </div>
    );
  }

  handleSelect(url) {
    axios
      .get(properties.host + url, {
        params: {
          keywords: '',
          latitude: 45.693161,
          longitude: 9.5970498
        }
      })
      .then(res => {
        console.log(res.data);
        this.setState({ results: res.data, message: "" });
      }).catch(error => {
        this.setState({ results: [], message: error.message });
      });
  }

}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);