import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import _ from 'underscore';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: null,
      search: null,
      allCartItems: []
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

  adjustProductQuantity = (updatedItems) => {
    this.setState({
      allCartItems: updatedItems
    });
  }


  receiveProductsInCart = (productAddingToCart) => {
    let updatedCartItems = this.state.allCartItems
    let includesItem = _.some(this.state.allCartItems, (item) => { return item.name === productAddingToCart.name})

    if (!includesItem && (productAddingToCart.quantity > 0)) {
      updatedCartItems = [...this.state.allCartItems, productAddingToCart]
    } else {
      updatedCartItems.map((itemInCart) => {
        if (itemInCart.name === productAddingToCart.name) {
          itemInCart.quantity = parseInt(itemInCart.quantity) + parseInt(productAddingToCart.quantity)
          return itemInCart
        } else {
          return itemInCart
        }
      });
    }

    this.setState({
      allCartItems: updatedCartItems
    });
  }

  render() {
    return (
      <>
        <Route path='/' render={(props) => <Navbar {...props} receiveSearch={this.receiveSearch} products={this.state.products} />}/>
        <Route exact path='/' render={(props) => <Products {...props} search={this.state.search} receiveProductsInCart={this.receiveProductsInCart} receiveProducts={this.receiveProducts} />} />
        <Route path='/cart' render={(props) => <Cart {...props} allCartItems={this.state.allCartItems} adjustProductQuantity={this.adjustProductQuantity}/>} />
      </>
    );
  }
}

export default App;
