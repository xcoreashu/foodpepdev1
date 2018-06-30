const mongoose = require('mongoose');
// mongoose object has type property Schema //
const { Schema } = mongoose;
const orderSchema = new Schema({
  title: String,
  price: Number,
  quantity: Number,
  totalAmount: Number
})
mongoose.model('orders',orderSchema);
