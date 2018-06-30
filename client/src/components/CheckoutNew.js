import React , { Component } from 'react';
import CheckoutForm from './CheckoutForm';
import CheckOutReview from './CheckOutFormReview';
import Order from './Orders';
class CheckoutNew extends Component {
  state = { showFormReview: false };
  renderContent() {
    if (this.state.showFormReview){
      return <CheckOutReview
onCancel = {() => this.setState({ showFormReview: false })}
      />;
    }
    return <CheckoutForm
    onCheckoutSubmit={() => this.setState({ showFormReview: true })}
     />;
  }
  render() {
    return (
      <div>
    {this.renderContent()}
      </div>
    );
  }
}
export default CheckoutNew;
