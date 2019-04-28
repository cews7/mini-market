import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { matchPath } from 'react-router';
import './Navbar.css';
import minimarket_logo from '../../minimarket_logo.png';


export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  handleSearchInput = async (event) => {
    await this.setState({
      search: event.target.value
    });
    this.props.receiveSearch(this.state.search.toLowerCase())
  }

  render() {
    const isCartPathActive = !!matchPath(
      this.props.location.pathname,
      '/cart'
    )
    return (
      <div className="navbar navbar-dark bg-dark navbar-height">
        <ul className='navbar-nav align-items-center products-position'>
          <li>
            <Link to='/'>
              <img src={minimarket_logo} className="pull-left logo-height" />
            </Link>
          </li>
        </ul>
        {
          !isCartPathActive &&
          <input className='search-position search-shape' type='text' placeholder='Search products...' value={this.state.search} onChange={this.handleSearchInput} />
        }
        <Link to='/cart' className='ml-auto'>
          <button className='cart-icon-position'>
            <i className='fas fa-cart-plus' />
          </button>
        </Link>
      </div>
    );
  }
}
