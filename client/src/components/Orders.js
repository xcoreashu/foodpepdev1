import React , { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';
import { bindActionCreators } from 'redux';
import { Card, Col , Row , Button } from 'mdbreact';


class Orders extends Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
<div className = "container">
<Card>
<div className = "card-header">Orders amount equals {Cart.totalAmount}</div>
<div className = "card-bg-primary text-dark">
</div>
</Card>
</div>
)
}
}


function mapStateToProps(state){
   return {
     cart: state.cart.cart,
     totalAmount:state.cart.totalAmount
  }
  }



export default connect(mapStateToProps,null)(Orders);
