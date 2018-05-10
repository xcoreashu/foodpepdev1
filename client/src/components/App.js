import React , { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
const RestaurantList = () => <h2>RestaurantList</h2>
const ChooseOrder = () => <h2>ChooseOrder</h2>
const PlaceOrder = () => <h2>PlaceOrder</h2>
const OrderPlaced = () => <h2>OrderPlaced</h2>

class App extends Component {
componentDidMount() {
  this.props.fetchUser();

}


  render() {
  return(


    <BrowserRouter>
    <div>
    <Header />
    <Route exact path = "/" component = {Landing} />

    <Route exact path = "/restaurantsearch" component = {RestaurantList} />
    <Route exact path = "/restaurantsearch/chooseorder" component = {ChooseOrder} />
    <Route exact path = "/restaurantsearch/chooseorder/placeorder" component = {PlaceOrder} />
    <Route  path = "/restaurantsearch/chooseorder/placeorder/orderplaced" component = {OrderPlaced} />
    <Footer />

    </div>
    </BrowserRouter>


  );
}
}
export default connect (null , actions)(App);
