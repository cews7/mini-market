import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import minimarket_logo from '../../minimarket_logo.png'

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-dark bg-dark navbar-height">
        <Link to='/'>
          <img src={minimarket_logo} className="pull-left" />
        </Link>
        <ul className='navbar-nav align-items-center products-position'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
              All Products
            </Link>
          </li>
        </ul>
        <Link to='/cart' className='ml-auto'>
          <button className='cart-icon-position'>
            <i className='fas fa-cart-plus' />
          </button>
        </Link>
      </div>
    )
  }
}
