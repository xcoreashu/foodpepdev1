import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card , Col ,Row , Button } from 'mdbreact';

class Cart extends Component {
  render() {
  if(this.props.cart[0]){
    return this.renderCart();
  }  else {
      return this.renderEmpty();
    }
  }
  renderEmpty() {
    return(<div></div>)
  }
  renderCart() {
    const cartItemsList = this.props.cart.map(function(cartArr){
      return (
        <Card key = {cartArr.id}>
        <Row>
        <Col xs = "12" sm = "4">
        <h6>{cartArr.title}</h6>
        </Col>
        </Row>
        </Card>
      )
    }
  )
  return (
    <Card header = "Cart" bsStyle = "primary">
    {cartItemsList}
    </Card>
  )
  }
  
}
function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  }
}
  export default connect(mapStateToProps)(Cart);
