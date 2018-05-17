import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;