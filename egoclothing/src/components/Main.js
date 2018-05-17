import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './Home';
import Store from './Store';
import Admin from './Admin';
import About from './About';

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/store" component={Store} />
        <Route path="/about" component={About} />
        <Route path="/admin" component={Admin} />
        <Redirect to="/" />
      </Switch>
    )
  }
}

export default Main;