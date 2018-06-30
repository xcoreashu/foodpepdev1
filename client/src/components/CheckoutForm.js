import React , { Component } from 'react';
import { Button } from 'mdbreact';
import validateEmail from '../utils/validateEmail';
import __ from 'lodash';
import { reduxForm , Field } from 'redux-form';
import CheckoutField from './CheckoutField';
const FIELDS = [
  { label: 'Name',name:'name' },
  { label: 'Address',name: 'subject'},
  { label: 'Phoneno',name: 'number'},
  { label: 'email',name: 'email'}
];
class CheckoutForm extends Component {


  renderFields() {
    return  __.map(FIELDS,({ label , name }) => {
      return (
        <Field key = { name }
        component = {CheckoutField}
        type = "text"
        label = {label}
        name = {name} />

      );
    });

    }
    render() {
    return (
      <div>
      <form
      onSubmit = {this.props.handleSubmit( this.props.onCheckoutSubmit)}>
      {this.renderFields()}
      <Button type = "Submit" color = "deep-orange">Submit</Button>

      </form>
      </div>


    )
  }
}
function validate(values){
const errors = {};
errors.email = validateEmail(values.email || '');
__.each(FIELDS , ({ name }) => {
  if (!values[name]) {
    errors[name] = 'You must provide a Value'
  }
});
return errors;

}
export default reduxForm({
  validate,
  form: 'CheckoutForm',
  destroyOnUnmount: false
})(CheckoutForm);
