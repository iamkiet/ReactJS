import React from 'react';
import { Link } from 'react-router-dom';
import './com-css/Home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <div className="menu">
          <div className="menu-child">
            <Link className="my-link" to="/">Home</Link>
          </div>
          <div className="menu-child">
            <Link className="my-link" to="/store">store</Link>
          </div>
          <div className="menu-child">
            <Link className="my-link" to="/admin">admin</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;