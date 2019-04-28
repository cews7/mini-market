import React, { Component } from 'react';
import _ from 'underscore';

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
    });
  }

  handleRemove = (product, event) => {
    let updatedItems = _.filter(this.state.currentCartItems, (item) => {
      return item.name !== product.name
    });

    this.setState({
      currentCartItems: updatedItems
    });

    this.props.adjustProductQuantity(this.state.currentCartItems)
  }

  handleChange = async(product, event) => {
    let updatedItems = this.state.currentCartItems.map((item) => {
      if (item.name == product.name) {
        item.quantity = event.target.value
        return item
      } else {
        return item
      }
    });

    await this.setState({
      currentCartItems: updatedItems
    })

    this.props.adjustProductQuantity(this.state.currentCartItems)
  }

  returnProductsInCart = () => {
    return this.state.currentCartItems.map((product, i) => {
      return (
        <div className='col-3 border text-center padding-x-sm' key={i}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <em>${product.price}</em>
          <br/>
          <label>Quantity:
            <input type='number' min='1' value={product.quantity} autoComplete="off" name='quantity' onChange={this.handleChange.bind(this, product)} />
          </label>
          <button onClick={this.handleRemove.bind(this, product)}>Remove</button>
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
