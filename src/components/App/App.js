import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: null,
      search: null,
      productsInCart: []
    }
  }

  receiveProducts = (products) => {
    this.setState({
      products
    });
  }

  receiveSearch = (search) => {
    this.setState({
      search
    });
  }

  receiveProductsInCart = (productsInCart) => {
    // let updatedCartItems = [...this.state.allCartItems, ...this.props.productsInCart]

    this.setState({
      productsInCart
    });
  }

  render() {
    return (
      <>
        <Route path='/' render={(props) => <Navbar {...props} receiveSearch={this.receiveSearch} products={this.state.products} />}/>
        <Route exact path='/' render={(props) => <Products {...props} search={this.state.search} receiveProductsInCart={this.receiveProductsInCart} receiveProducts={this.receiveProducts} />} />
        <Route path='/cart' render={(props) => <Cart {...props} productsInCart={this.state.productsInCart} />} />
      </>
    );
  }
}

export default App;
