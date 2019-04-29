import React, { Component } from 'react';
import _ from 'underscore';
import './Cart.css'

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

  handleRemove = async(product, event) => {
    let updatedItems = _.filter(this.state.currentCartItems, (item) => {
      return item.name !== product.name
    });

    await this.setState({
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

  totalPrice = () => {
    let total = 0
    this.state.currentCartItems.map((product) => {
      total += product.quantity * product.price
    });
    return total
  }

  render() {
    return(
    <>
      <div className='py-5'>
        <div className='container'>
          { this.totalPrice() !== 0 ? <h3 className='cost-position cost-label'>Total Cost: ${ this.totalPrice() }</h3> : null }
          <div className='row'>
            { this.props.allCartItems.length ? this.returnProductsInCart() : <h1>Cart is empty...</h1> }
          </div>
        </div>
      </div>
    </>
    )
  }
}
