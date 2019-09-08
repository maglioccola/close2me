import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'
import Search from './components/search'
import Categories from './components/categories'
import Calendar from './components/calendar'

import './style.scss'

class App extends React.Component {

  render() {
    return (
      <div className="main">
        <Header company="Close2Me" />
        <Categories />
        <Search />
        <Calendar />
      </div>
    );
  }

}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
