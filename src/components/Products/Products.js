import React, { Component } from 'react';
import Product from '../Product/Product';
import './Products.css'
import { rawData } from '../../raw_data';

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: null,
      filteredProducts: [],
      productsInCart: [],
      currentProduct: {},
      currentQuantity: 0
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

  handleChange = (event) => {
    this.setState({
      currentQuantity: event.target.value
    });
  }

  handleSubmit = async(event) => {
    event.preventDefault();
    let productToAdd = {...this.state.currentProduct, quantity: this.state.currentQuantity}
    let newCartProducts = [...this.state.productsInCart, productToAdd]
    await this.setState({
      productsInCart: newCartProducts
    });

    this.props.receiveProductsInCart(this.state.productsInCart)
  }

  handleProductSelect = (event) => {
    let currentProduct = this.state.currentProduct
    if (event.target.id !== null) {

      currentProduct = this.state.products.find((product) => {
        return product.id === parseInt(event.target.id)
      });
    }
    this.setState({ currentProduct })
    return currentProduct
  }

  returnProducts = () => {
    let filteredProducts = this.filterProductsBySearch();
    return filteredProducts.map((product, i) => {
      return(
        <div className='col-3 border text-center padding-x-sm' onClick={this.handleProductSelect} key={i}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <em>${product.price}</em>
          <form onSubmit={this.handleSubmit} product={product}>
            <label>
             Quantity in Cart:
             <input type='number' min='0' name='quantity' onChange={this.handleChange} />
            </label>
             <input type='submit' value='Submit' id={product.id} onSubmit={this.handleSubmit} />
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
          <div className='sort-position'>
            <button onClick={() => this.handleClick('ascending')}>
            <i className="fas fa-arrow-alt-circle-up" />
            </button>
            <button onClick={() => this.handleClick('descending')}>
            <i className="fas fa-arrow-circle-down" />
            </button>
          </div>
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
