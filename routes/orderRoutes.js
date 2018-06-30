
const express = require('express');
 const mongoose = require('mongoose');
 const keys = require('../config/keys');
 const orders = mongoose.model('orders');
 module.exports = (app) => {
   app.get('/api/orders',function(req,res){
     orders.find(function(err,orders){
       if (err) {
         throw err;
       }
       res.json(orders);
     })
});

app.post('/api/orders', (req,res) => {
  var orders = req.body;
  orders.create(
    order , function(err,orders){
      if (err) {
        throw err;
      }
      res.json(orders);
    })
  });

}
