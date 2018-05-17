import React from 'react'; 
import './com-css/Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <section class="navigation">
        <div class="nav-container">
          <div class="brand">
            <a>EGo Clothing</a>
          </div>
          <nav>
            <div class="nav-mobile">
              <a id="nav-toggle">
                <span></span>
              </a>
            </div>
            <ul class="nav-list">
              <li>
                <a><Link to='/'>Home</Link></a>
              </li>
              <li>
                <Link to='/store'>Store</Link>
                <ul class="nav-dropdown">
                  <li>
                    <Link to='/store/category'>Category</Link>
                  </li>
                  <li>
                    <Link to='/store/products'>Products</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/store'><i class="fa fa-shopping-cart"></i></Link>
              </li>
              <li>
                <Link to='/admin'><i class="fa fa-user"></i></Link>
                <ul class="nav-dropdown">
                  <li>
                    <a>Web Design</a>
                  </li>
                  <li>
                    <a>Web Development</a>
                  </li>
                  <li>
                    <a>Graphic Design</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    )
  }
}

export default Header;