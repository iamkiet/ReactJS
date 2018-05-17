import React from 'react';
import './com-css/Store.css';
import MenuBar from './Admin/MenuBar';

class Admin extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>ADMIN PAGE</h1>
        </div>
        <MenuBar></MenuBar>
      </div>
    )
  }
}

export default Admin;