import React, { Component } from 'react';
import Product from '../Product/Product';
import { rawData } from '../../raw_data';

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: null
    }
  }

  componentDidMount() {
    this.setState({
      products: rawData
    });
  }

  returnProducts = () => {
    return this.state.products.map((product, i) => {
      return(
        <div key={i}>
          <p>{product.name}</p>
        </div>
      )
    });
  }

  render() {
    return (
      <>
        <div className='py-5'>
          <div className='container'>
            <div className='row'>
             {
               this.state.products !== null ? this.returnProducts() : null
               // this.returnProducts()
             }
            </div>
          </div>
        </div>
      </>
        // <Product />
    )
  }
}
