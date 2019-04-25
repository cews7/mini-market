import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Products extends Component {
  state = {
    products: []
  }
  render() {
    return (
      <>
        <div className='py-5'>
          <div className='container'>
            <div className='row'>
            </div>
          </div>
        </div>
      </>
        // <Product />
    )
  }
}
