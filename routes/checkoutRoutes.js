const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Checkout = mongoose.model('checkout');
const Mailer = require('../services/Mailer');
const checkoutTemplate = require('../services/emailTemplates/checkoutTemplate');
module.exports = app => {
app.post('/api/checkout',(req,res) => {
  res.send('Thank you for Ordering!');

});
app.post('/api/checkout',requireLogin,(req,res) => {
const { name , address, phoneno , email } = req.body;

const checkout = new CheckOut({
  name,
  address,
  phoneno,
  email: email.split(',').map(email => ({
    _user = req.user.id
  });
// send a email //
const mailer = New Mailer(checkout,checkoutTemplate(checkout));

})
})
};
