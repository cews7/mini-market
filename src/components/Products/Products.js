import React, { Component } from 'react';
import Product from '../Product/Product';
import { rawData } from '../../raw_data';

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: null,
      filteredProducts: []
    }
  }

  componentDidMount = async() => {
    await this.setState({
      products: rawData
    });
    this.props.receiveProducts(this.state.products)
  }

  filterProductsBySearch = () => {
    let filteredProducts = this.state.products;
    if (this.props.search) {
      filteredProducts = filteredProducts.filter((product) => {
        return product.name.toLowerCase().includes(this.props.search) ||
        product.description.toLowerCase().includes(this.props.search)
      })
    }
    return filteredProducts;
  }

  returnProducts = () => {
    let filteredProducts = this.filterProductsBySearch();
    return filteredProducts.map((product, i) => {
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
    return (
      <>
        <div className='py-5'>
          <div className='container'>
            <div className='row'>
             { this.state.products !== null ? this.returnProducts() : null }
            </div>
          </div>
        </div>
      </>
    )
  }
}
