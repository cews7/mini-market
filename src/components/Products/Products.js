import React, { Component } from 'react';
import Product from '../Product/Product';
import { rawData } from '../../raw_data';

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: null,
      filteredProducts: [],
      productsInCart: []
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
          <form>
            <label>
             Quantity in Cart:
             <input type='text' name='quantity' />
            </label>
             <input type='submit' value='Submit' />
          </form>
        </div>
      )
    });
  }

  handleClick = (sortOrder) => {
    let filteredProducts = this.filterProductsBySearch();
    if (sortOrder === 'ascending') {
      filteredProducts = filteredProducts.sort((a, b) => {
        return a.price - b.price
      });
    } else {
      filteredProducts = filteredProducts.sort((a, b) => {
        return b.price - a.price
      });
    }
    return this.setState({
      filteredProducts
    });
  }

  render() {
    return (
      <>
        <div className='py-5'>
          <div className='container'>
          <button onClick={() => this.handleClick('ascending')}>
          <i className="fas fa-arrow-alt-circle-up" />
          </button>
          <button onClick={() => this.handleClick('descending')}>
          <i className="fas fa-arrow-circle-down" />
          </button>
            <div className='row'>
             { this.state.products !== null ? this.returnProducts() : null }
            </div>
          </div>
        </div>
      </>
    )
  }
}
