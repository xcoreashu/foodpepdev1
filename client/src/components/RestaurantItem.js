import React, {Component } from 'react';

import { Row, Col, Card, CardBody, Button } from 'mdbreact';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart } from '../actions/cartActions';

class RestaurantItem extends Component {
  handleCart() {
    const restaurant = [...this.props.cart,{
      id:this.props.id,
      title:this.props.title,
      description:this.props.description,
      price:this.props.price
    }]
  }
  render() {
    return(
      <Card>
      <CardBody>
      <Row>
      <Col xs = "12" sm = "6" md="4" >

      <h6>{this.props.title}</h6>
      <p>{this.props.description}</p>
      <h6>usd. {this.props.price}</h6>
  <Button onClick = {this.handleCart.bind(this)} color="mdb-color">Order Now</Button>
      </Col>





      </Row>
      </CardBody>
      </Card>

    )
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addToCart:addToCart
  },dispatch)

}

export default connect(mapStateToProps,mapDispatchToProps)(RestaurantItem);
