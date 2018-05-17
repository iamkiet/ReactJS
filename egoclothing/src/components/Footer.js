import React from 'react';
import './com-css/Footer.css';

import {Link} from 'react-router-dom';


class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="search-text">
          <div class="container">
            <div class="row text-center">

              <div class="form">
                <h4>SIGN UP TO OUR NEWSLETTER</h4>
                <form id="search-form" class="form-search form-horizontal">
                  <input type="text" class="input-search" placeholder="Email Address" />
                  <button type="submit" class="btn-search">SUBMIT</button>
                </form>
              </div>

            </div>
          </div>
        </div>

        <footer>
          <div class="container">
            <div class="row">

              <div class="col-md-4 col-sm-6 col-xs-12">
                <span class="logo">EGo Clothing</span>
              </div>

              <div class="col-md-4 col-sm-6 col-xs-12">
                <ul class="menu">
                  <span>Menu</span>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>

                  <li>
                    <Link to='/store'>Store</Link>
                  </li>

                  <li>
                    <Link to='/'>Contact</Link>
                  </li>
                </ul>
              </div>

              <div class="col-md-4 col-sm-6 col-xs-12">
                <ul class="address">
                  <span>Contact</span>
                  <li>
                    <i class="fa fa-phone" aria-hidden="true"></i> (+84) 123456789
                  </li>
                  <li>
                    <i class="fa fa-map-marker" aria-hidden="true"></i> 227 NGUYEN VAN CUU, DICS 3, HCMC
                  </li>
                  <li>
                    <i class="fa fa-envelope" aria-hidden="true"></i> contact@egoclothing.com
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}

export default Footer;