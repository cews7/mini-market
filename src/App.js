import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Products} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </>
  );
}

export default App;
