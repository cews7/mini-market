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
      products: null
    }
  }

  receiveProducts = (products) => {
    this.setState({
      products
    });
  }

  render() {
    return (
      <>
        <Route path='/' render={(props) => <Navbar {...props} products={this.state.products} />}/>
        <Route exact path='/' render={(props) => <Products {...props} receiveProducts={this.receiveProducts} />} />
        <Route path='/cart' component={Cart} />
      </>
    );
  }
}

export default App;
