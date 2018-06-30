import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'mdbreact';
const CheckOutReview = ( { onCancel }) => {
  return (
    <div>
    <h5>Please confirm your entries</h5>
    <Button color = "yellow darken-3"
    onClick={onCancel}
    >
Back
    </Button>
    </div>
  );
};
function mapStateToProps(state){
  console.log(state);
  return {};
}
export default connect(mapStateToProps)(CheckOutReview);
