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

  componentDidMount = async() => {
    await this.setState({
      products: rawData
    });
    this.props.receiveProducts(this.state.products)
  }

  returnProducts = () => {
    return this.state.products.map((product, i) => {
      return(
        <div className="col-3 border text-center padding-x-sm" key={i}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <em>${product.price}</em>
        </div>
      )
    });
  }

  render() {
    console.log(this.props.search)
    return (
      <>
        <div className='py-5'>
          <div className='container'>
            <div className='row'>
             {
               this.state.products !== null ? this.returnProducts() : null
             }
            </div>
          </div>
        </div>
      </>
    )
  }
}
