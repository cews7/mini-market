import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

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
