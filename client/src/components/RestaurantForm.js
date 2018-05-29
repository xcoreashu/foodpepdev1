import React , { Component } from 'react';
import { Input,Card,CardBody,Button,Row,Col,form } from 'mdbreact';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';
import { RestaurantItem } from './RestaurantItem';
import RestaurantList from './RestaurantList';
import {postRestaurants} from '../actions/index.js';

class RestaurantForm extends Component {

  handleSubmit() {
    const restaurant = [{
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
        price: findDOMNode(this.refs.price).value,

    }]
    this.props.postRestaurants(restaurant);

  }

  render() {
    return (
      <Card>
      <CardBody>
      <h2 className = "mb-5">Add Restaurants</h2>
      <form>
    <div className = "form-group">
    <label for ="formgrouprestaurantinput">Restaurant name</label>
    <input type = "text" className = "form-control" id="title" placeholder = "restaurant-name" ref = "title" />
    <label for = "formgroupcostinput">Description</label>
    <input type = "text" className = "form-control" id = "description" placeorder = "description" ref = "description" />
    <label for = "formgroupcuisinesinput">Cost for Two</label>
    <input type = "number" className = "form-control" id = "price" placeholder = "cost-for-two" ref = "price" />
      {RestaurantList}
    <div className = "text-center">
    <Button onClick={this.handleSubmit.bind(this)} color = "deep-orange">Add</Button>

  </div>
  </div>
      </form>


      </CardBody>
      </Card>

    )
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({postRestaurants} , dispatch)
}
export default connect(null,mapDispatchToProps)(RestaurantForm);
