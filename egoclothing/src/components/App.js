import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


import Home from './Home';
import Store from './Store';
import Admin from './Admin';



class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route path="/store" component={Store} />
          <Route path="/admin" component={Admin} />
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}

export default App;