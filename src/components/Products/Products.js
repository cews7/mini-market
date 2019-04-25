import React, { Component } from 'react';
import Product from '../Product/Product';
import { rawData } from '../../raw_data';

export default class Products extends Component {
  state = {
    products: rawData
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
