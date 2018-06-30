const mongoose = require('mongoose');
const EmailSchema = require('./Email');
const { Schema } = mongoose;
const checkoutSchema = new Schema({
  name: String,
  address: String,
  phoneno: Number,
  email: [EmailSchema],
  _user: { type: Schema.Types.ObjectId,ref: 'User'}
});
mongoose.model('checkout',checkoutSchema);
