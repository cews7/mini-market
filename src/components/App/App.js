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
      isCart: null
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

  receiveCart = (isCart) => {
    this.setState({
      isCart
    });
  }

  render() {
    return (
      <>
        <Route path='/' render={(props) => <Navbar {...props} receiveCart={this.receiveCart} receiveSearch={this.receiveSearch} products={this.state.products} />}/>
        <Route exact path='/' render={(props) => <Products {...props} isCart={this.state.isCart} search={this.state.search} receiveProducts={this.receiveProducts} />} />
        <Route path='/cart' component={Cart} />
      </>
    );
  }
}

export default App;
