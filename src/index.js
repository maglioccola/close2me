import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'
import Categories from './components/categories'
import Search from './components/search'
import Results from './components/results'
import Calendar from './components/calendar'

import './style.scss'

class App extends React.Component {

  render() {
    return (
      <div className="main">
        <Header company="Close2Me" />
        <Categories onSelect={(url) => this.handleSelect(url)} />
        <Search />
        <Results />
        <Calendar />
      </div>
    );
  }

  handleSelect(url) {
    alert(url);
  }

}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);