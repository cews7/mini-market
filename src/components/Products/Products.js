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
        <div className="col-3 border text-center padding-x-sm" key={i}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <em>{product.price}</em>
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
