import React, { Component } from 'react';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      allCartItems: []
    }
  }
  returnProductsInCart = () => {
    return this.props.productsInCart.map((product, i) => {
      return (
        <div className='col-3 border text-center padding-x-sm'>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <em>${product.price}</em>
          <br/>
          <em>Quantity: {product.quantity}</em>
        </div>
      )
    });
  }

  render() {
    return(
    <>
      <div className='py-5'>
        <div className='container'>
          <div className='row'>
            { this.props.productsInCart.length ? this.returnProductsInCart() : null }
          </div>
        </div>
      </div>
    </>
    )
  }
}
