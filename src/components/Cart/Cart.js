import React, { Component } from 'react';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      currentCartItems: []
    }
  }

  componentDidMount = () => {
    this.setState({
      currentCartItems: this.props.allCartItems
    })
  }

  returnProductsInCart = () => {
    return this.state.currentCartItems.map((product, i) => {
      return (
        <div className='col-3 border text-center padding-x-sm' key={i}>
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
            { this.props.allCartItems.length ? this.returnProductsInCart() : null }
          </div>
        </div>
      </div>
    </>
    )
  }
}
