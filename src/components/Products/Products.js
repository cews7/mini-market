import React, { Component } from 'react';
import './Products.css'
import { rawData } from '../../raw_data';

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: null,
      filteredProducts: [],
      currentProduct: {},
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
      });
    }
    return filteredProducts
  }

  handleChange = async(product, event) => {
    product.quantity = event.target.value

    await this.setState({
      currentProduct: product
    });
  }

  handleSubmit = async(event) => {
    event.preventDefault()
    this.props.receiveProductsInCart(this.state.currentProduct)
  }

  handleProductSelect = (event) => {
    let currentProduct = this.state.currentProduct
    if (event.target.id !== null) {
      currentProduct = this.state.products.find((product) => {
        return product.id === parseInt(event.target.id)
      });
    }
    this.setState({
      currentProduct
    });
    return currentProduct
  }

  returnProducts = () => {
    let filteredProducts = this.filterProductsBySearch();
    return filteredProducts.map((product, i) => {
      return(
        <div className="col-3">
          <div className='text-center card custom-card' onClick={this.handleProductSelect} key={i}>
            <h3 className='card-header'>{product.name}</h3>
            <div className='card-body'>
              <h5 className='card-title'>{product.description}</h5>
              <p className='card-text'>${product.price}</p>
              <form onSubmit={this.handleSubmit} product={product}>
                <div className='form-group row'>
                  <label className='col-5 col-form-label'>
                    Quantity: &nbsp;
                  </label>
                  <input type='number' autoComplete="off" min='0' name='quantity' onChange={this.handleChange.bind(this, product)} className='form-control col-5' value={product.quantity} />
                </div>
               <button type='submit' className='btn btn-primary' id={product.id} onSubmit={this.handleSubmit}>Add to Cart</button>
            </form>
          </div>
        </div>
      </div>
      )
    });
  }

  handleClick = (sortOrder) => {
    let filteredProducts = this.filterProductsBySearch()
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
