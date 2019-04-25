import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <Route path='/' component={Navbar} />
      <Route exact path='/' component={Products} />
      <Route path='/cart' component={Cart} />
    </>
  );
}

export default App;
